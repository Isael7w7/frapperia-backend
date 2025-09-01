import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { Cliente } from './cliente.entity';
import { DetallePedido } from './detalle-pedido.entity';
@Entity({ name: 'Pedidos' })
export class Pedido {
  @PrimaryGeneratedColumn() idPedido: number;
  @Column({ nullable: true }) idCliente: number;
  @CreateDateColumn() fechaPedido: Date;
  @Column({
    type: 'enum',
    enum: ['pendiente', 'enProceso', 'completado', 'cancelado'],
  })
  estado: string;
  @Column('decimal', { precision: 10, scale: 2 }) montoTotal: number;
  @Column('decimal', { precision: 10, scale: 2 }) gananciaTotal: number;
  @ManyToOne(() => Cliente, (cliente) => cliente.pedidos, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'idCliente' })
  cliente: Cliente;
  @OneToMany(() => DetallePedido, (detalle) => detalle.pedido, {
    cascade: true,
  })
  detalles: DetallePedido[];
}
