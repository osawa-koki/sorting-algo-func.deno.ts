import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isSorted from "../src/isSorted.ts";

Deno.test("Testing `isSorted` function with sorted array.", () => {
  const actual = isSorted([1, 2, 3, 4, 5]);
  const expected = true;
  assertEquals(actual, expected);
});

Deno.test("Testing `isSorted` function with unsorted array.", () => {
  const actual = isSorted([1, 2, 3, 5, 4]);
  const expected = false;
  assertEquals(actual, expected);
});
