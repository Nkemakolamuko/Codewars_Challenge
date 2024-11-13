// CODEWARS CHALLENGES Compiled

// -> BIT COUNTING
var countBits = function (n) {
  let nums = n.toString(2); // convert the number to binary
  let counts = [...nums].filter((v) => v === "1").length; // get rid of the zeros and get the length of the one's
  return counts;
};

// -> SUM OF DIGITS / DIGITAL ROOT
function digitalRoot(n) {
  while (n >= 10) {
    n = n
      .toString()
      .split("")
      .reduce((totalSum, currentValue) => totalSum + +currentValue, 0);
  }
  return n;
}

// -> SPLIT STRING
function solution(str) {
  let cha = str.split("");
  let output = [];

  for (let i = 0; i < cha.length; i += 2) {
    let pair = cha[i] + (cha[i + 1] || "_");
    output.push(pair);
  }

  return output;
}

// -> Square Every Digit
function squareDigits(num) {
  let nums = num.toString().split("");
  return Number(nums.map((v) => v ** 2).join(""));
}

// -> Grasshopper - Summation
var summation = function (num) {
  let placeholder = 0;
  for (let i = 1; i < num + 1; i++) {
    placeholder += i;
  }
  return placeholder;
};

// -> Replace With Alphabet Position
function alphabetPosition(text) {
  text = text.split(" ").join("");
  let firstChar = "";
  let arr = [];
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < text.length; i++) {
    firstChar = text.charAt(i).toLowerCase();
    if (alphabet.indexOf(firstChar) > -1) {
      arr.push(alphabet.indexOf(firstChar) + 1);
    }
  }
  return arr.join(" ");
}

// -> Find The Parity Outlier
function findOutlier(integers) {
  let odd = [];
  let even = [];

  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      even.push(integers[i]);
    } else {
      odd.push(integers[i]);
    }
  }

  if (odd.length === 1) {
    return odd[0];
  } else if (even.length === 1) {
    return even[0];
  }
}

// -> DNA to RNA Conversion
function DNAtoRNA(dna) {
  return (dna = dna.replaceAll("T", "U"));
}

// -> Beginner - Reduce but Grow
function grow(x) {
  return x.reduce((pV, cV) => pV * cV);
}

// -> Is he gonna survive?
function hero(bullets, dragons) {
  if (bullets >= 2 * dragons) {
    return true;
  } else {
    return false;
  }
}

// -> Fake Binary
function fakeBin(x) {
  let result = "";
  for (let i = 0; i < x.length; i++) {
    result += x[i] < "5" ? "0" : "1";
  }
  return result;
}

// -> Is n divisible by x and y?
function isDivisible(n, x, y) {
  if (n % x == 0 && n % y == 0) {
    return true;
  } else {
    return false;
  }
}

// -> Never visit a . . . !?
function SubtractSum(n) {
  let theSum = n
    .toString()
    .split("")
    .reduce((pV, cV) => pV + Number(cV), 0);
  n = n - theSum;
  if (n > 100) {
    return SubtractSum(n);
  }
  const fruits = {
    1: "kiwi",
    2: "pear",
    3: "kiwi",
    4: "banana",
    5: "melon",
    6: "banana",
    7: "melon",
    8: "pineapple",
    9: "apple",
    10: "pineapple",
    11: "cucumber",
    12: "pineapple",
    13: "cucumber",
    14: "orange",
    15: "grape",
    16: "orange",
    17: "grape",
    18: "apple",
    19: "grape",
    20: "cherry",
    21: "pear",
    22: "cherry",
    23: "pear",
    24: "kiwi",
    25: "banana",
    26: "kiwi",
    27: "apple",
    28: "melon",
    29: "banana",
    30: "melon",
    31: "pineapple",
    32: "melon",
    33: "pineapple",
    34: "cucumber",
    35: "orange",
    36: "apple",
    37: "orange",
    38: "grape",
    39: "orange",
    40: "grape",
    41: "cherry",
    42: "pear",
    43: "cherry",
    44: "pear",
    45: "apple",
    46: "pear",
    47: "kiwi",
    48: "banana",
    49: "kiwi",
    50: "banana",
    51: "melon",
    52: "pineapple",
    53: "melon",
    54: "apple",
    55: "cucumber",
    56: "pineapple",
    57: "cucumber",
    58: "orange",
    59: "cucumber",
    60: "orange",
    61: "grape",
    62: "cherry",
    63: "apple",
    64: "cherry",
    65: "pear",
    66: "cherry",
    67: "pear",
    68: "kiwi",
    69: "pear",
    70: "kiwi",
    71: "banana",
    72: "apple",
    73: "banana",
    74: "melon",
    75: "pineapple",
    76: "melon",
    77: "pineapple",
    78: "cucumber",
    79: "pineapple",
    80: "cucumber",
    81: "apple",
    82: "grape",
    83: "orange",
    84: "grape",
    85: "cherry",
    86: "grape",
    87: "cherry",
    88: "pear",
    89: "cherry",
    90: "apple",
    91: "kiwi",
    92: "banana",
    93: "kiwi",
    94: "banana",
    95: "melon",
    96: "banana",
    97: "melon",
    98: "pineapple",
    99: "apple",
    100: "pineapple",
  };

  return fruits[n];
}

// -> Regex validate PIN code
function validatePIN(pin) {
  if ((pin.length === 4 || pin.length === 6) && /^\d+$/.test(pin)) {
    return true;
  }
  return false;
}

// -> Is this a triangle?
function isTriangle(a, b, c) {
  return a + b > c && b + c > a && a + c > b ? true : false;
}

// -> Find the stray number
function stray(numbers) {
  return numbers.filter((v) => numbers.indexOf(v) == numbers.lastIndexOf(v))[0];
}

// -> Delete occurrences of an element if it occurs more than n times
function deleteNth(arr, n) {
  let output = [];
  for (let key of arr) {
    let exist = output.filter((v) => v === key).length;
    if (exist && exist == n) {
      continue;
    } else {
      output.push(key);
    }
  }
  return output;
}

// -> Friend or Foe?
function friend(friends) {
  return friends.filter((f) => f.length === 4);
}

// -> Credit Card Mask
// return masked string
function maskify(cc) {
  let hashed = "";
  let splitCC = cc.split("");
  for (let i = 0; i < splitCC.length - 4; i++) {
    hashed += "#";
  }
  return hashed + splitCC.slice(-4).join("");
}

// -> Round up to the next multiple of 5
function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}

// -> Simple Fun #176: Reverse Letter
function reverseLetter(str) {
  let alp = "abcdefghijklmnopqrstuvwxyz";
  let cleanStr = "";
  for (let i = 0; i < str.length; i++) {
    alp.includes(str[i]) ? (cleanStr += str[i]) : "";
  }
  return cleanStr.split("").reverse().join("");
}

// -> Check the exam
function checkExam(array1, array2) {
  let answer = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array2[i] == "") {
      answer += 0;
    } else if (array1[i] == array2[i]) {
      answer += 4;
    } else if (array1[i] != array2[i]) {
      answer += -1;
    }
  }
  if (answer < 0) {
    return 0;
  } else {
    return answer;
  }
}
