const user = {
  name: "Nkemakolamuko",
  age: 49,
};

// For normal testing
function info() {
  console.log(`${this.name} is ${this.age} years old!`);
  return 0;
}

// For testing with extra variables
function info(school, country) {
  console.log(
    `${this.name} is ${this.age} years old!, and is a student of ${school} in ${country}`
  );
  return 0;
}

info.apply(user);
info.call(user);
info.bind(user)("Bind", "Nigeria");

let theBind = info.bind(user)("ALU", "Rwanda");

// Adding extra variables that don't exist in the object
info.call(user, "ALU", "Rwanda");
info.apply(user, ["ALU", "Rwanda"]);
// console.log(theBind("ALU", "Rwanda"));
