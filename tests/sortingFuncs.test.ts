import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isSorted from "../src/isSorted.ts";
import sortingFuncs from "../src/sortingFuncs.ts";

for (const sortFunc of sortingFuncs) {
  const name = sortFunc.name;
  const func = sortFunc.func;
  const randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() =>
    Math.random() - 0.5
  );
  const sortedArray = func(randomArray);
  const result = isSorted(sortedArray);
  Deno.test(`Testing ${name} function with sorted array.`, () => {
    const actual = result;
    const expected = true;
    assertEquals(actual, expected);
  });
}
