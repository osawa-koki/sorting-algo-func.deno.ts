export default function selectionSort(arr: number[]): number[] {
  const len = arr.length;
  let minIndex: number;
  for (let i = 0; i < len; i++) {
    minIndex = i;
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
