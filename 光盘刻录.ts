/**
 * 有一系列文件需要通过光盘备份。每张光盘的容量固定为500MB，文件的大小均为整数MB并且不超过500MB。文件不可拆分或分卷备份。需要确定最少需要多少张光盘来完成备份。
 * 输入格式：
 * 
 * 文件的大小数据序列，以逗号分隔。
 * 输出格式：
 * 
 * 所需的光盘数量。
 * 注意事项：
 * 
 * 输入数据总是合法。
 * 最多100个输入文件。
 */
// 从小忘大装 可能会导致剩余空间放不下大的 导致空着浪费空间
// 所以从大往小装
function minDiscs(fileSizes: number[]): number {
  // 从大到小排列
  fileSizes.sort((a, b) => b - a);
  let discs: number[] = Array(fileSizes.length).fill(0);
  let discCount = 0;

  for (let i = 0; i < fileSizes.length; i++) {
    // 每次都从第一个盘开始装
    let j = 0;
    while (j < discCount) {
      if (fileSizes[i] <= (500 - discs[j])) {
        discs[j] += fileSizes[i];
        break;
      }
      j++;
    }
    // 之前的盘都已经盛不下了，要新开盘
    if (j == discCount) {
      discs[discCount] = fileSizes[i];
      discCount++;
    }
  }

  return discCount;
}

console.log(minDiscs([100, 200, 300, 400, 500]));

