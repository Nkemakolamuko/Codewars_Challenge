let username = {
  firstName: "Nkem",
  lastName: "Vincent",
};

function person(myLocation, state) {
  console.log(
    this.firstName + " " + this.lastName + " , " + myLocation + " , " + state
  );
}

let human = person.bind(username, "Kigali");
human("Rwanda");

// Polyfill implementation of bind method
// -> Note: When you want every function you declare to have
// access to a method you created, you use the Function
// prototype chain to create it

Function.prototype.myBind = function (...args) {
  let obj = this;
  let param = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...param, ...args2]);
  };
};

let human2 = person.myBind(username, "Kigali");
human2("Rwanda");

// Function.prototype.myBind = function (...args) {
//   let obj = this,
//     param = args.slice(1);
//   return function (...args2) {
//     //obj.call(args[0], param); // the args[0] gives us a reference to the Object
//     // being passed
//     // The param is an array, and the call method does not handle arrays
//     // So we use apply
//     obj.apply(args[0], [...param, ...args2]);
//   };
// };
