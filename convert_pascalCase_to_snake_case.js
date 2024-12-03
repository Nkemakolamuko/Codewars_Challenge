function toUnderscore(string) {
  if (typeof string == "number") {
    return string.toString();
  }
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i].toUpperCase()) {
      if (string[i] == string[0]) {
        result += string[i].toLowerCase();
      } else if (!Number.isNaN(Number(string[i]))) {
        // so I convert the value from a string to a number, and then check if it's a number
        // this is where I check for numbers and still do normal concatenation
        result += string[i];
      } else {
        result += "_" + string[i].toLowerCase();
      }
    } else {
      result += string[i];
    }
  }

  return result;
}

// Someone's solution
// var toUnderscore;

// toUnderscore = function(string) {
//   return string.toString().split(/(?=[A-Z])/).join('_').toLowerCase();
// };

// console.log(toUnderscore("My3CodeIs4TimesBetter"));
console.log(toUnderscore("MoviesAndBooksAndBags"));
// console.log(toUnderscore(1));
