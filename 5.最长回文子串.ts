/*
 * @Author: GongWanNan
 * @Date: 2022-12-29 15:01:54
 * @LastEditors: [GongWanNan]
 * @LastEditTime: 2022-12-29 15:30:03
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 *
 * https://leetcode.cn/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (36.84%)
 * Likes:    6005
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 3.4M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 *
 * 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "cbbd"
 * 输出："bb"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 1000
 * s 仅由数字和英文字母组成
 *
 *
 */

// @lc code=start
function longestPalindrome(s: string): string {
  let result = "";
  let len = s.length;
  function isPalindrome(str: string): Boolean {
    let result = true;
    let firstPointer = 0;
    let secondPointer = str.length - 1;
    while (firstPointer < secondPointer) {
      if (str[firstPointer] !== str[secondPointer]) {
        result = false;
        break;
      }
      firstPointer++;
      secondPointer--;
    }
    return result;
  }
  let resultFlag = false;
  for (let i = len; i > 0; i--) {
    if (resultFlag) {
      break;
    }
    for (let n = 0; n <= len - i; n++) {
      let subStr = s.slice(n, n + i);
      if (isPalindrome(subStr)) {
        result = subStr;
        resultFlag = true;
        break;
      }
    }
  }
  return result;
}
// @lc code=end
