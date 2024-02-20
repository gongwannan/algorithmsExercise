/**
 * 
 *  题目描述
    公司创新实验室正在研究如何最小化资源成本，最大化资源利用率，请你设计算法帮他们
    解决一个任务混部问题：有 taskNum 项任务，每个任务有开始时间（startTime
    ），结束时间（endTime），并行度(parallelism)三个属性，并行度是指这个任务运行时将
    会占用的服务器数量，一个服务器在每个时刻可以被任意任务使用但最多被一个任务占用
    ，任务运行完会立即释放（结束时刻不占用）。任务混部问题是指给定一批任务，让这批
    任务由同一批服务器承载运行，请你计算完成这批任务混部最少需要多少服务器，从而最
    大化控制资源成本。 
    输入描述
    第一行输入为 taskNum，表示有 taskNum 项任务
    接下来 taskNum 行，每行三个整数，表示每个任务的开始时间（startTime
    ），结束时间（endTime），并行度(parallelism)
    输出描述
    一个整数，表示最少需要的服务器数量
 * 
 */

function leastServer(arr: [a: number, b: number, c: number][]): number {
  let result = 0;
  let current = 0;
  let addTimeMap: Record<string, number> = {}
  arr.forEach(item => {
    let key1 = item[0].toString()
    let key2 = item[1].toString()
    if (addTimeMap[key1] === undefined) {
      addTimeMap[key1] = item[2]
    } else {
      addTimeMap[key1] += item[2]
    }
    if (addTimeMap[key2] === undefined) {
      addTimeMap[key2] = -item[2]
    } else {
      addTimeMap[key2] -= item[2]
    }
  })
  let keys = Object.keys(addTimeMap)
  keys.sort((a, b) =>
    Number(a) - Number(b)
  )
  keys.forEach(key => {
    current += addTimeMap[key]
    result = Math.max(result, current)
  })
  return result
}

console.log(leastServer([[1, 2, 100], [2, 3, 200], [3, 4, 300], [4, 5, 100], [5, 6, 100], [6, 7, 100], [7, 8, 100], [8, 9, 100], [9, 10, 100]]))