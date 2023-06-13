import bubbleSort from "./sortingFuncs/bubbleSort.ts";
import selectionSort from "./sortingFuncs/selectionSort.ts";
import insertionSort from "./sortingFuncs/insertionSort.ts";
import mergeSort from "./sortingFuncs/mergeSort.ts";
import quickSort from "./sortingFuncs/quickSort.ts";
import heapSort from "./sortingFuncs/heapSort.ts";

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
  {
    name: "Merge Sort",
    func: mergeSort,
  },
  {
    name: "Quick Sort",
    func: quickSort,
  },
  {
    name: "Heap Sort",
    func: heapSort,
  },
];

export default sortingFuncs;
