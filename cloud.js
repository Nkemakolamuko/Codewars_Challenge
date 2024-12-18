let para = document
  .getElementById("myParagraph")
  .textContent.replace(/[^\w\s]|_|\n/g, "")
  .split(" ");

let countObj = {};
for (let i = 0; i < para.length; i++) {
  countObj[para[i]] = (countObj[para[i]] || 0) + 1;
}

// This puts the objects in an array so we can use array methods on it - like sort
let finObj = Object.entries(countObj)
  .sort((a, b) => b[1] - a[1])
  .splice(1)
  .filter((subArr) => subArr[1] >= 12);

let cloudDiv = document.getElementById("myWordCloud");
let font_size = 64;
for (let i = 0; i < finObj.length; i++) {
  let newPara = document.createElement("p");
  newPara.innerText = finObj[i][0];
  newPara.style.fontSize = font_size + "px";
  font_size -= 4;
  cloudDiv.append(newPara);
}

console.log(finObj);
