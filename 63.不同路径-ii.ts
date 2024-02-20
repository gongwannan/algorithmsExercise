/*
 * @lc app=leetcode.cn id=63 lang=typescript
 *
 * [63] 不同路径 II
 *
 * https://leetcode.cn/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (40.47%)
 * Likes:    1141
 * Dislikes: 0
 * Total Accepted:    406.6K
 * Total Submissions: 988K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 *
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。
 *
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 *
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
 * 输出：2
 * 解释：3x3 网格的正中间有一个障碍物。
 * 从左上角到右下角一共有 2 条不同的路径：
 * 1. 向右 -> 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右 -> 向右
 *
 *
 * 示例 2：
 *
 *
 * 输入：obstacleGrid = [[0,1],[0,0]]
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == obstacleGrid.length
 * n == obstacleGrid[i].length
 * 1 <= m, n <= 100
 * obstacleGrid[i][j] 为 0 或 1
 *
 *
 */

// @lc code=start
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = new Array(n).fill(0);

  // 初始行，碰到障碍物时，第一行障碍物后的都为0
  for (let i = 0; i < n && obstacleGrid[0][i] === 0; i++) {
      dp[i] = 1;
  }

  for (let i = 1; i < m; i++) {
      // 这里我们要从0开始，因为需要考虑障碍物的情况，所以第一列不一定都为1。
      for (let j = 0; j < n; j++) {
          if (obstacleGrid[i][j] == 1) { // 障碍物，为0
              dp[j] = 0;
          } else if (j > 0) { // 只有当 j > 0 不是第一列了才能取到 j - 1
              dp[j] = dp[j - 1] + dp[j];
          }
          // 这里dp[0]继承了上一行的dp[0],因为我们有 if (obstacleGrid[i][j] == 1) ，当第一列有障碍物时，会被改写为0。所以不用再考虑dp[0]的情况。
      }
  }
  return dp[n - 1];
};
// @lc code=end
