import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import add from "../src/add.ts";

Deno.test("sum() adds given numbers", () => {
  const actual = add(1, 2);
  const expected = 3;
  assertEquals(actual, expected);
});
