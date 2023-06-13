export default function bubbleSort(arr: number[]): number[] {
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const tempVal = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tempVal;
      }
    }
  }
  return arr;
}
