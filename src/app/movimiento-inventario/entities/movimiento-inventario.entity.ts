import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
@Entity({ name: 'MovimientosInventario' })
export class MovimientoInventario {
  @PrimaryGeneratedColumn() idMovimiento: number;
  @Column() idProducto: number;
  @Column() cantidad: number;
  @Column({ type: 'enum', enum: ['entrada', 'salida', 'ajuste'] }) tipo: string;
  @CreateDateColumn() fechaMovimiento: Date;
}
