import { bubbleSort } from "../algorithms/bubbleSort";
import { areBracketsBalanced } from "../algorithms/brackets";
import { binarySearch } from "../algorithms/binarySearch";
import { twoSum } from "../algorithms/twoSum";
import { twoSumOn } from "../algorithms/twoSum";

//BUBLESORT
// const data = [5, 3, 8, 4, 2];
// console.log("Vstup:", data);
// const sorted = bubbleSort(data);
// console.log("Výstup:", sorted);

//BRACKETS

// const data = "(ddasdasdasd(()dasd)";
// console.log("Vstup:", data);
// const brackets = areBracketsBalanced(data);
// console.log("Výstup:", brackets);

//BINARY SEARCH
// console.log("spravne", binarySearch([1, 3, 5, 7, 9], 7)); // → 3
// console.log("spatne", binarySearch([1, 3, 5, 7, 9], 4)); // → -1

//TWOSUM
// console.log(twoSum([2, 7, 11, 15], 9)); // → [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // → [1, 2]

//TWOSUM On
console.log(twoSumOn([2, 7, 11, 15], 13));
console.log(twoSumOn([3, 3], 6));
console.log(twoSumOn([1, 2, 3], 7));
