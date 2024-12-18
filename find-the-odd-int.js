function findOdd(A) {
  let resultObj = {};
  let odd = "";
  for (num of A) {
    resultObj[num] = (resultObj[num] || 0) + 1;
  }

  for (key in resultObj) {
    if (resultObj[key] % 2 !== 0) {
      odd = key;
    }
  }

  return Number(odd);
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// Someone's solution
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

/*
Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/
