function tripledouble(num1, num2) {
  num1 = String(num1);
  num2 = String(num2);

  for (let i = 0; i < num1.length - 2; i++) {
    if (num1[i] === num1[i + 1] && num1[i + 2]) {
      let triple = num1[i];
      for (let j = 0; j < num2.length - 1; j++) {
        if (num2[j] === num2[j + 1] && num2[j] === triple) {
          return 1;
        }
      }
    }
  }

  return 0;

  // let meCount = num1.reduce((obj, val, index, arr) => {
  //   if (arr[index] == arr[index + 1] && arr[index] == arr[index + 2]) {
  //     obj[val] = 3;
  //   }

  //   return obj;
  // }, {});

  // let minorCount = num2.split("").reduce((obj, val, index, arr) => {
  //   if (arr[index] == arr[index + 1]) {
  //     obj[val] = 2;
  //   }

  //   return obj;
  // }, {});

  // // console.log(meCount);
  // // console.log(minorCount);

  // for (let key in meCount) {
  //   console.log(meCount[key] + " " + minorCount[key]);
  //   if (meCount[key] == 3 && minorCount[key] == 2) {
  //     return "1";
  //   } else {
  //     return "0";
  //   }
  // }

  // for (let i = 0; i < num1.length; i++) {
  //   num1Obj[num1[i]] = (num1Obj[num1[i]] || 0) + 1;
  // }

  // for (let num of num1) {
  //   num1Obj[num] = (num1Obj[num] || 0) + 1;
  //   if (num1Obj[num] > maxVal) {
  //     maxVal = num1Obj[num];
  //     res = num;
  //   }
  // }

  // let weakSorted = Object.entries(num1Obj)
  //   .sort(([, a], [, b]) => a - b)
  //   .at(-1)[0];
  // console.log(weakSorted);

  // for (let i = 0; i < num2.length; i++) {
  // num2.split("").map((v) => {
  //   return console.log(num2.split("").indexOf(weakSorted) + " hola");
  // });
  // if (num2.split("").includes(weakSorted)) {
  //   console.log(num2[i]);
  // } else {
  //   console.log(" ");
  // }
  // }
  // let mySorted = Object.fromEntries(weakSorted);
  // console.log(mySorted);

  // console.log(res);

  // return res;

  // for (let [key, value] of Object.entries(num1Obj)) {
  //   console.log(`${key}:${value}`);
  //   if (key == res) {
  //     return num1Obj[key];
  //   }
  // }
  // return num1Obj;
}

console.log(tripledouble(451992777, 41177722899));
