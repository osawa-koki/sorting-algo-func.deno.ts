import bubbleSort from "./sortingFuncs/bubbleSort.ts";
import selectionSort from "./sortingFuncs/selectionSort.ts";

const sortingFuncs = [
  {
    name: "Bubble Sort",
    func: bubbleSort,
  },
  {
    name: "Selection Sort",
    func: selectionSort,
  },
];

export default sortingFuncs;
