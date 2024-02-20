import { rateFilter } from "@/utils/filters";
/*
 * @lc app=leetcode.cn id=16 lang=typescript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode.cn/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (45.55%)
 * Likes:    1499
 * Dislikes: 0
 * Total Accepted:    507.6K
 * Total Submissions: 1.1M
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
 *
 * 返回这三个数的和。
 *
 * 假定每组输入只存在恰好一个解。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-1,2,1,-4], target = 1
 * 输出：2
 * 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,0,0], target = 1
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 3 <= nums.length <= 1000
 * -1000 <= nums[i] <= 1000
 * -10^4 <= target <= 10^4
 *
 *
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let result = nums[0] + nums[1] + nums[2];
  if (
    nums[nums.length - 1] + nums[nums.length - 2] + nums[nums.length - 3] <
    target
  ) {
    return (
      nums[nums.length - 1] + nums[nums.length - 2] + nums[nums.length - 3]
    );
  }

  for (let i = 0; i < nums.length - 2; i++) {
    // 定义双指针
    let l = i + 1;
    let r = nums.length - 1;
    const minSum = nums[i] + nums[i + 1] + nums[i + 2];
    if (minSum > target) {
      result =
        Math.abs(minSum - target) < Math.abs(result - target) ? minSum : result;
      break;
    }
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === target) {
        return sum;
      }
      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum;
        // 跳过相同的值
        while (nums[l] === nums[l + 1]) l++;
        while (nums[r] === nums[r - 1]) r--;
      }
      if (sum > target) {
        r--;
      } else {
        l++;
      }
    }
  }

  return result;
}
// @lc code=end
