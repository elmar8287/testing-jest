class Calculator {
  constructor() {
    this.result = 0;
  }

  get value() {
    return this.result;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    this.result /= num;
  }
}

module.exports = Calculator;