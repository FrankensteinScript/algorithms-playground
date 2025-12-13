export function bubbleSort(arr: number[]): number[] {
	const result = [...arr];

	for (let i = 0; i < result.length; i++) {
		console.log(`Iterace ${i + 1}:`, result);

		for (let j = 0; j < result.length - i - 1; j++) {
			console.log(`Porovnávám ${result[j]} a ${result[j + 1]}`);

			if (result[j] > result[j + 1]) {
				console.log(`prohození`);
				[result[j], result[j + 1]] = [result[j + 1], result[j]];
			}
		}
	}

	return result;
}
