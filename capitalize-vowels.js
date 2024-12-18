function capitalizeVowels(str) {
  const vowels = "aeiouAEIOU";

  const result = str.split("");

  let seconV = [];
  for (let i = 0; i < result.length; i++) {
    if (vowels.includes(result[i]) && i % 2 === 1) {
      seconV.push(result[i].toUpperCase());
    } else {
      seconV.push(result[i]);
    }
  }

  return seconV.join("");

  // .map((char, i) => {
  //   if (vowels.includes(char) && (i % 2 === 1 || i % 2 === 0)) {
  //     return char.toUpperCase();
  //   }
  //   return char;
  // })
  // .join("");

  return result;
}

// To capitalise the vowels in odd indexes
console.log(capitalizeVowels("hello world"));
console.log(capitalizeVowels("javascript is an awesome language"));
