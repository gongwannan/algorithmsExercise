/**
 * 在一个狭小的路口，每秒只能通过一辆车，假设车辆的颜色只有 3 种，找出 N 秒内经过的最多颜色的车辆数量。三种颜色编号为0 ，1 ，2
 * 输入描述
 * 第一行输入的是通过的车辆颜色信息。[0,1,1,2] 代表4 秒钟通过的车辆颜色分别是 0 , 1 , 1 , 2
 * 第二行输入的是统计时间窗，整型，单位为秒
 * 输出描述
 * 输出指定时间窗内经过的最多颜色的车辆数量。
 * 样例一：
 * 输入
 * 0 1 2 1
 * 3
 * 输出
 * 2
 * 样例解释
 * 在 3 秒时间窗内，每个颜色最多出现 2 次。例为：[1,2,1]
 * 样例二：
 * 输入
 * 0 1 2 1
 * 2
 * 输出
 * 
 * 1
 * 
 * 样例解释
 * 
 * 在 2 秒时间窗内，每个颜色最多出现1 次。
 */

function maxCar(numArr: number[], time: number): number {
  let result = 0;
  let left = 0, right = left + time;
  while (left <= numArr.length - time) {
    result = Math.max(innerFunc(numArr.slice(left, right)), result);
    left++; right++;
  }
  return result;
  function innerFunc(numArr: number[]): number {
    let map: Map<number, number> = new Map();
    for (let i = 0; i < numArr.length; i++) {
      let cur = numArr[i];
      if (map.has(cur)) {
        map.set(cur, map.get(cur) as number + 1);
      } else {
        map.set(cur, 1);
      }
    }
    let max = 1;
    for (let item of map.values()) {
      max = Math.max(max, item);
    }
    return max;
  }
}

console.log(
  maxCar([0, 1, 2, 1], 3),
  maxCar([0, 1, 2, 1], 2)
)