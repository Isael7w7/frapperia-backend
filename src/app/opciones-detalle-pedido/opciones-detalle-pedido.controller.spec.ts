import { Test, TestingModule } from '@nestjs/testing';
import { OpcionesDetallePedidoController } from './opciones-detalle-pedido.controller';
import { OpcionesDetallePedidoService } from './opciones-detalle-pedido.service';

describe('OpcionesDetallePedidoController', () => {
  let controller: OpcionesDetallePedidoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpcionesDetallePedidoController],
      providers: [OpcionesDetallePedidoService],
    }).compile();

    controller = module.get<OpcionesDetallePedidoController>(OpcionesDetallePedidoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
