function reverseWords(str) {
  return str
    .split(" ")
    .reverse()
    .map((v) => v.split("").reverse().join(""))
    .reverse()
    .join(" ");
}

let myArray = ["Banana", "Apples", "Oranges", "Mango"];
console.log(myArray.at(2));
