export class Day03 {
  private puzzleInput: string;

  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const input = require('fs').readFileSync(
      __dirname.replace('dist', 'assets') + '/day03.txt',
      'utf-8',
    );
    this.puzzleInput = input.trim();
  }

  public part1(): any {
    return this.handleMultiplicationCode(this.puzzleInput);
  }

  public part2(): number {
    return this.handleAdditionalInstructions(this.puzzleInput);
  }

  private handleMultiplicationCode(code: string): number {
    const regex: RegExp = /mul\((\d{1,3})+,(\d{1,3})+\)/;
    let result = 0;
    let match;
    while ((match = regex.exec(code)) !== null) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, num1, num2] = match;
      result += parseInt(num1) * parseInt(num2);
      code = code.replace(match[0], ''); // Remove the matched part to avoid infinite loop
    }
    return result;
  }

  private handleAdditionalInstructions(code: string): number {
    const regex: RegExp = /mul\((\d+),(\d+)\)|do\(\)|don't\(\)/;
    let result = 0;
    let enabled = true;
    let match;
    while ((match = regex.exec(code)) !== null) {
      const [instruction, num1, num2] = match;
      console.log(instruction, num1, num2);
      if (instruction === 'do()') {
        enabled = true;
      } else if (instruction === "don't()") {
        enabled = false;
      } else {
        if (match && enabled) {
          result += parseInt(num1) * parseInt(num2);
        }
      }

      code = code.replace(match[0], ''); // Remove the matched part to avoid infinite loop
    }
    return result;
  }
}
