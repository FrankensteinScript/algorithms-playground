export function twoSum(arr: number[], target: number) {
	for (let i = 0; i <= arr.length - 1; i++) {
		for (let j = i + 1; j <= arr.length - 1; j++) {
			if (arr[i] + arr[j] === target) {
				return [i, j];
			}
		}
	}

	return [];
}

/*
psudokod:
prijmi pole
prijmi cislo

pro i od 0 do delka pole - 1
  pro j od i + 1 do delka pole - 1
    pokud pole[i] + pole[j] == cil
      vrat [i, j]

vrat prazdne pole

casova slozitost On2

*/

export function twoSumOn(arr: number[], target: number) {
	const map = new Map();
	let needed = 0;

	for (let i = 0; i < arr.length; i++) {
		needed = target - arr[i];
		console.log("needed", needed);
		if (map.has(needed)) {
			return [map.get(needed), i];
		}
		map.set(arr[i], i);
	}
	return [];
}
/*
psudokod:
prijmi pole
prijmi cislo

init mapu
init pomocnou promenou needed

pro každý prvek
    spočítej, co hledám
        pokud to existuje v mpate
            vrat index
        uloz aktualni prvek do mapy


vrat prazdne pole

casova slozitost On

*/
