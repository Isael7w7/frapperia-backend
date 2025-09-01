import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MovimientoInventarioService } from './movimiento-inventario.service';
import { CreateMovimientoInventarioDto } from './dto/create-movimiento-inventario.dto';
import { UpdateMovimientoInventarioDto } from './dto/update-movimiento-inventario.dto';

@Controller('movimiento-inventario')
export class MovimientoInventarioController {
  constructor(private readonly movimientoInventarioService: MovimientoInventarioService) {}

  @Post()
  create(@Body() createMovimientoInventarioDto: CreateMovimientoInventarioDto) {
    return this.movimientoInventarioService.create(createMovimientoInventarioDto);
  }

  @Get()
  findAll() {
    return this.movimientoInventarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movimientoInventarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovimientoInventarioDto: UpdateMovimientoInventarioDto) {
    return this.movimientoInventarioService.update(+id, updateMovimientoInventarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movimientoInventarioService.remove(+id);
  }
}
