import { Test, TestingModule } from '@nestjs/testing';
import { OpcionesProductoService } from './opciones-producto.service';

describe('OpcionesProductoService', () => {
  let service: OpcionesProductoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpcionesProductoService],
    }).compile();

    service = module.get<OpcionesProductoService>(OpcionesProductoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
