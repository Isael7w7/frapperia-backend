import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OpcionesProductoService } from './opciones-producto.service';
import { CreateOpcionesProductoDto } from './dto/create-opciones-producto.dto';
import { UpdateOpcionesProductoDto } from './dto/update-opciones-producto.dto';

@Controller('opciones-producto')
export class OpcionesProductoController {
  constructor(private readonly opcionesProductoService: OpcionesProductoService) {}

  @Post()
  create(@Body() createOpcionesProductoDto: CreateOpcionesProductoDto) {
    return this.opcionesProductoService.create(createOpcionesProductoDto);
  }

  @Get()
  findAll() {
    return this.opcionesProductoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.opcionesProductoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOpcionesProductoDto: UpdateOpcionesProductoDto) {
    return this.opcionesProductoService.update(+id, updateOpcionesProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.opcionesProductoService.remove(+id);
  }
}
