import { Module } from '@nestjs/common';
import { OpcionesProductoService } from './opciones-producto.service';
import { OpcionesProductoController } from './opciones-producto.controller';

@Module({
  controllers: [OpcionesProductoController],
  providers: [OpcionesProductoService],
})
export class OpcionesProductoModule {}
