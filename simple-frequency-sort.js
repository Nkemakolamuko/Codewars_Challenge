// function solve(arr = []) {
//   let nonRepeatedArrays = [];
//   let arrRepeated = [];
//   const freqMap = {};
//   arr.forEach((num) => {
//     freqMap[num] = (freqMap[num] || 0) + 1; // keeping count of item occurrence in an object
//   });
//   for (element of arr) {
//     // indexOf returns the first index where the given element is found in the array. And lastIndexOf returns the last index of where the element i found in the arr ... so it compares both indexes to see they aren't the same thing, if they aren't, the value in that index gets pushed in the repeatedArr
//     if (arr.indexOf(element) !== arr.lastIndexOf(element)) {
//       arrRepeated.push(element);
//     } else {
//       nonRepeatedArrays.push(element);
//     }
//   }
//   return arrRepeated
//     .sort((a, b) => {
//       if (freqMap[a] !== freqMap[b]) {
//         return freqMap[b] - freqMap[a];
//       } else {
//         return a - b;
//       }
//     })
//     .concat(nonRepeatedArrays.sort((a, b) => a - b));
// }

function solve(arr) {
  let sArr = [];
  let xArr = [];
  let numCount = {};
  for (let i = 0; i < arr.length; i++) {
    numCount[arr[i]] = (numCount[arr[i]] || 0) + 1;
  }
  for (num of arr) {
    if (arr.indexOf(num) !== arr.lastIndexOf(num)) {
      sArr.push(num);
    } else {
      xArr.push(num);
    }
  }

  let sortedArr = sArr.sort((a, b) => {
    if (numCount[a] !== numCount[b]) {
      return numCount[b] - numCount[a];
    } else {
      return a - b;
    }
  });
  return sortedArr.concat(xArr.sort((a, b) => a - b));
}

// // console.log(solve([2, 3, 5, 3, 7, 9, 5, 3, 7]));
// // console.log(solve([+0, +0, 1, 1, 1, 6, 6, 8, 8, 2, 3, 5, 9]));
// // console.log(solve([3, 3, 3, 5, 7, 5, 7, 2, 9]));
console.log(solve([+0, +0, 4, 4, 9, 9, 5, 7, 3, 8]));

// // function solve(arr) {
// //   let repeatedArr = [];
// //   let unrepeatedArr = [];
// //   for (element of arr) {
// //     if (
// //       arr.indexOf(element) !== arr.lastIndexOf(element) ||
// //       Object.is(element, +0) // compares if two values are the same thing
// //     ) {
// //       repeatedArr.push(element);
// //     } else {
// //       unrepeatedArr.push(element);
// //     }
// //   }

// //   return repeatedArr.sort((a, b) => a - b).concat(unrepeatedArr);
// // }
// // console.log(solve([+0, +0, 1, 1, 1, 6, 6, 8, 8, 2, 3, 5, 9]));
