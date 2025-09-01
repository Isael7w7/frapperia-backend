import { Injectable } from '@nestjs/common';
import { CreateMovimientoInventarioDto } from './dto/create-movimiento-inventario.dto';
import { UpdateMovimientoInventarioDto } from './dto/update-movimiento-inventario.dto';

@Injectable()
export class MovimientoInventarioService {
  create(createMovimientoInventarioDto: CreateMovimientoInventarioDto) {
    return 'This action adds a new movimientoInventario';
  }

  findAll() {
    return `This action returns all movimientoInventario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movimientoInventario`;
  }

  update(id: number, updateMovimientoInventarioDto: UpdateMovimientoInventarioDto) {
    return `This action updates a #${id} movimientoInventario`;
  }

  remove(id: number) {
    return `This action removes a #${id} movimientoInventario`;
  }
}
