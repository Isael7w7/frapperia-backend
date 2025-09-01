import { OpcionesDetallePedido } from 'src/app/opciones-detalle-pedido/entities/opciones-detalle-pedido.entity';
import { Pedido } from 'src/app/pedidos/entities/pedido.entity';
import { Producto } from 'src/app/productos/entities/producto.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'DetallesPedido' })
export class DetallePedido {
  @PrimaryGeneratedColumn() idDetallePedido: number;
  @Column() idPedido: number;
  @Column() idProducto: number;
  @Column() cantidad: number;
  @Column('decimal', { precision: 10, scale: 2 }) precioUnitario: number;
  @Column('decimal', { precision: 10, scale: 2 }) costoUnitario: number;
  @ManyToOne(() => Pedido, (pedido) => pedido.detalles, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'idPedido' })
  pedido: Pedido;
  @ManyToOne(() => Producto)
  @JoinColumn({ name: 'idProducto' })
  producto: Producto;
  @OneToMany(() => OpcionesDetallePedido, (opcion) => opcion.detallePedido, {
    cascade: true,
  })
  opcionesSeleccionadas: OpcionesDetallePedido[];
}
