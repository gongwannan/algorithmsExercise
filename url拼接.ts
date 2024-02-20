/**
 * 给定一个URL的前缀和后缀，我们需要将其合并成一个完整的URL。在合并时，请注意以下几点：

 * 如果前缀的结尾没有斜线/，而后缀的开头也没有斜线/，那么在两者之间需要添加一个斜线。
 * 如果前缀的结尾和后缀的开头都有斜线/，那么需要保留其中的一个，删除另一个，以避免重复。
 * 输入保证都是有效的URL格式。
 * 
 * 输入格式：
 * 两个长度都小于100的字符串，代表URL的前缀和后缀。它们之间使用逗号,分隔。
 * 
 * 输出格式：
 * 一个字符串，表示合并后的完整URL。
 * 
 * 样例：
 * 
 * 输入： /acm,/bb
 * 输出： /acm/bb
 * 
 * 输入： /abc/,/bcd
 * 输出： /abc/bcd
 * 
 * 输入： /acd,bef
 * 输出： /acd/bef
 * 
 * 输入： ,
 * 输出： /
 */

function montageUrl(prefix: string, suffix: string): string {
  return prefix.replace(/\/$/, '') + '/' + suffix.replace(/^\//, '')
}

let test1 = montageUrl("", "")
let test2 = montageUrl("/acm", "/bb")
let test3 = montageUrl("/abc", "bcd")
let test4 = montageUrl("/abc/", "bcd")

console.log(test1, test2, test3, test4)