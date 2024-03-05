/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 *
 * https://leetcode.cn/problems/longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (53.72%)
 * Likes:    3567
 * Dislikes: 0
 * Total Accepted:    869.4K
 * Total Submissions: 1.6M
 * Testcase Example:  '[10,9,2,5,3,7,101,18]'
 *
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 
 * 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7]
 * 的子序列。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [10,9,2,5,3,7,101,18]
 * 输出：4
 * 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,1,0,3,2,3]
 * 输出：4
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [7,7,7,7,7,7,7]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 2500
 * -10^4 <= nums[i] <= 10^4
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 你能将算法的时间复杂度降低到 O(n log(n)) 吗?
 * 
 * 
 */

// @lc code=start
// 动态规划 dp[i]  = 满足 nums[j] < nums[i] 的 最大dp[j] + 1 时间复杂度 O(n²)
function lengthOfLIS(nums: number[]): number {
  let dpArr = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    let currentMax = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        currentMax = Math.max(dpArr[j] + 1, currentMax);
      }
    }
    dpArr[i] = currentMax;
  }

  return Math.max(...dpArr);
};

// 方案2 贪心 + 二分查找
function lengthOfLIS2(nums: number[]): number {

}
// @lc code=end

console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]))