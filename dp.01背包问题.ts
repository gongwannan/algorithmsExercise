function getMaxWeight(capacity: number, valueArr: number[], weightArr: number[]): number {
  let dp: number[][] = new Array(valueArr.length).fill(0).map(i => new Array(capacity + 1).fill(0));
  for (let i = 0; i <= capacity; i++) {
    dp[0][i] = i >= weightArr[0] ? valueArr[0] : 0;
  }
  for (let i = 1; i < valueArr.length; i++) {
    for (let j = 0; j <= capacity; j++) {
      if (j === 0) {
        dp[i][j] = 0;
        continue;
      }
      if (j < weightArr[i]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weightArr[i]] + valueArr[i])
      }
    }
  }
  console.log(dp)
  return dp[valueArr.length - 1][capacity]
}


console.log(getMaxWeight(6, [2, 5, 3, 6, 10], [1, 4, 6, 2, 3]))