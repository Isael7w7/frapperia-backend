import { Pedido } from 'src/app/pedidos/entities/pedido.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'Clientes' })
export class Cliente {
  @PrimaryGeneratedColumn() idCliente: number;
  @Column() nombre: string;
  @Column() apellido: string;
  @Column({ unique: true, nullable: true }) correo: string;
  @Column({ nullable: true }) telefono: string;
  @Column('decimal', { precision: 10, scale: 2, default: 0.0 })
  totalCompras: number;
  @CreateDateColumn() fechaCreacion: Date;
  @OneToMany(() => Pedido, (pedido) => pedido.cliente) pedidos: Pedido[];
}
