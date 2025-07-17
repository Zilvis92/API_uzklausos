const { sum }  = require('../sum.js');

test('Should return the sum of two numbers', () => {
    const x = 2;
    const y = 6;
    const result = sum(x, y);

    expect(result).toBe(8);
});