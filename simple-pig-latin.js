function pigIt(str) {
  let newSent = "";
  let arrOfEach = [];
  let alp = "abcdefghijklmnopqrstuvwxyz";
  let otherWords = [];
  let splitWord = str.split(" ");
  for (let i = 0; i < splitWord.length; i++) {
    if (alp.toUpperCase().includes(splitWord[i].charAt(0).toUpperCase())) {
      arrOfEach.push(splitWord[i].charAt(0)); // this is for the first character
    } else if (
      !alp.toUpperCase().includes(splitWord[i].charAt(0).toUpperCase())
    ) {
      arrOfEach.push(splitWord[i]); // this is for punctuations
    }
    // both are pushed into arrOfEach
  }

  // The remainder of the word - minus the first character push to otherWords array
  for (let i = 0; i < splitWord.length; i++) {
    otherWords.push(splitWord[i].slice(1, splitWord[i].length));
  }

  // This is where the concatenation happens on each word
  for (let i = 0; i < otherWords.length; i++) {
    if (alp.toUpperCase().includes(splitWord[i].charAt(0).toUpperCase())) {
      newSent += otherWords[i] + arrOfEach[i] + "ay" + " ";
    } else {
      newSent += otherWords[i] + arrOfEach[i] + " ";
    }
  }

  return newSent.trim(); // to remove the trailing whitespace
}

console.log(pigIt("Hello world how are you doing? !"));

// Other people's solution

// function pigIt(str){
//     return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
//   }

// function pigIt(str) {
//     return str.replace(/\w+/g, (w) => {
//       return w.slice(1) + w[0] + 'ay';
//     });
//   }
