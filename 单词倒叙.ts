/**单词倒叙
题目描述
输入单行英文句子，里面包含英文字母，空格以及,.?
三种标点符号，请将句子内每个单词进行倒序，并输出倒序后的语句
输入描述
输入字符串 S，S 的长度 1≤N≤100
输出描述
输出逆序后的字符串 */

function revertWord(s: string): string {
  return s.split(' ').map(item => item.split('').reverse().join('')).join(' ')
}

console.log(revertWord('hello world'));