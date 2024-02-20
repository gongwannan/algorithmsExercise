/**
 * 日志采集系统
题目描述
日志采集是运维系统的的核心组件。日志是按行生成，每行记做一条，由采集系统分批上
报。
如果上报太频繁，会对服务端造成压力；如果上报太晚，会降低用户的体验；如果一次上
报的条数太多，会导致超时失败。
为此，项目组设计了如下的上报策略：
1、每成功上报一条日志，奖励 1 分
2、每条日志每延迟上报 1 秒，扣 1 分
3、积累日志达到 100 条，必须立即上报
给出日志序列，根据该规则，计算首次上报能获得的最多积分数
输入描述
按时序产生的日志条数 T1, T2...Tn, 其中 1 <= n <= 1000, 0 <= Ti <= 100
输出描述
首次上报最多能获得的积分数
 */

function updateLog(arr: number[]): number {
  let total = 0;
  let result = 0;
  type UpMessage = {
    up: number;
    noUp: number;
  }
  let upMessageArr: UpMessage[] = new Array(arr.length).fill(0).map(item => ({ up: 0, noUp: 0 }))
  upMessageArr[0] = {
    up: arr[0],
    noUp: 0
  }
  total = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (total + arr[i] < 100) {
      upMessageArr[i].noUp = upMessageArr[i - 1].noUp - total;
      upMessageArr[i].up = upMessageArr[i - 1].noUp + arr[i]
      total += arr[i];
      result = Math.max(upMessageArr[i].up, result);
    } else {
      upMessageArr[i].up = upMessageArr[i - 1].noUp - total + 100;
      result = Math.max(upMessageArr[i].up, result);
      console.log(upMessageArr)
      return result
    }
  }
  console.log(upMessageArr)
  return result;
}
console.log(
  updateLog([1, 98, 1])
)