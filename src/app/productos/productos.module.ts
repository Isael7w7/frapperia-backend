import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Categoria } from '../categorias/entities/categoria.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Producto,
      GrupoOpcionesProducto,
      OpcionesProducto,
      Categoria, // Importar si necesitas validaciones o lógicas relacionadas
    ]),
  ],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
