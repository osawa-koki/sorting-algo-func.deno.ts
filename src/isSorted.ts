
/**
 * Checks if an array is sorted in ascending order.
 * @param array - The array to check.
 * @returns `true` if the array is sorted in ascending order, `false` otherwise.
 * @example
 * ```ts
 * isSorted([1, 2, 3, 4, 5]); // true
 * isSorted([1, 2, 3, 5, 4]); // false
 * ```
 */
export default function isSorted(array: number[]): boolean {
  return array.every((_, i, arr) => i === 0 || arr[i] >= arr[i - 1]);
}
