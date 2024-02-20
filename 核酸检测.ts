/**
 * 核酸检测人员安排
 * 题目描述
 * 在系统、网络均正常的情况下组织核酸采样员和志愿者对人群进行核酸检测筛查。每名采
 * 样员的效率不同，采样效率为 N 人/小时。由于外界变化，采样员的效率会以 M 人/小时为
 * 粒度发生变化，M 为采样效率浮动粒度，M=N10%，输入保证 N10%的结果为整数。采样员
 * 效率浮动规则：采样员需要一名志愿者协助组织才能发挥正常效率，在此基础上，每增加
 * 一名志愿者，效率提升 1M，最多提升 3M；如果没有志愿者协助组织，效率下降 2M。
 * 怎么安排速度最快？求总最快检测效率（总检查效率为各采样人员效率值相加）。 
 * 输入描述
 * 第一行：第一个值，采样员人数，取值范围[1,100]；第二个值，志愿者人数，取值范围[1, 500]；
 * 第二行：各采样员基准效率值(单位人/小时)，取值范围[60,600]，保证序列中每项值计算 1
 * 0%为整数
 * 输出描述
 * 第一行：总最快检测效率(单位人/小时)
 */

(function check() {
  const rl = require("readline").createInterface({ input: process.stdin });
  const asyncIterator = rl[Symbol.asyncIterator]();
  const readline = async () => (await asyncIterator.next()).value;
  let line: string = "";
  let lineCount = 1;
  let dp: number[][] = [];
  let doctor: number[] = [];
  let num1 = 0, num2 = 0;
  void (async function () {
    while (line = await readline()) {
      if (lineCount === 1) {
        lineCount++
        [num1, num2] = line.split(" ").map(Number);
        dp = new Array(num1 + 1).fill(0).map(() => new Array(num2 + 1).fill(0));
        continue
      }
      doctor = line.split(" ").map(Number); 2
      doctor.unshift(0);
      for (let i = 1; i < num1 + 1; i++) {
        dp[i][0] = dp[i - 1][0] + doctor[i] * 0.8;
      }
      for (let i = 1; i < num2 + 1; i++) {
        for (let j = 1; j < num1 + 1; j++) {
          let speed1 = 0, speed2 = 0, speed3 = 0, speed4 = 0, speed5 = 0;
          switch (j) {
            case 1:
              speed1 = dp[i - 1][j] + doctor[i] * 0.8
              speed2 = dp[i - 1][j - 1] + doctor[i] * 1
              dp[i][j] = Math.max(speed1, speed2);
              break;
            case 2:
              speed1 = dp[i - 1][j] + doctor[i] * 0.8
              speed2 = dp[i - 1][j - 1] + doctor[i] * 1
              speed3 = dp[i - 1][j - 2] + doctor[i] * 1.1
              dp[i][j] = Math.max(speed1, speed2, speed3);
              break;
            case 3:
              speed1 = dp[i - 1][j] + doctor[i] * 0.8
              speed2 = dp[i - 1][j - 1] + doctor[i] * 1
              speed3 = dp[i - 1][j - 2] + doctor[i] * 1.1
              speed4 = dp[i - 1][j - 3] + doctor[i] * 1.2
              dp[i][j] = Math.max(speed1, speed2, speed3, speed4);
              break;
            default:
              speed1 = dp[i - 1][j] + doctor[i] * 0.8
              speed2 = dp[i - 1][j - 1] + doctor[i] * 1
              speed3 = dp[i - 1][j - 2] + doctor[i] * 1.1
              speed4 = dp[i - 1][j - 3] + doctor[i] * 1.2
              speed5 = dp[i - 1][j - 4] + doctor[i] * 1.3
              dp[i][j] = Math.max(speed1, speed2, speed3, speed4, speed5);
              break;
          }
        }
      }
      console.log(dp[num1][num2])
      lineCount++
    }
  })()
})()


