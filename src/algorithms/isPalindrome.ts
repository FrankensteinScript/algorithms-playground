export function isPalindrome(text: string) {
	const stringArr = text.split("");
	let left = 0;
	let right = stringArr.length - 1;

	const isCharOrNumber = (char: string) => /[a-zA-Z0-9]/.test(char);

	while (left < right) {
		if (!isCharOrNumber(stringArr[left].toLowerCase())) {
			left++;
			continue;
		}
		if (!isCharOrNumber(stringArr[right].toLowerCase())) {
			right--;
			continue;
		}

		if (stringArr[left].toLowerCase() !== stringArr[right].toLowerCase()) {
			return false;
		}

		left++;
		right--;
	}

	return true;
}

/*
pseudokód:

prijmi string
nastav levy ukazatel na zacatek
nastav pravy ukazatel na konec

while levy < pravy
    pokud znak na leve strane neni pismeno/cislo
        posun levy doprava
        pokracuj
    pokud znak na prave strane neni pismeno/cislo
        posun pravy doleva
        pokracuj
    pokud znaky na leve a prave strane nejsou stejny
        vrat false
    posun levy doprava
    posun pravy doleva

vrat true

casova slozitost oN

*/
