function logItems(n) {
	for (let i = 0; i < n; i++) {
		console.log(i);
	}

	for (let j = 0; j < n; j++) {
		console.log(j);
	}
}

logItems(3); // O(2n) or O(n)
// we drop consonants hence why it is O(n)
