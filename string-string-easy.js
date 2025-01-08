// Recover toString() here :)
Number.prototype.toString = function toString() {
  return this.valueOf() + "";
};

Boolean.prototype.toString = function toString() {
  return this.valueOf() ? "true" : "false";
};

Array.prototype.toString = function toString() {
  return `[${this.join(", ")}]`;
};
