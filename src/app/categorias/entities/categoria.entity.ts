import { Producto } from 'src/app/productos/entities/producto.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ name: 'Categorias' })
export class Categoria {
  @PrimaryGeneratedColumn() idCategoria: number;
  @Column() nombre: string;
  @Column('text', { nullable: true }) descripcion: string;
  @OneToMany(() => Producto, (producto) => producto.categoria)
  productos: Producto[];
}
