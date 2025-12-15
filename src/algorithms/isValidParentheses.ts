export function isValidParentheses(text: string) {
	const textArr = text.split("");
	let stack: string[] = [];

	for (let i = 0; i < textArr.length; i++) {
		if (textArr[i] === "(") {
			stack.push(textArr[i]);
		}
		if (textArr[i] === ")") {
			if (stack[stack.length - 1] === "(") {
				stack.pop();
			} else return false;
		}

		if (textArr[i] === "{") {
			stack.push(textArr[i]);
		}
		if (textArr[i] === "}") {
			if (stack[stack.length - 1] === "{") {
				stack.pop();
			} else return false;
		}

		if (textArr[i] === "[") {
			stack.push(textArr[i]);
		}
		if (textArr[i] === "]") {
			if (stack[stack.length - 1] === "[") {
				stack.pop();
			} else return false;
		}
	}

	return stack.length === 0;
}
/*
pseudokód:

prijmi string
init stack

prochazime string znak po znaku
    pokud je oteviraci, vloz do stacku
    pokud je zavirajici, zkontroluj jestli vrch stacku odpovida
        pokud ano, pop ze stacku
        pokud ne, false


pokud je stack prazdny, vrat true

casova slozitost oN

*/
