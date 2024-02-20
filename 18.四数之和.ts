/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 *
 * https://leetcode.cn/problems/4sum/description/
 *
 * algorithms
 * Medium (38.91%)
 * Likes:    1735
 * Dislikes: 0
 * Total Accepted:    500.9K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a],
 * nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
 *
 *
 * 0 <= a, b, c, d < n
 * a、b、c 和 d 互不相同
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 *
 *
 * 你可以按 任意顺序 返回答案 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,0,-1,0,-2,2], target = 0
 * 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [2,2,2,2,2], target = 8
 * 输出：[[2,2,2,2]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 200
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 *
 *
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
  // if the nums array length is less than 4 return []
  if (nums.length < 4) {
    return [];
  }
  // sort and double pointer
  let res: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    // if the current number is the same as the previous one, jump this loop and continue
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    // if the sum of the first four number is larger than the target, break
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
      break;
    }
    // if the sum of the first number and the last three number, jump this loop and continue
    if (
      nums[i] +
        nums[nums.length - 1] +
        nums[nums.length - 2] +
        nums[nums.length - 3] <
      target
    )
      continue;

    for (let j = i + 1; j < nums.length - 2; j++) {
      // if the current number is the same as the previous one, jump this loop and continue
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      // if the sum of the first four number is larger than the target, break
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
        break;
      }
      // if the sum of the first number and the last three number, jump this loop and continue
      if (
        nums[i] + nums[j] + nums[nums.length - 1] + nums[nums.length - 2] <
        target
      )
        continue;
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return res;
}
console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
// @lc code=end
