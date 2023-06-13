export default function shellSort(arr: number[]): number[] {
  const len = arr.length;
  let gap = Math.floor(len / 2);
  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      let j = i;
      while (j >= gap && arr[j - gap] > arr[j]) {
        [arr[j - gap], arr[j]] = [arr[j], arr[j - gap]];
        j -= gap;
      }
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
}
