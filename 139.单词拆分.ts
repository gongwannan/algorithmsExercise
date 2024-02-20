/*
 * @Author: GongWanNan
 * @Date: 2023-01-11 17:18:17
 * @LastEditors: [GongWanNan]
 * @LastEditTime: 2023-01-11 17:18:41
 * @Description:
 */
/*
 * @lc app=leetcode.cn id=139 lang=typescript
 *
 * [139] 单词拆分
 *
 * https://leetcode.cn/problems/word-break/description/
 *
 * algorithms
 * Medium (53.34%)
 * Likes:    1908
 * Dislikes: 0
 * Total Accepted:    392.4K
 * Total Submissions: 727.7K
 * Testcase Example:  '"leetcode"\n["leet","code"]'
 *
 * 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。
 *
 * 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入: s = "leetcode", wordDict = ["leet", "code"]
 * 输出: true
 * 解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
 *
 *
 * 示例 2：
 *
 *
 * 输入: s = "applepenapple", wordDict = ["apple", "pen"]
 * 输出: true
 * 解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
 * 注意，你可以重复使用字典中的单词。
 *
 *
 * 示例 3：
 *
 *
 * 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 * 输出: false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 300
 * 1 <= wordDict.length <= 1000
 * 1 <= wordDict[i].length <= 20
 * s 和 wordDict[i] 仅有小写英文字母组成
 * wordDict 中的所有字符串 互不相同
 *
 *
 */

// @lc code=start
const wordBreak = (s: string, wordDict: [string]): boolean => {
  const len = s.length;
  const wordSet = new Set(wordDict);
  // 存储计算的结果，数组索引为指针位置，值为计算的结果。下次遇到相同的子问题，直接返回命中的缓存值，就不用调重复的递归。
  const memo = new Array(len);
  // 判断从start到末尾的子串能否break
  const canBreak = (start: number): boolean => {
    //指针越界，s一步步成功划分为单词，才走到越界这步，现在没有剩余子串
    if (start == len) {
      return true; //返回真，结束递归
    }
    if (memo[start] !== undefined) return memo[start]; // memo中有，就用memo中的
    //指针i去划分两部分，for枚举出当前所有的选项i
    for (let i = start + 1; i <= len; i++) {
      const prefix = s.slice(start, i); // 切出的前缀部分
      // 前缀部分是单词，且剩余子串能break，返回真
      if (wordSet.has(prefix) && canBreak(i)) {
        memo[start] = true; // 当前递归的结果存一下
        return true;
      }
      // 如果前缀部分不是单词，就不会执行canBreak(i)。进入下一轮迭代，再切出一个前缀串，再试
    }
    memo[start] = false; // 当前递归的结果存一下
    return false; // 指针i怎么划分，都没有返回true，则返回false
  };
  return canBreak(0); // 递归的入口，从0到末尾的子串能否break
};
// @lc code=end
