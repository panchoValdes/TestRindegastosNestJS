import { Test, TestingModule } from '@nestjs/testing';
import { NumberController } from './number.controller';

describe('NumberController', () => {
  let controller: NumberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NumberController],
    }).compile();

    controller = module.get<NumberController>(NumberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getTheNumber', () => {
    it('debe devolver el producto 192384576', () => {
      const first = 192;
      const second = 3;
      const result = controller.getTheNumber(first, second);
      expect(result).toEqual('192384576');
    });

    it('debe manejar el segundo numero menor o igual a cero', () => {
      const first = 5;
      const second = 0;
      const result = controller.getTheNumber(first, second);
      expect(result).toEqual('El segundo numero debe ser mayor que cero');
    });

  });
});
