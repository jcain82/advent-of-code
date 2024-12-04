import { Injectable } from '@nestjs/common';
import { Day01 } from './days/day01';
import { Day02 } from './days/day02';
import { Day03 } from './days/day03';

@Injectable()
export class Advent2024Service {
  solveDay01(): any {
    const day01 = new Day01();
    return { part1: day01.part1(), part2: day01.part2() };
  }

  solveDay02(): any {
    const day02 = new Day02();
    return { part1: day02.part1(), part2: day02.part2() };
  }

  solveDay03(): any {
    const day03 = new Day03();
    return { part1: day03.part1(), part2: day03.part2() };
  }
}
