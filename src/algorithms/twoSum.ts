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
