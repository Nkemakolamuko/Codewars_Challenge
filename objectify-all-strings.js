function String(value) {
  return (this.value = value);
}

// String.prototype.hashify = function () {
//   let myLength = this.value.length;
//   let obj = {};
//   for (let i = 0; i < myLength; i++) {
//     if (i == myLength - 1) {
//       if (!obj[this.value[i]]) {
//         obj[this.value[i]] = [];
//       }
//       obj[this.value[i]] = [...obj[this.value[i]], this.value[0]];
//     } else {
//       if (this.value[i] !== undefined) {
//         if (!obj[this.value[i]]) {
//           obj[this.value[i]] = [];
//         }
//         obj[this.value[i]] = [...obj[this.value[i]], this.value[i + 1]];
//       }
//     }
//   }

//   for (let key in obj) {
//     if (obj[key].length === 1) {
//       obj[key] = obj[key][0];
//     }
//   }

//   return JSON.stringify(obj);
// };

// let str = new String("1123456");
// let war = new String("racecar");
// let arr = new String("1, 2, 3, 4, 5");

// console.log(str.hashify());
// console.log(war.hashify());
// console.log(JSON.stringify(arr.hashify()));

// Expected Input and Output
/*
'123456'.hashify() == {"1":"2","2":"3","3":"4","4":"5","5":"6","6":"1"} // The last char will be key for 1st
char
*/

/*
Correct results is {"r":["a","r"],"a":["c","r"],"c":["e","a"],"e":"c"}
*/

String.prototype.hashify = function () {
  // Get the length of the string
  let myLength = this.value.length;

  // Initialize an empty object to store character mappings
  let obj = {};

  // Iterate through each character in the string
  for (let i = 0; i < myLength; i++) {
    // Get the current character
    const currentChar = this.value[i];

    // Get the next character, using modulo to wrap around to the first character if at the end - using the remainder of the division by the length of the string
    const nextChar = this.value[(i + 1) % myLength];

    // If the current character is not yet a key in the object
    if (!obj[currentChar]) {
      // Simply assign the next character as its value
      obj[currentChar] = nextChar;
    } else {
      // If the key already exists, check if the value is a string or an array

      // If the existing value is a string (single character)
      if (typeof obj[currentChar] === "string") {
        // Convert it to an array with the existing value and the new next character
        obj[currentChar] = [obj[currentChar], nextChar];
      } else {
        // If it's already an array, just push the new next character
        obj[currentChar].push(nextChar);
      }
    }
  }

  // Return the completed object
  return obj;
};

let war = new String("racecar");
console.log(war.hashify());
