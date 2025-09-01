import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn()
  idUsuario: number;

  @Column({ unique: true })
  nombreUsuario: string;

  @Column()
  contrasena: string;

  @Column({ type: 'enum', enum: ['admin', 'vendedor'] }) //Cambia el tipo de rol
  rol: string;

  @CreateDateColumn()
  fechaCreacion: Date;
}
