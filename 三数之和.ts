function threeSum(arr: number[]): number[][] {
  arr = arr.sort((a, b) => a - b);
  let len = arr.length
  let result = []
  for (let i = 0; i < arr.length - 2; i++) {
    // 跳过重复值
    if (arr[i] === arr[i - 1]) continue
    // arr[i] 与最大两个数相加 小于 0 无包含 arr[i] 的结果，continue 跳过
    if (arr[i] + arr[arr.length - 2] + arr[arr.length - 1] < 0) {
      continue
    }
    // arr[i] 与临近的最小两数相加超过 0 已求出全部结果直接返回
    if (arr[i] + arr[i + 1] + arr[i + 2] > 0) {
      return result
    }
    for (let j = i + 1; j < arr.length; j++) {
      // 跳过重复值
      if (j > i + 1 && arr[j] === arr[j - 1]) continue
      let right = len - 1
      while (j < right && arr[i] + arr[j] + arr[right] >= 0) {
        if (arr[i] + arr[j] + arr[right] === 0) {
          //@ts-ignore
          result.push([arr[i], arr[j], arr[right]])
        }
        right--
      }

    }
  }
  return result
};
