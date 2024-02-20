/**获得完美走位
题目描述
在第一人称射击游戏中，玩家通过键盘的 A、S、D、W 四个按键控制游戏人物分别向左、
向后、向右、向前进行移动，从而完成走位。假设玩家每按动一次键盘，游戏人物会向某
个方向移动一步，如果玩家在操作一定次数的键盘并且各个方向的步数相同时，此时游戏
人物必定会回到原点，则称此次走位为完美走位。
现给定玩家的走位（例如：ASDA）,请通过更换其中 一段连续走位的方式
使得原走位能够变成一个完美走位。其中待更换的连续走位可以是相同长度的任何走位。
请返回待更换的连续走位的最小可能长度。
若果原走位本身是一个完美走位，则返回 0。
输入描述
输入为由键盘字母表示的走位 s，例如：ASDA
输出描述
输出为待更换的连续走位的最小可能长度 */

function perfectPosition(s: string): number {
  let result = Infinity;
  let countMap: Record<string, number> = {
    A: 0,
    S: 0,
    D: 0,
    W: 0,
  }
  for (let i = 0; i < s.length; i++) {
    countMap[s[i]]++
  }
  let average = s.length / 4;
  let resultEntries = Object.entries(countMap).map(([key, value]) => {
    if (value > average) {
      return [key, value - average]
    } else {
      return [key, 0]
    }
  })
  let needMap: typeof countMap = Object.fromEntries(resultEntries)
  if (test(needMap)) {
    return 0;
  }
  let left = 0, right = 0;
  while (right < s.length) {
    needMap[s[right]]--;
    if (test(needMap)) {
      while (left < right && test(needMap)) {
        needMap[s[left]]++;
        if (test(needMap)) {
          result = Math.min(result, right - left)
        }
        left++
      }
    }
    right++
  }

  function test(map: Record<string, number>): boolean {
    for (let item of Object.keys(map)) {
      if (map[item] > 0) {
        return false
      }
    }
    return true;
  }
  return result === Infinity ? 0 : result;
}


console.log(perfectPosition("ASDWSADSADSADWASDASDASDSADASDWADSDSADWASDW")) 