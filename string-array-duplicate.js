/*
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.
*/

function dup(s) {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    // runs for each value in the array
    let eachCleanedString = "";
    for (j = 0; j < s[i].length; j++) {
      if (s[i][j] == s[i][j - 1]) {
        // compare consecutive current character with previous
        continue;
      } else {
        eachCleanedString += s[i][j];
      }
    }
    result.push(eachCleanedString);
  }
  return result;
}

console.log(dup(["abracadabra", "allottee", "assessee"]));

let nestedArray = [1, [2, 3], [4, [5, 6]], [[7, [8, 9]]]];
let flattenedArray = nestedArray.flat(); // Flattens up to 2 levels deep
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

console.log((Math.random() * (10 - 5) + 5).toFixed(0)); // within a range of 5 to 10(exclusive)

function Person(username, age) {
  this.username = username;
  this.age = age;
}

Person.prototype.getFullName = function () {
  return `${this.username} is ${this.age} years old!`;
};

const person = new Person();
person.username = "Towi";
person.age = 18;

console.log(person.getFullName());
