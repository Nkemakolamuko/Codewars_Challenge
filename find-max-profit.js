// Function to find the maximum profit.
function maximumProfit(prices) {
  let resPro = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      resPro = Math.max(resPro, prices[j] - prices[i]); // between the two
    }
  }
  return resPro;
}
