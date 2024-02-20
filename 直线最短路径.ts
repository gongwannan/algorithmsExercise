/**
 * 学校的位置
题目描述
为了解决新学期学生暴涨的问题，小乐村要建所新学校。考虑到学生上学安全问题，需要
所有学生家到学校距离最短。
假设学校和所有的学生家，走在一条直线上。
请问，学校要建在什么位置，能使得学校到各个学生家的距离之和最短？
输入描述
输入的第一行是一个整数 N（1<=N<=1000），表示有 N 户家庭。
输入的第二行是一个属组 （0<=
<=10000），表示每户家庭的位置，所有家庭的位置都不相同。 输出描述
输出一行，一个整数，表示你确定的学校位置。如有多个位置相同，则输出值最小的位置
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let current = 1;
let counts = 0;
rl.on("line", function (line: string) {
  if (current % 2 === 1) {
    counts = parseInt(line);
  } else {
    console.log(
      line.split(" ").map(Number).reduce((pre: number, current: number) => pre + current, 0) / counts
    )
  }
  current++;
})