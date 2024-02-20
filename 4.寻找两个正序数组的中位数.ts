/*
 * @Author: GongWanNan
 * @Date: 2022-12-27 16:24:23
 * @LastEditors: [GongWanNan]
 * @LastEditTime: 2022-12-29 14:39:06
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 *
 * https://leetcode.cn/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (41.47%)
 * Likes:    6151
 * Dislikes: 0
 * Total Accepted:    863.2K
 * Total Submissions: 2.1M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 *
 * 算法的时间复杂度应该为 O(log (m+n)) 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并数组 = [1,2,3] ，中位数 2
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums1 = [1,2], nums2 = [3,4]
 * 输出：2.50000
 * 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
 *
 *
 *
 *
 *
 *
 * 提示：
 *
 *
 * nums1.length == m
 * nums2.length == n
 * 0 <= m <= 1000
 * 0 <= n <= 1000
 * 1 <= m + n <= 2000
 * -10^6 <= nums1[i], nums2[i] <= 10^6
 *
 *
 */

// @lc code=start
// 时间复杂度 O(log(m+n))
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const nums1Len = nums1.length,
    nums2Len = nums2.length,
    totalLength = nums1Len + nums2Len;
  function findKthNum(kth: number): number {
    let firstPointer = 0,
      secondPointer = 0;
    while (true) {
      if (firstPointer == nums1Len) {
        return nums2[secondPointer + kth - 1];
      }
      if (secondPointer == nums2Len) {
        return nums1[firstPointer + kth - 1];
      }
      if (kth == 1) {
        return Math.min(nums1[firstPointer], nums2[secondPointer]);
      }
      let firstTemp = Math.min(
          firstPointer + Math.floor(kth / 2) - 1,
          nums1Len - 1
        ),
        secondTemp = Math.min(
          secondPointer + Math.floor(kth / 2) - 1,
          nums2Len - 1
        ),
        pivot1 = nums1[firstTemp],
        pivot2 = nums2[secondTemp];
      if (pivot1 <= pivot2) {
        kth -= firstTemp - firstPointer + 1;
        firstPointer = firstTemp + 1;
      } else {
        kth -= secondTemp - secondPointer + 1;
        secondPointer = secondTemp + 1;
      }
    }
  }
  if (totalLength % 2 === 1) {
    return findKthNum((totalLength + 1) / 2);
  } else {
    return (findKthNum(totalLength / 2) + findKthNum(totalLength / 2 + 1)) / 2;
  }
}

// @lc code=end
