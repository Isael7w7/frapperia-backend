import { PartialType } from '@nestjs/mapped-types';
import { CreateOpcionesProductoDto } from './create-opciones-producto.dto';

export class UpdateOpcionesProductoDto extends PartialType(CreateOpcionesProductoDto) {}
