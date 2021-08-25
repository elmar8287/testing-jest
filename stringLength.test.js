const stringLength = require('./stringLength');

test('Testing', () => {
  expect(stringLength('test')).toBe(4);
});

test('Testing', () => {
  expect(stringLength('')).toThrowError('The length is < 1');
});