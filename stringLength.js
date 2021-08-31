const stringLength = (str) => {
  if (str.length < 1 || str.length > 10) {
    throw new Error('Should be a least 1 character long and not longer than 10 characters');
  }
  return str.length;
};

module.exports = stringLength;