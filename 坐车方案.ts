/**
 * 现在要举行一场会议，有很多代表团参加。但是他们可能在同一个时间到达，而负责接待它们的接待处处只有一辆汽车，现在为了提高车辆利用率，请帮接待员计算可以坐满车的接待方案，输出方案数量。
 * 限制条件如下:
 * 1.一个团只能上一辆车，并且代表团人数小于汽车容量
 * 2.需要将车辆坐满
 * 输入描述
 * 第一行 代表团人数，英文逗号隔开，代表团数量小于30，每个代表团人数小于30
 * 第二行 汽车载客量，汽车容量小于100
 * 输出描述
 * 坐满汽车的方案数量
 * 如果无解输出0
 * 示例1：
 * 输入
 * 5,4,2,3,2,4,9
 * 10
 * 输出
 * 4
 * 说明
 * 以下几种方式都可以坐满车，[2,3 5]、[2,4,4]、[2,3,5]、[2,4,4]
 */

function solution(arr: number[], capacity: number): number {
  let dpArr: number[][] = new Array(capacity + 1).fill(0).map(() => new Array(arr.length + 1).fill(0));
  dpArr[0][0] = 1;
  for (let i = 1; i <= capacity; i++) {
    for (let j = 1; j <= arr.length; j++) {
      // 假如当前质量够装下当前物品  分为两种情况 装或者不装
      if (i >= arr[j - 1]) {
        if (i === arr[j - 1]) {
          dpArr[i][j] = dpArr[i][j - 1] + 1
        } else { // 装完之后省下空间，则 
          dpArr[i][j] = dpArr[i][j - 1] + dpArr[i - arr[j - 1]][j - 1]
        }
      } else {
        dpArr[i][j] = dpArr[i][j - 1];
      }
    }
  }
  console.log(dpArr);
  return dpArr[capacity][arr.length];
}

console.log(solution([5, 4, 2, 3, 2, 4, 9], 10));
console.log(solution([1, 2, 3], 3));