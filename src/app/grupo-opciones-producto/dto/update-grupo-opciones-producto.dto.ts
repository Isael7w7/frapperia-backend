import { PartialType } from '@nestjs/mapped-types';
import { CreateGrupoOpcionesProductoDto } from './create-grupo-opciones-producto.dto';

export class UpdateGrupoOpcionesProductoDto extends PartialType(CreateGrupoOpcionesProductoDto) {}
