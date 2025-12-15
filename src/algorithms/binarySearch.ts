export function binarySearch(arr: number[], number: number) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let middle = Math.floor((left + right) / 2);
		console.log("middle", middle);

		if (arr[middle] === number) {
			console.log("middleArr", arr[middle]);
			return middle;
		}

		if (arr[middle] < number) {
			left = middle + 1;
			console.log("left", left);
		} else right = middle - 1;
	}

	return -1;
}

/*
psudokod:
prijmi serazene pole
prijmi hledane cislo

nastav left = 0
nastav right = delka pole - 1

dokud left <= right
  middle = (left + right) / 2

  pokud arr[middle] == hledane
    vrat middle

  pokud arr[middle] < hledane
    left = middle + 1
  jinak
    right = middle - 1

vrat -1


casova slozitost je oLogN 

*/
