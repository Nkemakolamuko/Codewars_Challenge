function capitalizeChar(sentence) {
  let newSet = "";
  let strArr = sentence.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    let eachWord = "";
    eachWord += strArr[i];
    if (eachWord.length === 6) {
      newSet +=
        " " +
        eachWord.slice(0, eachWord.length - 1) +
        eachWord.at(-1).toUpperCase();
    } else if (eachWord.length === 5) {
      newSet += " " + eachWord.at(0).toUpperCase() + eachWord.slice(1);
    } else {
      newSet += " " + eachWord;
    }
  }
  return newSet.trim();
}

console.log(capitalizeChar("Hello world from the cosmos"));
