/**
 * 在学校中，N 个小朋友站成一队， 第 i 个小朋友的身高为height[i]，第 i 个小朋友可以看到的第一个比自己身高更高的小朋友 j ，那么 j 是 i 的好朋友(要求j > i)。

 * 请输出一个数组，对应位置的输出是每个小朋友的好朋友位置，如果没有看到好朋友，则输出0。
 * 
 * 输入描述
 * 
 * 第一行输入N，N表示有N个小朋友
 * 
 * 第二行输入N个小朋友的身高height[i]，都是整数
 * 
 * 输出描述
 * 
 * 输出N个小朋友的好朋友的位置
 */

function getFriends(height: number[]) {
  let result: number[] = new Array(height.length).fill(0);
  let stack: number[] = [0];
  for (let i = 1; i < height.length; i++) {
    let top = () => stack[stack.length - 1]
    while (stack.length > 0 && height[i] > height[top()]) {
      result[top()] = i;
      stack.pop();
    }
    stack.push(i);
  }
  console.log(result);
}

getFriends([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])