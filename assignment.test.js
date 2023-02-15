import {
	capitalize,
	reverseString,
	calculator,
	caesarCipher,
	analyzeArray,
} from './assignment';

test('Returns string with first char capitalized', () => {
	expect(capitalize('foo')).toBe('Foo');
});

test('Returns reversed input string', () => {
	expect(reverseString('haha')).toBe('ahah');
	expect(reverseString('test')).toBe('tset');
	expect(reverseString('racecar')).toBe('racecar');
});

test('Adds two numbers', () => {
	expect(calculator.add(1, 2)).toBe(3);
	expect(calculator.add(-3, 4)).toBe(1);
	expect(calculator.add(0, 10)).toBe(10);
});

test('Subtracts two numbers', () => {
	expect(calculator.subtract(2, 1)).toBe(1);
	expect(calculator.subtract(4, 2)).toBe(2);
});

test('Divides two numbers', () => {
	expect(calculator.divide(4, 2)).toBe(2);
	expect(calculator.divide(7, 4)).toBe(7 / 4);
});

test('Multiplies two numbers', () => {
	expect(calculator.multiply(4, 2)).toBe(8);
	expect(calculator.multiply(4, -2)).toBe(-8);
	expect(calculator.multiply(7, 4)).toBe(28);
	expect(calculator.multiply(-3, -7)).toBe(21);
});

test('Ceasar scipher shifts string using key', () => {
	expect(caesarCipher('test', 0)).toBe('test');
	expect(caesarCipher('test', 1)).toBe('uftu');
	expect(caesarCipher('hello', 3)).toBe('khoor');
	expect(caesarCipher('test', 26)).toBe('test');
	expect(caesarCipher('test', 27)).toBe('uftu');
});

test('Caesar cipher ignores spaces and punctuation', () => {
	expect(caesarCipher('test!', 1)).toBe('uftu!');
	expect(caesarCipher('hey there!', 5)).toBe('mjd ymjwj!');
});

test('Caesar cipher wraps from z to a', () => {
	expect(caesarCipher('zookeeper', 1)).toBe('applffqfs');
	expect(caesarCipher('Zebra', 3)).toBe('Cheud');
});

test('Returns average of array', () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test('Returns min of array', () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test('Returns max of array', () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test('Returns length of array', () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
