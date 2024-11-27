function factorial(n) {
  return n <= 1 ? 1 : factorial(n - 1) * n;
}

/* In short, a factorial is a function that multiplies a number by every number
below it till 1. For example, the factorial of 3 represents the multiplication of numbers
 3, 2, 1, i.e. 3! = 3 × 2 × 1 and is equal to 6.
*/
