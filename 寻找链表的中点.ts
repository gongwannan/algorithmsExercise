/**
 * 寻找链表的中间结点
题目描述
给定一个单链表 L，请编写程序输出 L
中间结点保存的数据。如果有两个中间结点，则输出第二个中间结点保存的数据。
例如：给定 L 为 1→7→5，则输出应该为 7；给定 L 为 1→2→3→4，则输出应该为 3。 输入描述
每个输入包含 1 个测试用例。每个测试用例第 1
行给出链表首结点的地址、结点总个数正整数 N (≤105)。结点的地址是 5
位非负整数，NULL 地址用
−1 表示。
接下来有 N 行，每行格式为：
Address Data Next
其中 Address 是结点地址，Data 是该结点保存的整数数据(0 ≤ Data ≤ 108)，Next
是下一结点的地址。
输出描述
对每个测试用例，在一行中输出 L
中间结点保存的数据。如果有两个中间结点，则输出第二个中间结点保存的数据
 */

const readline = require("node:readline")

interface ListNode {
  val: number
  next: ListNode | null
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
rl.on("line", (line: string) => {
  let firstNode = arrToList(line.split(" ").map(Number))
  let fast = firstNode, slow = firstNode
  while (slow !== null && fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }
  console.log((slow as ListNode).val)
})

function arrToList(arr: number[]): ListNode | null {
  let first: ListNode | null = null
  if (arr.length !== 0) {
    first = {
      val: arr[0],
      next: null
    }
    let current = first;
    for (let i = 1; i < arr.length; i++) {
      current.next = {
        val: arr[i],
        next: null
      }
      current = current.next
    }
  }

  return first
}