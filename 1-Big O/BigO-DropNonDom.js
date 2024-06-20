function logItems(n) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			console.log(i, j); // O(n^2) -> dominant
		}
	}

	for (let k = 0; k < n; k++) {
		console.log(k); // O(n) -> non dominant
	}
}

logItems(10); // O(n^2 + n)
