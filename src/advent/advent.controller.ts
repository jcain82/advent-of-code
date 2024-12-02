import { Controller, Get, Param, Query, Render } from '@nestjs/common';
import { Advent2024Service } from './2024/advent2024.service';

@Controller('advent/:year')
export class AdventController {
  constructor(private advent2024Service: Advent2024Service) {}

  @Get('day:day')
  @Render('advent/2024/day') // TOOD: Dynamic path
  solve(
    @Param('year') year: string,
    @Param('day') day: string,
    @Query('input') input: string,
  ) {
    // Year-specific logic is handled in the appropriate service
    const yearService = this.getYearService(year);
    console.log(`solveDay${day}`);
    const result = yearService[`solveDay${day}`](input);

    return { year, day, result };
  }

  private getYearService(year: string) {
    switch (year) {
      case '2024':
        return this.advent2024Service;
      default:
        throw new Error('Invalid year');
    }
  }
}
