/**
 * 为了提升软件编码能力，小王制定了刷题计划，他选了题库中的n道题，编号从0到n-1，并计划在m天内按照题目编号顺序刷完所有的题目（注意，小王不能用多天完成同一题）。
 * 在小王刷题计划中，小王需要用tme[i]的时间完成编号 i 的题目。
 * 
 * 此外，小王还可以查看答案，可以省去该题的做题时间。为了真正达到刷题效果，小王每天最多直接看一次答案。
 * 
 * 我们定义m天中做题时间最多的一天耗时为T（直接看答案的题目不计入做题总时间)。
 * 
 * 请你帮小王求出最小的T是多少。
 * 
 * 输入描述
 * 第一行输入为time，time[i]的时间完成编号 i 的题目
 * 
 * 第二行输入为m，m表示几天内完成所有题目，1 ≤ m ≤ 180
 * 
 * 输出描述
 * 最小耗时整数T
 * 
 * 用例
 * 输入 999,999,999
 * 4
 * 输出 0
 * 说明 在前三天中，小王每天都直接看答案，这样他可以在三天内完成所有的题目并不花任何时间
 */

// 
function minCompletionTime(time: number[], m: number): number {
  if (m >= time.length) {
    return 0;
  }
  time = time.sort((a, b) => b - a).slice(m, time.length)
  let left: number = Math.max(...time);
  let right: number = time.reduce((acc, curr) => acc + curr, 0)

  while (left < right) {
    const mid: number = Math.floor((left + right) / 2);
    if (!isFeasible(mid, time, m)) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

// 判断每日做题 dateLimit 时间 是否可以在 m 天内做完题
function isFeasible(dateLimit: number, time: number[], m: number): boolean {
  let days = 0;
  let dayTimeList = new Array(time.length).fill(0);
  for (let i = 0; i < time.length; i++) {
    let j = 0;
    while (j < days) {
      if (dayTimeList[j] + time[i] <= dateLimit) {
        dayTimeList[j] += time[i];
        break
      }
      j++;
    }
    if (j === days) {
      dayTimeList[days] = time[i];
      days++;
    }
  }
  return days <= m;
}
console.log(
  minCompletionTime([2, 3, 3, 4, 4, 5, 6], 10)
)


