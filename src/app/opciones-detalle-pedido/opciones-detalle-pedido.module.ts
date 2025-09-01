import { Module } from '@nestjs/common';
import { OpcionesDetallePedidoService } from './opciones-detalle-pedido.service';
import { OpcionesDetallePedidoController } from './opciones-detalle-pedido.controller';

@Module({
  controllers: [OpcionesDetallePedidoController],
  providers: [OpcionesDetallePedidoService],
})
export class OpcionesDetallePedidoModule {}
