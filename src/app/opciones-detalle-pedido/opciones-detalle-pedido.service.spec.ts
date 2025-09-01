import { Test, TestingModule } from '@nestjs/testing';
import { OpcionesDetallePedidoService } from './opciones-detalle-pedido.service';

describe('OpcionesDetallePedidoService', () => {
  let service: OpcionesDetallePedidoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpcionesDetallePedidoService],
    }).compile();

    service = module.get<OpcionesDetallePedidoService>(OpcionesDetallePedidoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
