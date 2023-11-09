import { Test, TestingModule } from '@nestjs/testing';
import { BirthdayController } from './birthday.controller';

describe('BirthdayController', () => {
  let controller: BirthdayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BirthdayController],
    }).compile();

    controller = module.get<BirthdayController>(BirthdayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getDaysUntilMyBirthday', () => {
    it('deberia devolver el numero correcto de dias', () => {
      const birthdate = '1998-06-07';
      const result = controller.getDaysUntilMyBirthday(birthdate);
      expect(result).toEqual('Faltan 211 dias para su cumpleaños.');
    });

    it('debe manejar el formato de fecha no valido', () => {
      const birthdate = 'Rindegastos';
      expect(() => controller.getDaysUntilMyBirthday(birthdate)).toThrowError(`Error al calcular los dias de cumpleaños`);
    });

  });
});
