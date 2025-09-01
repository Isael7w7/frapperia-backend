import { Injectable } from '@nestjs/common';
import { CreateGrupoOpcionesProductoDto } from './dto/create-grupo-opciones-producto.dto';
import { UpdateGrupoOpcionesProductoDto } from './dto/update-grupo-opciones-producto.dto';

@Injectable()
export class GrupoOpcionesProductoService {
  create(createGrupoOpcionesProductoDto: CreateGrupoOpcionesProductoDto) {
    return 'This action adds a new grupoOpcionesProducto';
  }

  findAll() {
    return `This action returns all grupoOpcionesProducto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} grupoOpcionesProducto`;
  }

  update(id: number, updateGrupoOpcionesProductoDto: UpdateGrupoOpcionesProductoDto) {
    return `This action updates a #${id} grupoOpcionesProducto`;
  }

  remove(id: number) {
    return `This action removes a #${id} grupoOpcionesProducto`;
  }
}
