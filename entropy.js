function logarithm(x, y) {
	return Math.log(y) / Math.log(x);
}

let fs = require('fs');
let arg = process.argv;
let s;

fs.readFile(arg[2], (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	s = data.toString();
	n = s.length;
	alphabet = new Map(); 
	let t = 0;
	for (let i = 0; i < n; i++) {
		if (alphabet.has(s[i])) {
			alphabet.set(s[i], alphabet.get(s[i]) + 1);
		}
		else {
			alphabet.set(s[i], 1);
			t++;
		}
	}
	console.log('Буква в алфавите и ее частота');
	let result = 0;
	for (var [key, value] of alphabet) {
		console.log(key + ' ' + value / n);
		result += (value / n) * logarithm(t, value / n);
	}
	result *= -1;
	if (t == 1) console.log('Энтропия строки равна 0');
	else console.log('Энтропия строки равна ' + result);
});