export function areBracketsBalanced(expression: string): boolean {
	const stack: string[] = [];

	for (const char of expression) {
		if (char === "(") {
			stack.push(char);
			if (stack.length === 0) return false;
		} else {
			stack.pop();
		}
	}

	return stack.length === 0;
}

/*
pseudokód:

prijmi string
vytvor prazdny zasobnik

pro kazdy znak ve stringu
  pokud znak je "("
    vloz ho do zasobniku
  pokud znak je ")"
    pokud je zasobnik prazdny
      vrat false
    jinak
      odeber prvek ze zasobniku

pokud je zasobnik prazdny
  vrat true
jinak
  vrat false


*/
