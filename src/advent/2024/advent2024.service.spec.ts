import { Test, TestingModule } from '@nestjs/testing';
import { Advent2024Service } from './advent2024.service';

describe('2024Service', () => {
  let service: Advent2024Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Advent2024Service],
    }).compile();

    service = module.get<Advent2024Service>(Advent2024Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
