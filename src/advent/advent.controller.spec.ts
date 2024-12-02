import { Test, TestingModule } from '@nestjs/testing';
import { AdventController } from './advent.controller';
import { Advent2024Service } from './2024/advent2024.service';

describe('AdventController', () => {
  let controller: AdventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Advent2024Service],
      controllers: [AdventController],
    }).compile();

    controller = module.get<AdventController>(AdventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
