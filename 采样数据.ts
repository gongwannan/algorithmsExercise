/**
 * 在做物理实验时，为了计算物体移动的速率，通过相机等工具周期性的采样物体移动距离。
 * 由于工具故障，采样数据存在误差甚至错误的情况。
 * 
 * 需要通过一个算法过滤掉不正确的采样值。
 * 
 * 不同工具的故障模式存在差异，算法的各类门限会根据工具类型做相应的调整。
 * 
 * 请实现一个算法，计算出给定一组采样值中正常值的最长连续周期。
 * 
 * 判断第 i 个周期的采样数据 S[i] 是否正确的规则如下（假定物体移动速率不超过10个单元，前一个采样周期 S[i-1] )：
 * 
 * S[i] <= 0，即为错误值
 * S[i] < S[i-1]，即为错误值
 * S[i] - S[i-1] >= 10，即为错误值
 * 其它情况为正常值
 * 判断工具是否故障的规则如下：
 * 
 * 在M个周期内，采样数据为错误值的次数为T（次数可以不连续），则工具故障。
 * 判断故障恢复的条件如下：
 * 
 * 产生故障后的P个周期内，采样数据一直为正常值，则故障恢复。
 * 错误采样数据的处理方式：
 * 
 * 检测到故障后，丢弃从故障开始到故障恢复的采样数据。
 * 在检测到工具故障之前，错误的采样数据，则由最近一个正常值代替；如果前面没有正常的采样值，则丢弃此采样数据。
 * 给定一段周期的采样数据列表S，计算正常值的最长连续周期。
 * 
 * 输入
 * 10 6 3
 * -1 1 2 3 100 10 13 9 10
 * 输出 8
 * 
 * 解析：
 * 
 * 10：故障确认周期数，即连续10个周期内有多少次故障数据。
 * 6：故障次数门限，即10个周期内，如果故障数据达到6次，那么就认为工具出现故障。
 * 3：故障恢复周期数，即故障后，连续3个周期的数据都正常，那么工具就恢复正常。
 * 
 * 接下来，我们看采样数据 -1 1 2 3 100 10 13 9 10。
 * 
 * S[0] 是 -1，这是一个错误值，因为它小于0。而且它前面没有正常的采样数据，所以我们直接丢弃 S[0]。
 * 
 * 接下来的 S[1]、S[2] 和 S[3] 分别是 1、2 和 3，这些都是正常的采样数据。
 * 
 * S[4] 是 100，这是一个错误值，因为 S[4] - S[3] 是 97，大于10。但这个错误值不满足故障条件（即10个周期内的错误数达到6次），所以我们用前一个正常值 S[3] 代替它，即 S[4] 变为 3。
 * 
 * S[5]、S[6] 是 10 和 13，这两个都是正常的采样数据。
 * 
 * S[7] 是 9，这是一个错误值，因为它小于前一个值 S[6]。但它也不满足故障条件，所以我们用前一个正常值 S[6] 代替它，即 S[7] 变为 13。
 * 
 * S[8] 是 10，这也是一个错误值，因为它小于前一个值 S[7]。
 * 
 * 所以，根据上述分析，错误值是 S[0]、S[4]、S[7] 和 S[8]。
 */

function analyze(data: number[], confirm: number, faulty: number, recovery: number): number {
  // 定义结果
  let result = 0;
  // 错误数据 arr 错误为 1 正确为 0 与 data 下标对应
  let faultArr = new Array(data.length).fill(0);
  // 双指针 左侧指针指向此次第一个正常数据，右侧指针右移
  let left = 0, right = 0;
  // 先确定左边界，从第一个正常的值开始
  while (data[left] < 0) {
    faultArr[left] = 1;
    // 判断是否故障
    isFault(left);
    left++;
  }
  right = left + 1;
  while (right < data.length) {
    if (data[right] < data[right - 1]) {
      // 修正值
      data[right] = data[right - 1];
      // 判断是否故障
      isFault(left);
    }
    right++;
  }
  // 判断是否出现故障的函数
  function isFault(index: number) {
    if (index < faulty - 1) {
      return;
    }
    let subCount = index < confirm ? index : confirm;
    if (faultArr.slice(index - subCount + 1, index + 1).filter(v => v === 1).length >= faulty) {
      // 出现故障，比较此次 连续正确长度
      result = Math.max(result, right - left)
      recoveryFn(index)
    }
  }
  // 故障恢复函数
  function recoveryFn(index: number) {
    let continueRightCount = 0;
    while (index < data.length) {
      if (data[index] < data[index - 1]) {
        continueRightCount = 0;
        faultArr[index] = 1;
      } else {
        continueRightCount += 1;
      }
      if (continueRightCount === recovery) {
        break
      }
      index++
    }
    left = right = index;
  }
  // 结束后判断此次长度
  result = Math.max(result, right - left)
  return result;
}

console.log(
  analyze([-1, 1, 2, 100, 100, 100, 13, 9, 10],
    10, 3, 3)
)