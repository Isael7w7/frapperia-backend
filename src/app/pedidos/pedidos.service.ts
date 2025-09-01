import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository, DataSource } from 'typeorm';
import { Pedido } from '../entities/pedido.entity';
import { DetallePedido } from '../entities/detalle-pedido.entity';
import { OpcionesDetallePedido } from '../entities/opciones-detalle-pedido.entity';
import { Producto } from '../entities/producto.entity';
import { OpcionesProducto } from '../entities/opciones-producto.entity';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Cliente } from '../entities/cliente.entity';
import { MovimientoInventario } from '../entities/movimiento-inventario.entity';

@Injectable()
export class PedidosService {
  constructor(
    private readonly dataSource: DataSource,
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
    @InjectRepository(OpcionesProducto)
    private readonly opcionesRepository: Repository<OpcionesProducto>,
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async create(createPedidoDto: CreatePedidoDto) {
    return this.dataSource.transaction(async (manager) => {
      let montoTotalPedido = 0;
      let gananciaTotalPedido = 0;

      const pedido = manager.create(Pedido, {
        idCliente: createPedidoDto.idCliente,
        estado: 'pendiente',
        montoTotal: 0,
        gananciaTotal: 0,
      });
      const pedidoGuardado = await manager.save(pedido);

      for (const item of createPedidoDto.items) {
        const producto = await manager.findOneBy(Producto, {
          idProducto: item.idProducto,
        });
        if (!producto)
          throw new NotFoundException(
            `Producto con ID #${item.idProducto} no encontrado.`,
          );
        if (producto.stock < item.cantidad)
          throw new BadRequestException(
            `Stock insuficiente para ${producto.nombre}.`,
          );

        let precioAdicional = 0,
          costoAdicional = 0;
        let opcionesSeleccionadas: OpcionesProducto[] = [];

        if (item.opcionesSeleccionadas?.length > 0) {
          opcionesSeleccionadas = await manager.findBy(OpcionesProducto, {
            idOpcion: In(item.opcionesSeleccionadas),
          });
          if (
            opcionesSeleccionadas.length !== item.opcionesSeleccionadas.length
          )
            throw new BadRequestException('Opciones inválidas.');
          opcionesSeleccionadas.forEach((op) => {
            precioAdicional += Number(op.precioAdicional);
            costoAdicional += Number(op.costoAdicional);
          });
        }

        const precioUnitario = Number(producto.precioBase) + precioAdicional;
        const costoUnitario = Number(producto.costoBase) + costoAdicional;

        const detalle = manager.create(DetallePedido, {
          idPedido: pedidoGuardado.idPedido,
          idProducto: item.idProducto,
          cantidad: item.cantidad,
          precioUnitario,
          costoUnitario,
        });
        const detalleGuardado = await manager.save(detalle);

        if (opcionesSeleccionadas.length > 0) {
          const opcionesDetalle = opcionesSeleccionadas.map((op) =>
            manager.create(OpcionesDetallePedido, {
              idDetallePedido: detalleGuardado.idDetallePedido,
              idOpcion: op.idOpcion,
            }),
          );
          await manager.save(opcionesDetalle);
        }

        montoTotalPedido += precioUnitario * item.cantidad;
        gananciaTotalPedido += (precioUnitario - costoUnitario) * item.cantidad;

        producto.stock -= item.cantidad;
        await manager.save(producto);
        const movimiento = manager.create(MovimientoInventario, {
          idProducto: producto.idProducto,
          cantidad: -item.cantidad,
          tipo: 'salida',
        });
        await manager.save(movimiento);
      }

      pedidoGuardado.montoTotal = montoTotalPedido;
      pedidoGuardado.gananciaTotal = gananciaTotalPedido;

      if (createPedidoDto.idCliente) {
        await manager.increment(
          Cliente,
          { idCliente: createPedidoDto.idCliente },
          'totalCompras',
          montoTotalPedido,
        );
      }

      return await manager.save(pedidoGuardado);
    });
  }

  findAll() {
    return this.pedidoRepository.find({
      relations: [
        'cliente',
        'detalles',
        'detalles.producto',
        'detalles.opcionesSeleccionadas',
        'detalles.opcionesSeleccionadas.opcion',
      ],
      order: { fechaPedido: 'DESC' },
    });
  }

  // ... Aquí irían findOne y update
}
