import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Usuarios' })
export class Categoria {
  @PrimaryGeneratedColumn()
  idUsuario: number;

  @Column({ unique: true })
  nombreUsuario: string;

  @Column()
  contraseña: string;

  @Column({ type: 'enum', enum: ['admin', 'vendedor'] })
  rol: string;

  @CreateDateColumn()
  fechaCreacion: Date;
}
