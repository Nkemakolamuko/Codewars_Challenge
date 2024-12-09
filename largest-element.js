function largest(n, array = []) {
  return array
    .sort((a, b) => b - a)
    .slice(0, n)
    .sort((a, b) => a - b);
}

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
