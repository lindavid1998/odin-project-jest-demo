function capitalize(string) {
	return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string) {
	let strArray = string.split('');
	return strArray.reverse().join('');
}

const calculator = {
	add(a, b) {
		return a + b;
	},
	subtract(a, b) {
		return a - b;
	},
	divide(a, b) {
		return a / b;
	},
	multiply(a, b) {
		return a * b;
	},
};

function caesarCipher(string, key) {
	key = key % 26; // normalize key to be between 0 and 25
	let arr = [];
	let charCode;
	for (let i = 0; i < string.length; i++) {
		charCode = string[i].charCodeAt();

		if (charCode > 96 && charCode < 123) {
			charCode += key;
			if (charCode > 122) {
				charCode = 96 + (charCode - 122);
			}
		} else if (charCode > 64 && charCode < 91) {
			charCode += key;
			if (charCode > 90) {
				charCode = 64 + (charCode - 90);
			}
		}

		arr.push(charCode);
	}

	let outputArr = arr.map((code) => {
		return String.fromCharCode(code);
	});

	return outputArr.join('');
}

function analyzeArray(arr) {
	let output = {};

	let sum = arr.reduce((acc, current) => acc + current, 0);
	output['average'] = sum / arr.length;
	output['min'] = Math.min(...arr);
	output['max'] = Math.max(...arr);
	output['length'] = arr.length;

	return output;
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
