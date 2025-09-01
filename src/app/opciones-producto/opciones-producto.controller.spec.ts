import { Test, TestingModule } from '@nestjs/testing';
import { OpcionesProductoController } from './opciones-producto.controller';
import { OpcionesProductoService } from './opciones-producto.service';

describe('OpcionesProductoController', () => {
  let controller: OpcionesProductoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpcionesProductoController],
      providers: [OpcionesProductoService],
    }).compile();

    controller = module.get<OpcionesProductoController>(OpcionesProductoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
