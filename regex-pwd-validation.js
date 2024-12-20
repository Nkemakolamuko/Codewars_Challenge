// assign your RegExp to REGEXP:
// const REGEXP = /[a-zA-Z0-9]+$/;
// const REGEXP = /\b(?=[a-zA-Z0-9]*\d)(?=\d*[a-zA-Z0-9])[a-zA-Z\d]{6,}\b/;
const REGEXP = /^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*d))[a-zA-Zd]{6,}$/;
console.log(
  Object.is(
    "/^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*d))[a-zA-Zd]{6,}$/",
    "/^(?=(.*[a-z]))(?=(.*[A-Z])(?=(.*d))[a-zA-Zd]{6,}$/"
  )
);

/*
RegEx Details:
\b: Word boundary
(?=[a-zA-Z]*\d): Lookahead to assert that we have at least one digit after 0 or more letters
(?=\d*[a-zA-Z]): Lookahead to assert that we have at least one letter after 0 or more digits
[a-zA-Z\d]{6,}: Match 6 alphanumeric characters or more (the ',' there)
\b: Word boundary
*/

/*
Explanation:
^: Anchors the regex to the start of the string.
(?=(.*[a-z])): Positive lookahead to ensure at least one lowercase letter.
(?=(.*[A-Z])): Positive lookahead to ensure at least one uppercase letter.
(?=(.*\d)): Positive lookahead to ensure at least one digit.
[a-zA-Z\d]{6,}: Ensures the password is at least 6 characters long and only contains alphanumeric characters (letters and digits).
$: Anchors the regex to the end of the string.
*/

function validPassWord(pwd) {
  if (REGEXP.test(pwd)) {
    return "Valid";
  } else {
    return "Invalid";
  }
}

console.log(validPassWord("abc9abt"));
console.log(validPassWord("abc9aBt"));
console.log(validPassWord("ghdfj32"));

/*
You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a digit
only contains alphanumeric characters (note that '_' is not alphanumeric)
*/
