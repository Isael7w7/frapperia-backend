import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { DetallePedido } from './detalle-pedido.entity';
import { OpcionesProducto } from './opciones-producto.entity';
@Entity({ name: 'OpcionesDetallePedido' })
export class OpcionesDetallePedido {
  @PrimaryGeneratedColumn() idOpcionDetallePedido: number;
  @Column() idDetallePedido: number;
  @Column() idOpcion: number;
  @ManyToOne(() => DetallePedido, (detalle) => detalle.opcionesSeleccionadas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'idDetallePedido' })
  detallePedido: DetallePedido;
  @ManyToOne(() => OpcionesProducto)
  @JoinColumn({ name: 'idOpcion' })
  opcion: OpcionesProducto;
}
