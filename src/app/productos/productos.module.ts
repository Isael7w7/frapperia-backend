import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

// SOLUCIÓN AL ERROR 1 Y 2: Añadimos las importaciones que faltaban
import { Producto } from '../entities/producto.entity';
import { GrupoOpcionesProducto } from '../entities/grupo-opciones-producto.entity';
import { OpcionesProducto } from '../entities/opciones-producto.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Producto,
      GrupoOpcionesProducto,
      OpcionesProducto,
    ]),
  ],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
