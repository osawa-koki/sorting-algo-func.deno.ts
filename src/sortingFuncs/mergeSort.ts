export default function mergeSort(arr: number[]): number[] {
  const len = arr.length;
  if (len <= 1) return arr;
  const mid = Math.floor(len / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;
  const leftLen = left.length;
  const rightLen = right.length;
  while (leftIndex < leftLen && rightIndex < rightLen) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  while (leftIndex < leftLen) {
    result.push(left[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < rightLen) {
    result.push(right[rightIndex]);
    rightIndex++;
  }
  return result;
}
