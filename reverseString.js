const reverseString = (str) => {
  if (str.length < 1 || str.length > 10) {
    return 'Should be a least 1 character long and not longer than 10 characters';
  }
  return str.split('').reverse().join('');
};

module.exports = reverseString;