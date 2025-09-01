import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';
@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}
  create(createProductoDto: CreateProductoDto): Promise<Producto> {
    const producto = this.productoRepository.create(createProductoDto);
    return this.productoRepository.save(producto);
  }
  findAll(): Promise<Producto[]> {
    return this.productoRepository.find({
      relations: ['categoria', 'gruposOpciones', 'gruposOpciones.opciones'],
    });
  }
  async findOne(id: number): Promise<Producto> {
    const producto = await this.productoRepository.findOne({
      where: { idProducto: id },
      relations: ['categoria', 'gruposOpciones', 'gruposOpciones.opciones'],
    });
    if (!producto)
      throw new NotFoundException(`Producto con ID #${id} no encontrado.`);
    return producto;
  }
  async update(
    id: number,
    updateProductoDto: UpdateProductoDto,
  ): Promise<Producto> {
    const producto = await this.productoRepository.preload({
      idProducto: id,
      ...updateProductoDto,
    });
    if (!producto)
      throw new NotFoundException(`Producto con ID #${id} no encontrado.`);
    return this.productoRepository.save(producto);
  }
  async remove(id: number): Promise<void> {
    const result = await this.productoRepository.delete(id);
    if (result.affected === 0)
      throw new NotFoundException(`Producto con ID #${id} no encontrado.`);
  }
}
