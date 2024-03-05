/**
 * 给定一个由小写字母组成的字符串。请找出两个位置，将字符串分为三部分。这三部分的总和应该是相同的，其中每部分的总和是其字符的ASCII码值的总和。注意，这两个位置的字符不包括在这三部分内。

 * 如果你找到了这两个位置，请输出它们的位置。如果没有找到，请输出0,0。
 * 
 * 例子：
 * 
 * 输入: acdbbbca
 * 输出: 2,5
 * 这是因为当我们在位置2和5进行分割，我们得到三个部分：ac，bb，ca。它们的ASCII码值的总和都是相同的。
 * 
 * 输入: abcabc
 * 输出: 0,0
 * 在这个例子中，我们找不到这样的两个位置。
 */

function findSplit(str: string): [number, number] {
  let prefixSumArr: number[] = new Array(str.length).fill(0);
  prefixSumArr[0] = str.charCodeAt(0);
  for (let i = 1; i < str.length; i++) {
    prefixSumArr[i] = prefixSumArr[i - 1] + str.charCodeAt(i);
  }
  for (let i = 1; i < str.length; i++) {
    let leftSum = prefixSumArr[i - 1];
    for (let j = i + 2; j < str.length - 1; j++) {
      let middleSum = prefixSumArr[j - 1] - prefixSumArr[i];
      let rightSum = prefixSumArr[str.length -1] - prefixSumArr[j];
      if (leftSum === middleSum && middleSum === rightSum) {
        return [i, j];
      }
    }
  }
  return ([0, 0])
}

console.log(findSplit("acdbbbca"));