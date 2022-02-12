const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit, add } = require('../src/math');

test('Should calculate total with tip', () => {
	const total = calculateTip(10, 0.3);
	expect(total).toBe(13);
});
test('Should calculate total with default tip', () => {
	const total = calculateTip(10);
	expect(total).toBe(12.5);
});
test('Should convert 32 F to 0 C', () => {
	expect(fahrenheitToCelsius(32)).toBe(0);
});
test('Should convert 0 C to 32 F', () => {
	expect(celsiusToFahrenheit(0)).toBe(32);
});

test('Async test demo', (done) => {
	setTimeout(() => {
		try {
			expect(2).toBe(2);
			done();
		} catch (e) {
			done(e);
		}
	}, 1000);
});

test('Should add two numbers', (done) => {
	add(2, 3).then((sum) => {
		try {
			expect(sum).toBe(5);
			done();
		} catch (e) {
			done(e);
		}
	});
});

test('Should add two numbers async/await', async () => {
	const sum = await add(11, 22);
	expect(sum).toBe(33);
});
