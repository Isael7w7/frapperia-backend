import { Test, TestingModule } from '@nestjs/testing';
import { MovimientosInventarioController } from './movimientos-inventario.controller';
import { MovimientosInventarioService } from './movimientos-inventario.service';

describe('MovimientosInventarioController', () => {
  let controller: MovimientosInventarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovimientosInventarioController],
      providers: [MovimientosInventarioService],
    }).compile();

    controller = module.get<MovimientosInventarioController>(MovimientosInventarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
