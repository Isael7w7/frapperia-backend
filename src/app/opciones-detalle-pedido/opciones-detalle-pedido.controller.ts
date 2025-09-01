import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OpcionesDetallePedidoService } from './opciones-detalle-pedido.service';
import { CreateOpcionesDetallePedidoDto } from './dto/create-opciones-detalle-pedido.dto';
import { UpdateOpcionesDetallePedidoDto } from './dto/update-opciones-detalle-pedido.dto';

@Controller('opciones-detalle-pedido')
export class OpcionesDetallePedidoController {
  constructor(private readonly opcionesDetallePedidoService: OpcionesDetallePedidoService) {}

  @Post()
  create(@Body() createOpcionesDetallePedidoDto: CreateOpcionesDetallePedidoDto) {
    return this.opcionesDetallePedidoService.create(createOpcionesDetallePedidoDto);
  }

  @Get()
  findAll() {
    return this.opcionesDetallePedidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.opcionesDetallePedidoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOpcionesDetallePedidoDto: UpdateOpcionesDetallePedidoDto) {
    return this.opcionesDetallePedidoService.update(+id, updateOpcionesDetallePedidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.opcionesDetallePedidoService.remove(+id);
  }
}
