/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
 *
 * https://leetcode.cn/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (57.95%)
 * Likes:    2270
 * Dislikes: 0
 * Total Accepted:    762.7K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [1, 1000] 内
 * -100 <= Node.val <= 100
 *
 *
 *
 *
 * 进阶：你可以运用递归和迭代两种方法解决这个问题吗？
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

const check = (u: TreeNode | null, v: TreeNode | null): boolean => {
  const q: (TreeNode | null)[] = []
  q.push(u), q.push(v)

  while (q.length) {
    u = q.shift()
    v = q.shift()

    if (!u && !v) continue
    if (!u || !v || u.val !== v.val) return false

    q.push(u.left)
    q.push(v.right)

    q.push(u.right)
    q.push(v.left)
  }
  return true
}
var isSymmetric = function (root: TreeNode | null): boolean {
  return check(root, root)
}
// @lc code=end
