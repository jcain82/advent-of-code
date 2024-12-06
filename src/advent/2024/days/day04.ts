export class Day04 {
  private puzzleInput: string[][];

  public constructor() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const input = require('fs').readFileSync(
      __dirname.replace('dist', 'assets') + '/day04.txt',
      'utf-8',
    );
    this.puzzleInput = input
      .trim()
      .split('\n')
      .map((line: string) => line.split(''));
  }
  public part1(): number {
    return this.countXMAS(this.puzzleInput);
  }

  public part2(): number {
    return this.countXMAS2(this.puzzleInput);
  }

  private countXMAS(grid: string[][]): number {
    const target = 'XMAS';
    const directions = [
      { dx: 0, dy: 1 }, // Horizontal (left to right)
      { dx: 0, dy: -1 }, // Horizontal reversed (right to left)
      { dx: 1, dy: 0 }, // Vertical (top to bottom)
      { dx: -1, dy: 0 }, // Vertical reversed (bottom to top)
      { dx: 1, dy: 1 }, // Diagonal (top-left to bottom-right)
      { dx: -1, dy: -1 }, // Diagonal reversed (bottom-right to top-left)
      { dx: 1, dy: -1 }, // Diagonal (bottom-left to top-right)
      { dx: -1, dy: 1 }, // Diagonal reversed (top-right to bottom-left)
    ];

    const numRows = grid.length;
    const numCols = grid[0].length;
    let count = 0;

    // Function to check if `XMAS` exists in a given direction starting from (x, y)
    function isMatch(x: number, y: number, dx: number, dy: number): boolean {
      for (let i = 0; i < target.length; i++) {
        const nx = x + i * dx; // Next x position
        const ny = y + i * dy; // Next y position

        // Check boundaries
        if (nx < 0 || nx >= numRows || ny < 0 || ny >= numCols) {
          return false;
        }

        // Check if the character matches
        if (grid[nx][ny] !== target[i]) {
          return false;
        }
      }
      return true;
    }

    // Iterate through the grid
    for (let x = 0; x < numRows; x++) {
      for (let y = 0; y < numCols; y++) {
        // Check for `XMAS` in all 8 directions
        for (const { dx, dy } of directions) {
          if (isMatch(x, y, dx, dy)) {
            count++;
          }
        }
      }
    }

    return count;
  }

  private countXMAS2(grid: string[][]): number {
    const numRows = grid.length;
    const numCols = grid[0].length;
    let count = 0;

    // Helper function to check if a diagonal is a valid "MAS"
    function isMAS(d1: string, d2: string, d3: string): boolean {
      const forward = d1 === 'M' && d2 === 'A' && d3 === 'S';
      const backward = d1 === 'S' && d2 === 'A' && d3 === 'M';
      return forward || backward;
    }

    // Iterate through all possible centers of an "X-MAS"
    for (let x = 1; x < numRows - 1; x++) {
      for (let y = 1; y < numCols - 1; y++) {
        // Check top-left to bottom-right diagonal (primary diagonal)
        const topLeft_MAS = isMAS(
          grid[x - 1][y - 1],
          grid[x][y],
          grid[x + 1][y + 1],
        );

        // Check top-right to bottom-left diagonal (secondary diagonal)
        const topRight_MAS = isMAS(
          grid[x - 1][y + 1],
          grid[x][y],
          grid[x + 1][y - 1],
        );

        // If both diagonals form valid "MAS", it's an "X-MAS"
        if (topLeft_MAS && topRight_MAS) {
          count++;
        }
      }
    }

    return count;
  }
}
