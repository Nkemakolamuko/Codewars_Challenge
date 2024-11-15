// -> Same Birthday Probability
function calculateProbability(n) {
  let result = 1;
  for (let i = 1; i < n; i++) {
    let prob = (365 - i) / 365;
    result *= prob;
  }
  let finalVal = Math.ceil((1 - result) * 100) / 100;
  if (finalVal <= 1) {
    return finalVal.toFixed(2);
  } else {
    return finalVal;
  }
}
