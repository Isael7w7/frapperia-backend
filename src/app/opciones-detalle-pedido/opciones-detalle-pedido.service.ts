import { Injectable } from '@nestjs/common';
import { CreateOpcionesDetallePedidoDto } from './dto/create-opciones-detalle-pedido.dto';
import { UpdateOpcionesDetallePedidoDto } from './dto/update-opciones-detalle-pedido.dto';

@Injectable()
export class OpcionesDetallePedidoService {
  create(createOpcionesDetallePedidoDto: CreateOpcionesDetallePedidoDto) {
    return 'This action adds a new opcionesDetallePedido';
  }

  findAll() {
    return `This action returns all opcionesDetallePedido`;
  }

  findOne(id: number) {
    return `This action returns a #${id} opcionesDetallePedido`;
  }

  update(id: number, updateOpcionesDetallePedidoDto: UpdateOpcionesDetallePedidoDto) {
    return `This action updates a #${id} opcionesDetallePedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} opcionesDetallePedido`;
  }
}
