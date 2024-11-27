var capitals = function (word) {
  let orderedList = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] == word[i].toUpperCase()) {
      orderedList.push(i);
    }
  }
  return orderedList;
};

console.log(capitals("EcmasCRIPt"));
