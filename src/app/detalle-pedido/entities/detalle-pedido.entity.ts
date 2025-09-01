import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Pedido } from './pedido.entity';
import { Producto } from './producto.entity';
import { OpcionesDetallePedido } from './opciones-detalle-pedido.entity';
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
