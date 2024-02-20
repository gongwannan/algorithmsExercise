/**
 * 在一个销售团队中，每个销售员在完成销售后都需要支付一部分利润给他们的上级，这种结构类似于金字塔。当一个销售员赚取100元时，他需要支付15元给他的直接上级。现在，给定每个销售员的销售额和他们的直接上级，你的任务是计算金字塔顶部的Boss的总收入。
 * 
 * 输入描述：
 * 
 * 第一行是一个整数N，表示销售团队中的销售员数量。
 * 接下来的N行，每行有三个数字，分别代表：
 * 销售员的ID
 * 该销售员的直接上级的ID
 * 销售员的销售额
 * 注意：Boss的直接上级ID为0。
 * 
 * 输出描述：
 * 
 * 输出一行，包含两个整数。第一个是Boss的ID（这应该总是0），第二个是Boss的总收入。
 * 
 * 示例：
 * 
 * 输入：
 * 
 * 1 0 223
 * 2 0 323
 * 3 2 1203
 * 
 * 输出：
 *  105
 * 解释：
 * 
 * 销售员2从销售中赚取了323元，并从销售员3那里获得了额外的180元（1203的15%），所以销售员2的总收入是503元。Boss从销售员1、2和3那里总共获得了105元（223的15% + 323的15% + 180的15%）。
 */

function solution(numArr: [number, number, number][]): number {
  function innerFunc(id: number): number {
    // 当前销售自己的收入
    let base = id === 0 ? 0 : numArr.filter(item => item[0] === id)[0][2];
    // 销售的小弟
    let downArr = numArr.filter(item => item[1] === id);
    // 销售的总收入
    let all = base + downArr.reduce((pre, cur) => pre + innerFunc(cur[0]) * 0.15, 0);
    console.log(id, all)
    return all
  }
  return innerFunc(0);
}

console.log(solution([[1, 0, 223], [2, 0, 323], [3, 2, 1203]]));