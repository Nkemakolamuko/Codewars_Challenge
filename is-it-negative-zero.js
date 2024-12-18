function isNegativeZero(n) {
  return n === -0 ? true : false;
}

console.log(isNegativeZero(-2));
console.log(isNegativeZero(Number.MIN_VALUE));

// Better
function isNegativeZero2(n) {
  return Object.is(n, -0); // Returns true if the values are the same value, false otherwise.
}
