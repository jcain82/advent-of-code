export class Day02 {
  private reports: number[][];

  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const input = require('fs').readFileSync(
      __dirname.replace('dist', 'assets') + '/day02.txt',
      'utf-8',
    );

    const lines = input.trim().split('\n');
    this.reports = lines.map((line) =>
      line.split(' ').map((num) => parseInt(num)),
    );
  }

  part1(): number {
    let safeCount = 0;
    for (const report of this.reports) {
      if (this.isSafe(report)) {
        safeCount++;
      }
    }

    return safeCount;
  }

  part2(): number {
    let safeCount = 0;
    for (const report of this.reports) {
      if (this.isSafe(report) || this.canBeMadeSafe(report)) {
        safeCount++;
      }
    }

    return safeCount;
  }

  private isSafe(report: number[]): boolean {
    let increasing = true;
    let decreasing = true;

    for (let i = 1; i < report.length; i++) {
      const diff = report[i] - report[i - 1];

      if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
        return false;
      }

      if (diff < 0) {
        increasing = false;
      } else if (diff > 0) {
        decreasing = false;
      }
    }

    // Report is safe only if consistently increasing or consistently decreasing
    return increasing || decreasing;
  }
  private canBeMadeSafe(report: number[]): boolean {
    for (let i = 0; i < report.length; i++) {
      // Create a modified report by removing the level at index `i`
      const modifiedReport = [...report.slice(0, i), ...report.slice(i + 1)];

      // Check if the modified report is safe
      if (this.isSafe(modifiedReport)) {
        return true;
      }
    }
    return false;
  }
}
