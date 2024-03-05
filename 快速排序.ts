function quickSort(numArr: number[], left: number = 0, right?: number): number[] {
  if (right === undefined) {
    right = numArr.length - 1;
  }
  if (left < right) {
    let numPoint = numArr[right];
    let count = left;
    for (let i = left; i < right; i++) {
      if (numArr[i] < numPoint) {
        [numArr[count], numArr[i]] = [numArr[i], numArr[count]];
        count++
      }
    }
    [numArr[count], numArr[right]] = [numArr[right], numArr[count]];
    quickSort(numArr, left, count - 1);
    quickSort(numArr, count + 1, right);
  }
  return numArr
}
console.log(
  quickSort([10, 9, 2, 5, 3, 7, 101, 18])
)