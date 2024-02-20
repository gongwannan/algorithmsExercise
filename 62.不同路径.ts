/*
 * @lc app=leetcode.cn id=62 lang=typescript
 *
 * [62] 不同路径
 *
 * https://leetcode.cn/problems/unique-paths/description/
 *
 * algorithms
 * Medium (67.23%)
 * Likes:    1877
 * Dislikes: 0
 * Total Accepted:    667.3K
 * Total Submissions: 983.4K
 * Testcase Example:  '3\n7'
 *
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 *
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
 *
 * 问总共有多少条不同的路径？
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：m = 3, n = 7
 * 输出：28
 *
 * 示例 2：
 *
 *
 * 输入：m = 3, n = 2
 * 输出：3
 * 解释：
 * 从左上角开始，总共有 3 条路径可以到达右下角。
 * 1. 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右
 * 3. 向下 -> 向右 -> 向下
 *
 *
 * 示例 3：
 *
 *
 * 输入：m = 7, n = 3
 * 输出：28
 *
 *
 * 示例 4：
 *
 *
 * 输入：m = 3, n = 3
 * 输出：6
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 题目数据保证答案小于等于 2 * 10^9
 *
 *
 */

// @lc code=start
var uniquePaths = function (m: number, n: number) {
  let ans = 1;
  for (let x = n, y = 1; y < m; ++x, ++y) {
    ans = Math.floor((ans * x) / y);
  }
  return ans;
};
// @lc code=end
