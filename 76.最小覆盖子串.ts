function minWindow(s: string, t: string): string {
  let tLength = t.length;
  let sLength = s.length;
  let needStr = new Array(128).fill(0);
  let leftPointer = 0, rightPointer = 0;
  let minLength = Infinity, res = "";
  // 收集t中所有需要的字符合集
  for (const char of t) {
    needStr[char.charCodeAt(0)]++;
  }
  while (rightPointer < sLength) {
    if (needStr[s.charCodeAt(rightPointer)]-- > 0) {
      tLength--;
    }
    rightPointer++;
    while (tLength === 0) {
      if (rightPointer - leftPointer < minLength) {
        minLength = rightPointer - leftPointer;
        res = s.slice(leftPointer, rightPointer);
      }
      if (++needStr[s.charCodeAt(leftPointer)] > 0) {
        tLength++;
      }
      leftPointer++;
    }
  }
  return res;
};

console.log(minWindow("a", "b"))