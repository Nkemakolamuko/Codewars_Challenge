const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
console.log(matrix.join(";")); // 1,2,3;4,5,6;7,8,9

// Remove duplicates and sum the remaining array
let arr = [1, 2, 2, 2, 3, 4, 4, 5]; // [1,3,5]
console.log(
  arr.filter((v, i, ar) => ar.indexOf(v) == i).reduce((a, cV) => a + cV)
);

// console.log(arr.filter((v, i, ar) => ar.indexOf(v) == ar.lastIndexOf(v)));

// Extract the duplicates and sum them
let arr2 = [1, 2, 3, 3, 4, 5];
console.log(
  arr2.filter((v, i, ar) => ar.indexOf(v) !== i).reduce((a, cV) => a + cV)
);

// console.log(arr2.filter((v, i, ar) => ar.indexOf(v) !== i));

function maxFreq(arr = []) {
  let frqObj = {};
  arr.map((v, i) => {
    frqObj[v] = (frqObj[v] || 0) + 1;
  });

  console.log(frqObj);

  let maxCount = Math.max(...Object.values(frqObj));

  return arr.filter((v, i, ar) => frqObj[v] !== maxCount);
}
console.log(maxFreq(arr));

let person = {};
person.name = "Nkem";
person.age = 30;
console.log(Object.values(person));
console.log(Object.assign({}, person));
