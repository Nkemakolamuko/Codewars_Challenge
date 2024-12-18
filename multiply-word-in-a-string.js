function modifyMultiply(str, loc, num) {
  let strArr = str.split(" ");
  let multiStr = [];
  for (let i = 0; i < num; i++) {
    multiStr.push(strArr[loc]);
  }
  return multiStr.join("-");
}

console.log(
  modifyMultiply(
    "Creativity is the process of having original ideas that have value. It is a process; it's not random.",
    8,
    10
  )
);
