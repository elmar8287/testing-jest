const Calculator = require('./calculator');

describe('Unit tests', () => {
  test('add method', () => {
    const calc = new Calculator();
    calc.add(5);
    calc.add(5);
    calc.add(6);
    expect(calc.value).toBe(16);
  });
  test('subtract method', () => {
    const calc = new Calculator();
    calc.add(6);
    calc.subtract(1);
    calc.subtract(3);
    expect(calc.value).toBe(2);
  });
  test('multiple method', () => {
    const calc = new Calculator();
    calc.add(6);
    calc.subtract(3);
    calc.multiply(4);
    expect(calc.value).toBe(16);
  });
  test('divide method', () => {
    const calc = new Calculator();
    calc.add(14);
    calc.divide(7);
    expect(calc.value).toBe(2);
  });
});