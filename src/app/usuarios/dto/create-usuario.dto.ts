import { IsString, IsNotEmpty, IsEnum } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  nombreUsuario: string;

  @IsString()
  @IsNotEmpty()
  contrasena: string;

  @IsEnum(['admin', 'vendedor'])
  @IsNotEmpty()
  rol: 'admin' | 'vendedor';
}
