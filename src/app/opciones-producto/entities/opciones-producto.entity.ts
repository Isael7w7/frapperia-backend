import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { GrupoOpcionesProducto } from './grupo-opciones-producto.entity';
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
