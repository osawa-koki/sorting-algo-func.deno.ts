import bubbleSort from "./sortingFuncs/bubbleSort.ts";
import selectionSort from "./sortingFuncs/selectionSort.ts";
import insertionSort from "./sortingFuncs/insertionSort.ts";

const sortingFuncs = [
  {
    name: "Bubble Sort",
    func: bubbleSort,
  },
  {
    name: "Selection Sort",
    func: selectionSort,
  },
  {
    name: "Insertion Sort",
    func: insertionSort,
  },
];

export default sortingFuncs;
