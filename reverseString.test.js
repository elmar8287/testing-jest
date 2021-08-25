const reverseString = require('./reverseString');

test('Testing', () => {
  expect(reverseString('test')).toBe('tset');
});

test('Testing', () => {
  expect(reverseString('Elmar')).toThrowError('Elmar');
});