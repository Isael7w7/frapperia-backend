import { Injectable } from '@nestjs/common';
import { CreateOpcionesProductoDto } from './dto/create-opciones-producto.dto';
import { UpdateOpcionesProductoDto } from './dto/update-opciones-producto.dto';

@Injectable()
export class OpcionesProductoService {
  create(createOpcionesProductoDto: CreateOpcionesProductoDto) {
    return 'This action adds a new opcionesProducto';
  }

  findAll() {
    return `This action returns all opcionesProducto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} opcionesProducto`;
  }

  update(id: number, updateOpcionesProductoDto: UpdateOpcionesProductoDto) {
    return `This action updates a #${id} opcionesProducto`;
  }

  remove(id: number) {
    return `This action removes a #${id} opcionesProducto`;
  }
}
