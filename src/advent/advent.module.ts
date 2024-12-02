import { Module } from '@nestjs/common';
import { AdventController } from './advent.controller';
import { Advent2024Service } from './2024/advent2024.service';

@Module({
  controllers: [AdventController],
  providers: [Advent2024Service],
})
export class AdventModule {}
