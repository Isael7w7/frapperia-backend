import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsInt,
  IsBoolean,
  IsArray,
  ValidateNested,
  IsEnum,
} from 'class-validator';
class CreateOpcionDto {
  @IsString() @IsNotEmpty() nombre: string;
  @IsNumber() precioAdicional: number;
  @IsNumber() costoAdicional: number;
}
class CreateGrupoOpcionDto {
  @IsString() @IsNotEmpty() nombre: string;
  @IsEnum(['unica', 'multiple']) tipoSeleccion: 'unica' | 'multiple';
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOpcionDto)
  opciones: CreateOpcionDto[];
}
export class CreateProductoDto {
  @IsInt() idCategoria: number;
  @IsString() @IsNotEmpty() nombre: string;
  @IsString() @IsOptional() descripcion?: string;
  @IsNumber() precioBase: number;
  @IsNumber() costoBase: number;
  @IsInt() stock: number;
  @IsBoolean() esPersonalizable: boolean;
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateGrupoOpcionDto)
  @IsOptional()
  gruposOpciones?: CreateGrupoOpcionDto[];
}
