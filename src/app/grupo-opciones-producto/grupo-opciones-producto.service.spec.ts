import { Test, TestingModule } from '@nestjs/testing';
import { GrupoOpcionesProductoService } from './grupo-opciones-producto.service';

describe('GrupoOpcionesProductoService', () => {
  let service: GrupoOpcionesProductoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrupoOpcionesProductoService],
    }).compile();

    service = module.get<GrupoOpcionesProductoService>(GrupoOpcionesProductoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
