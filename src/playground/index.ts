import { bubbleSort } from "../algorithms/bubbleSort";
import { areBracketsBalanced } from "../algorithms/brackets";

// const data = [5, 3, 8, 4, 2];

// console.log("Vstup:", data);

// const sorted = bubbleSort(data);

// console.log("Výstup:", sorted);

const data = "(ddasdasdasd(()dasd)";

console.log("Vstup:", data);

const brackets = areBracketsBalanced(data);
console.log("Výstup:", brackets);
