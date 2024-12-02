export class Day02 {
  private reports: number[][];

  constructor() {
    const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

    const lines = input.trim().split('\n');
    this.reports = lines.map((line) =>
      line.split(' ').map((num) => parseInt(num)),
    );
  }

  part1(): number {
    return 0;
  }

  part2(): number {
    return 0;
  }
}
