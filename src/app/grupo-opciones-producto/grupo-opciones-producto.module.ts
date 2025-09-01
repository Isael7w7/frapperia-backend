import { Module } from '@nestjs/common';
import { GrupoOpcionesProductoService } from './grupo-opciones-producto.service';
import { GrupoOpcionesProductoController } from './grupo-opciones-producto.controller';

@Module({
  controllers: [GrupoOpcionesProductoController],
  providers: [GrupoOpcionesProductoService],
})
export class GrupoOpcionesProductoModule {}
