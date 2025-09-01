import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GrupoOpcionesProductoService } from './grupo-opciones-producto.service';
import { CreateGrupoOpcionesProductoDto } from './dto/create-grupo-opciones-producto.dto';
import { UpdateGrupoOpcionesProductoDto } from './dto/update-grupo-opciones-producto.dto';

@Controller('grupo-opciones-producto')
export class GrupoOpcionesProductoController {
  constructor(private readonly grupoOpcionesProductoService: GrupoOpcionesProductoService) {}

  @Post()
  create(@Body() createGrupoOpcionesProductoDto: CreateGrupoOpcionesProductoDto) {
    return this.grupoOpcionesProductoService.create(createGrupoOpcionesProductoDto);
  }

  @Get()
  findAll() {
    return this.grupoOpcionesProductoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.grupoOpcionesProductoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGrupoOpcionesProductoDto: UpdateGrupoOpcionesProductoDto) {
    return this.grupoOpcionesProductoService.update(+id, updateGrupoOpcionesProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.grupoOpcionesProductoService.remove(+id);
  }
}
