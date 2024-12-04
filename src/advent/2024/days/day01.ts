export class Day01 {
  private leftList: number[] = [];
  private rightList: number[] = [];

  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const input = require('fs').readFileSync(
      __dirname.replace('dist', 'assets') + '/day01.txt',
      'utf-8',
    );

    const lines = input.trim().split('\n');

    lines.forEach((line) => {
      const [left, right] = line.split('   ').map(Number); // Split line by tab and convert to numbers
      this.leftList.push(left);
      this.rightList.push(right);
    });
  }

  public part1(): any {
    return this.totalDistance(this.leftList, this.rightList);
  }

  public part2(): number {
    return this.similarityScore(this.leftList, this.rightList);
  }

  private totalDistance(leftList: number[], rightList: number[]): number {
    // Step 1: Sort both lists
    leftList.sort((a, b) => a - b);
    rightList.sort((a, b) => a - b);

    let totalDist = 0;

    // Step 2: Calculate the total distance
    for (let i = 0; i < leftList.length; i++) {
      totalDist += Math.abs(leftList[i] - rightList[i]);
    }

    return totalDist;
  }

  private similarityScore(leftList: number[], rightList: number[]): number {
    // Step 2: Count occurrences of each number in the right list
    const rightCountMap: Map<number, number> = new Map();
    for (const num of rightList) {
      rightCountMap.set(num, (rightCountMap.get(num) || 0) + 1);
    }

    // Step 3: Calculate the similarity score
    let similarityScore = 0;
    for (const num of leftList) {
      const countInRight = rightCountMap.get(num) || 0; // Get count from map or default to 0
      similarityScore += num * countInRight;
    }

    return similarityScore;
  }
}
