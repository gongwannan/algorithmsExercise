/*
 * @Author: GongWanNan
 * @Date: 2023-01-12 17:32:55
 * @LastEditors: [GongWanNan]
 * @LastEditTime: 2023-01-12 18:27:59
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=6 lang=typescript
 *
 * [6] Z 字形变换
 *
 * https://leetcode.cn/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (51.97%)
 * Likes:    1925
 * Dislikes: 0
 * Total Accepted:    521.2K
 * Total Submissions: 1M
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
 *
 * 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
 *
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
 *
 * 请你实现这个将字符串进行指定行数变换的函数：
 *
 *
 * string convert(string s, int numRows);
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "PAYPALISHIRING", numRows = 3
 * 输出："PAHNAPLSIIGYIR"
 *
 * 示例 2：
 *
 *
 * 输入：s = "PAYPALISHIRING", numRows = 4
 * 输出："PINALSIGYAHRPI"
 * 解释：
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "A", numRows = 1
 * 输出："A"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * s 由英文字母（小写和大写）、',' 和 '.' 组成
 * 1
 *
 *
 */

// @lc code=start
function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }
  let stringStack = Array.from(s);
  let arrayList: any[][] = new Array(numRows).fill(0).map(() => []);
  let indexPointer = 0;
  function down() {
    if (stringStack.length !== 0) {
      if (indexPointer < numRows - 1) {
        arrayList[indexPointer].push(stringStack.shift());
        indexPointer++;
        down();
      } else {
        up();
      }
    } else {
    }
  }
  function up() {
    if (stringStack.length !== 0) {
      if (indexPointer > 0) {
        arrayList[indexPointer].push(stringStack.shift());
        indexPointer--;
        up();
      } else {
        down();
      }
    }
  }
  down();
  return arrayList.reduce((result, arr) => {
    return result + arr.join("");
  }, "");
}
// @lc code=end
