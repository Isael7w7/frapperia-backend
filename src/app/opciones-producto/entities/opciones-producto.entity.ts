import { GrupoOpcionesProducto } from 'src/app/grupo-opciones-producto/entities/grupo-opciones-producto.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'OpcionesProducto' })
export class OpcionesProducto {
  @PrimaryGeneratedColumn() idOpcion: number;
  @Column() idGrupoOpcion: number;
  @Column() nombre: string;
  @Column('decimal', { precision: 10, scale: 2 }) precioAdicional: number;
  @Column('decimal', { precision: 10, scale: 2 }) costoAdicional: number;
  @ManyToOne(() => GrupoOpcionesProducto, (grupo) => grupo.opciones, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'idGrupoOpcion' })
  grupoOpcion: GrupoOpcionesProducto;
}
