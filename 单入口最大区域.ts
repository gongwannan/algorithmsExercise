/**
 * 
 * 查找单入口空闲区域
 * 题目描述
 * 给定一个 m x n 的矩阵，由若干字符 'X' 和
 * 'O'构成，'X'表示该处已被占据，'O'表示该处空闲，请找到最大的单入口空闲区域。
 * 解释：
 * 空闲区域是由连通的'O'组成的区域，位于边界的'O'可以构成入口，单入口空闲区域即有且
 * 只有一个位于边界的'O'作为入口的由连通的'O'组成的区域。
 * 如果两个元素在水平或垂直方向相邻，则称它们是“连通”的。 
 * 输入描述
 * 第一行输入为两个数字，第一个数字为行数 m，第二个数字列数 n，两个数字以空格分隔
 * ，1 <= m, n <= 200，
 * 剩余各行为矩阵各行元素，元素为'X' 或 'O'，各元素间以空格分隔。 
 * 输出描述
 * 若有唯一符合要求的最大单入口空闲区域，输出三个数字，第一个数字为入口行坐标（范
 * 围为 0~行数-1），第二个数字为入口列坐标（范围为 0~列数- 1），第三个数字为区域大小，三个数字以空格分隔；
 * 若有多个符合要求的最大单入口空闲区域，输出一个数字，代表区域的大小；
 * 若没有，输出 NUL
 */
const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout })
var iterator = rl[Symbol.asyncIterator]()
const readline = async () => (await iterator.next()).value
let line: string;

let lineCount: number = 0;
let rowCounts = 0, colCounts = 0;
let areaArr: string[][] = [];
let resultArr: any[] = []
function BFS(areaArr: string[][], row: number, col: number): number {
  if (areaArr[row] && areaArr[row][col] && areaArr[row][col] === 'O') {
    areaArr[row][col] = 'X';
    // 含有入口时加上 40001 表格最大为 200 * 200 若结果超过 80000 则含有不止一个入口进而排除掉
    if (row === 0 || row === rowCounts - 1 || col === 0 || col === colCounts - 1) {
      return 40001 + BFS(areaArr, row - 1, col) + BFS(areaArr, row + 1, col) + BFS(areaArr, row, col - 1) + BFS(areaArr, row, col + 1)
    }
    return 1 + BFS(areaArr, row - 1, col) + BFS(areaArr, row + 1, col) + BFS(areaArr, row, col - 1) + BFS(areaArr, row, col + 1)
  }
  return 0
}

void (async function () {
  // Write your code here
  while ((line = await readline())) {
    lineCount++;
    if (lineCount === 1) {
      [rowCounts, colCounts] = line.split(" ").map(Number);
      continue;
    }
    if (lineCount <= rowCounts + 1) {
      areaArr.push(line.split(" "));
      if (lineCount === rowCounts + 1) {
        for (let i = 0; i < rowCounts; i++) {
          for (let j = 0; j < colCounts; j++) {
            if (i === 0 || i === rowCounts - 1 || j === 0 || j === colCounts - 1) {
              resultArr.push([i, j, BFS(areaArr, i, j)])
            }
          }
        }
        resultArr = resultArr.filter((item) => item[2] !== 0 && item[2] < 80001)
        let maxAreaSize = 0
        resultArr.forEach((item) => {
          item[2] = item[2] - 40000
          maxAreaSize = Math.max(maxAreaSize, item[2])
        })
        if (maxAreaSize === 0) {
          console.log("Null")
        } else {
          resultArr.filter((item) => item[2] === maxAreaSize).forEach((item) => {
            console.log(`${item[0]} ${item[1]} ${item[2]}`)
          })
        }
      }
    }
  }
})()