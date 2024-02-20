import generate from "@babel/generator";
/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 *
 * https://leetcode.cn/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (77.48%)
 * Likes:    3361
 * Dislikes: 0
 * Total Accepted:    735.3K
 * Total Submissions: 949.3K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：["()"]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= n <= 8
 *
 *
 */

// @lc code=start
//  暴力法列举再判断是否符合条件
function generateParenthesisOld(n: number): string[] {
  function valid(str: string) {
    let temp = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") {
        temp++;
      } else {
        temp--;
      }
      if (temp < 0) return false;
    }
    return temp === 0;
  }

  let result: string[] = [];

  function generate(A: string) {
    if (A.length === 2 * n) {
      if (valid(A)) {
        result.push(A);
      }
    } else {
      generate(A + ")");
      generate(A + "(");
    }
  }
  generate("");

  return result;
}

// 回溯法  从空字符串开始每次在添加字符时保证符合条件直到所有符号添加完成
function generateParenthesis(n: number): string[] {
  let res: string[] = [];
  function generateTrack(result, left, right) {
    if (left === n && right === n) {
      res.push(result);
      return;
    }
    if (left < n) {
      generateTrack(result + "(", left + 1, right);
    }
    if (right < left) {
      generateTrack(result + ")", left, right + 1);
    }
  }
  generateTrack("", 0, 0);
  return res;
}
// @lc code=end
