function change(string) {
  // to create an array of small letters a - z (crazyy!)
  let alph = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
  let result = Array(26).fill(0);

  let cleaned = string
    .toLowerCase()
    .split("")
    .filter((v) => alph.includes(v));

  for (let i = 0; i < cleaned.length; i++) {
    // console.log(alph.indexOf(cleaned[i]));
    let index = alph.indexOf(cleaned[i]);
    if (result[index] == 0) {
      result[index] = 1;
    }
  }
  return result.join("");
}

// console.log(change("a   **&  cZ"));
console.log(change("ab"));
// console.log(change("11000000000000000000000001"));

/*
1. Use the array of alphabets and check if it includes any value from the one passed. 
2. Then I will replace the character in the array with 1, else I will replace it with 0
*/

// function change(string) {
//   // to create an array of small letters a - z
//   let alph = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
//   let result = Array(26).fill(0);

//   for (let i = 0; i < string.length; i++) {
//     let index = alph.indexOf(string.toLowerCase()[i]);

//     if (result[index] == 0) {
//       result[index] = 1;
//     }
//   }

//   return result.join("");
// }
