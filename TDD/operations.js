function sum(primaryNumber, secondaryNumber) {
  if (
    typeof primaryNumber !== 'number' ||
    typeof secondaryNumber !== 'number'
  ) {
    return 'Error: The arguments must be numbers';
  }

  const operation = primaryNumber + secondaryNumber;

  return operation;
}

module.exports = {
  sum,
};
