const { sum } = require('./operations');

describe('Sum tests', () => {
  test('Should print a number', () => {
    const expected = 'number';
    const result = sum(5, 5);

    expect(typeof result).toBe(expected);
  });

  test('Should print the result of sum of two numbers', () => {
    const expected = 10;
    const result = sum(5, 5);

    expect(result).toBe(expected);
  });

  test('Should print a negative number if the result is less than zero', () => {
    const lessThan = 0;
    const result = sum(-3, -2);

    expect(result).toBeLessThan(lessThan);
  });

  test('Should print an error message if the params are not numbers', () => {
    const expected = 'Error: The arguments must be numbers';
    const result = sum(10, '10');

    expect(result).toBe(expected);
  });
});
