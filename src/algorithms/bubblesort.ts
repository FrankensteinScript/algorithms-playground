export function bubbleSort(arr: number[]) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

/*
pseudokód:

přijmi pole čísel

pro i od 0 do délka pole − 1
  pro j od 0 do délka pole − i − 1
    pokud prvek[j] > prvek[j + 1]
      prohoď je

časová složitost: O(n²)
paměťová složitost: O(1)

*/
