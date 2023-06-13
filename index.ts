import isSorted from "./src/isSorted.ts";
import sortingFuncs from "./src/sortingFuncs.ts";

for (const sortFunc of sortingFuncs) {
  const name = sortFunc.name;
  const func = sortFunc.func;
  console.log(`===== ${name} =====`);
  const randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() =>
    Math.random() - 0.5
  );
  const randomArrayIsSorted = isSorted(randomArray);
  console.log(`Before ${randomArrayIsSorted ? "🔵" : "🔴"}: ${randomArray}`);
  const sortedArr = func(randomArray);
  const sortedArrIsSorted = isSorted(sortedArr);
  console.log(`After  ${sortedArrIsSorted ? "🔵" : "🔴"}: ${sortedArr}`);
  console.log("+++++ +++++ +++++ +++++ +++++");
}
