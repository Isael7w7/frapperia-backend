import { Test, TestingModule } from '@nestjs/testing';
import { GrupoOpcionesProductoController } from './grupo-opciones-producto.controller';
import { GrupoOpcionesProductoService } from './grupo-opciones-producto.service';

describe('GrupoOpcionesProductoController', () => {
  let controller: GrupoOpcionesProductoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrupoOpcionesProductoController],
      providers: [GrupoOpcionesProductoService],
    }).compile();

    controller = module.get<GrupoOpcionesProductoController>(GrupoOpcionesProductoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
