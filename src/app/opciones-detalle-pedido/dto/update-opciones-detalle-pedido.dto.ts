import { PartialType } from '@nestjs/mapped-types';
import { CreateOpcionesDetallePedidoDto } from './create-opciones-detalle-pedido.dto';

export class UpdateOpcionesDetallePedidoDto extends PartialType(CreateOpcionesDetallePedidoDto) {}
