import { OpcionesProducto } from 'src/app/opciones-producto/entities/opciones-producto.entity';
import { Producto } from 'src/app/productos/entities/producto.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'GruposOpcionesProducto' })
export class GrupoOpcionesProducto {
  @PrimaryGeneratedColumn() idGrupoOpcion: number;
  @Column() idProducto: number;
  @Column() nombre: string;
  @Column({ type: 'enum', enum: ['unica', 'multiple'] }) tipoSeleccion: string;
  @ManyToOne(() => Producto, (producto) => producto.gruposOpciones, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'idProducto' })
  producto: Producto;
  @OneToMany(() => OpcionesProducto, (opcion) => opcion.grupoOpcion, {
    cascade: true,
  })
  opciones: OpcionesProducto[];
}
