import { bubbleSort } from "../algorithms/bubbleSort";
import { areBracketsBalanced } from "../algorithms/brackets";
import { binarySearch } from "../algorithms/binarySearch";

// const data = [5, 3, 8, 4, 2];

// console.log("Vstup:", data);

// const sorted = bubbleSort(data);

// console.log("Výstup:", sorted);

// const data = "(ddasdasdasd(()dasd)";

// console.log("Vstup:", data);

// const brackets = areBracketsBalanced(data);
// console.log("Výstup:", brackets);
console.log("spravne", binarySearch([1, 3, 5, 7, 9], 7)); // → 3
console.log("spatne", binarySearch([1, 3, 5, 7, 9], 4)); // → -1
