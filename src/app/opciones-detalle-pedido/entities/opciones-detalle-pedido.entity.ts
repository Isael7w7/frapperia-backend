import { DetallePedido } from 'src/app/detalle-pedido/entities/detalle-pedido.entity';
import { OpcionesProducto } from 'src/app/opciones-producto/entities/opciones-producto.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

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
