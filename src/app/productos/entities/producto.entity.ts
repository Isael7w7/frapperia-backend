import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Categoria } from './categoria.entity';
import { GrupoOpcionesProducto } from './grupo-opciones-producto.entity';
@Entity({ name: 'Productos' })
export class Producto {
  @PrimaryGeneratedColumn() idProducto: number;
  @Column() idCategoria: number;
  @Column() nombre: string;
  @Column('text', { nullable: true }) descripcion: string;
  @Column('decimal', { precision: 10, scale: 2 }) precioBase: number;
  @Column('decimal', { precision: 10, scale: 2 }) costoBase: number;
  @Column({ default: 0 }) stock: number;
  @Column({ type: 'tinyint', width: 1, default: 0 }) esPersonalizable: boolean;
  @ManyToOne(() => Categoria, (categoria) => categoria.productos)
  @JoinColumn({ name: 'idCategoria' })
  categoria: Categoria;
  @OneToMany(() => GrupoOpcionesProducto, (grupo) => grupo.producto, {
    cascade: true,
  })
  gruposOpciones: GrupoOpcionesProducto[];
}
