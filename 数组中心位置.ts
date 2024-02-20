/**
 * 题目描述
 * 给你一个整数数组nums，请计算数组的中心位置。数组的中心位置是数组的一个下标， 其左侧所有元素相乘的积等于右侧所有元素相乘的积。数组第一个元素的左侧积为1，最后一个元素的右侧积为1。 如果数组有多个中心位置，应该返回最靠近左边的那一个，如果数组不存在中心位置，返回-1。
 * 
 * 输入
 * 
 * 2 5 3 6 5 6
 * 
 * 输出
 * 
 * 3
 */

function findCenter(numArr: number[]): number {
  let result = -1;
  const product = numArr.reduce((pre, current) => { return pre * current }, 1)
  let leftPro: number = 1;
  for (let i = 0; i < numArr.length; i++) {
    if (leftPro * leftPro * numArr[i] === product) {
      result = i;
      break;
    }
    leftPro *= numArr[i];
  }
  console.log(result)
  return result;
}

findCenter([2, 5, 3, 6, 5, 6])