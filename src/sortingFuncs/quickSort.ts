export default function quickSort(arr: number[]): number[] {
  const len = arr.length;
  if (len <= 1) return arr;
  const pivotIndex = Math.floor(len / 2);
  const pivot = arr[pivotIndex];
  const left: number[] = [];
  const right: number[] = [];
  for (let i = 0; i < len; i++) {
    if (i === pivotIndex) continue;
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
