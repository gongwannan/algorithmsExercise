/**
 * 给定坐标轴上的一组线段，线段的起点和终点均为整数并且长度不小于1，请你从中找到最少数量的线段，这些线段可以覆盖住所有线段。
 * 输入描述
 * 第一行输入为所有线段的数量，不超过10000，后面每行表示一条线段，格式为”x,y”，
 * x和y 分别表示起点和终点，取值范围是[-10^5 ，10^5]。
 * 输出描述
 * 
 * 最少线段数量，为正整数。
 * 输入
 * 3
 * 1,4
 * 2,5
 * 3,6
 * 输出
 * 2
 */
// 贪心算法
function minCount(numArr: [number, number][]): number {
  let result = 1
  numArr.sort((a, b) => a[0] - b[0]);
  let currentRight = numArr[0][1];
  while (currentRight < numArr[numArr.length - 1][1]) {
    currentRight = numArr.filter(item => item[0] <= currentRight && item[1] > currentRight).sort((a, b) => b[1] - a[1])[0][1]
    result += 1
  }
  console.log(result)
  return result
}
minCount([[1, 4], [2, 5], [3, 6]])

