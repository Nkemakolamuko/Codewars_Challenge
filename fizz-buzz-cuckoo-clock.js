function fizzBuzzCuckooClock(time) {
  let finalSent = "";
  let [hour, minute] = time.split(":").map(Number);

  // Convert hour from 24-hour format to 12-hour format
  let hourIn12 = hour % 12;

  // Handle cuckoo logic
  if (minute === 0) {
    // Cuckoo behavior at the hour
    if (hourIn12 === 0 || hourIn12 === 12) {
      // Midnight or noon
      finalSent += "Cuckoo ".repeat(12).trim();
    } else {
      // For any other hour
      finalSent += "Cuckoo ".repeat(hourIn12).trim();
    }
  } else if (minute === 30) {
    // Cuckoo behavior at the half hour
    finalSent += "Cuckoo";
  }

  // Handle FizzBuzz for the minute
  if (minute % 3 === 0 && minute % 5 === 0) {
    finalSent = finalSent ? finalSent + "" : "Fizz Buzz";
  } else if (minute % 3 === 0) {
    finalSent = finalSent ? finalSent + " Fizz" : "Fizz";
  } else if (minute % 5 === 0) {
    finalSent = finalSent ? finalSent + " Buzz" : "Buzz";
  } else {
    finalSent = finalSent ? finalSent + " tick" : "tick";
  }

  return finalSent;
}

// console.log(fizzBuzzCuckooClock("13:33"));
console.log(fizzBuzzCuckooClock("12:00"));

/*
Your plan
When a minute is evenly divisible by three, the clock will say the word "Fizz".
When a minute is evenly divisible by five, the clock will say the word "Buzz".
When a minute is evenly divisible by both, the clock will say "Fizz Buzz", with two exceptions:
On the hour, instead of "Fizz Buzz", the clock door will open, and the cuckoo bird will come out and "Cuckoo" between one and twelve times depending on the hour.
On the half hour, instead of "Fizz Buzz", the clock door will open, and the cuckoo will come out and "Cuckoo" just once.
With minutes that are not evenly divisible by either three or five, at first you had intended to have the clock just say the numbers ala Fizz Buzz, but then you decided at least for version 1.0 to just have the clock make a quiet, subtle "tick" sound for a little more clock nature and a little less noise.
Your input will be a string containing hour and minute values in 24-hour time, separated by a colon, and with leading zeros. For example, 1:34 pm would be "13:34".

Your return value will be a string containing the combination of Fizz, Buzz, Cuckoo, and/or tick sounds that the clock needs to make at that time, separated by spaces. Note that although the input is in 24-hour time, cuckoo clocks' cuckoos are in 12-hour time.

Some examples
"13:34"       "tick"
"21:00"       "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"
"11:15"       "Fizz Buzz"
"03:03"       "Fizz"
"14:30"       "Cuckoo"
"08:55"       "Buzz"
"00:00"       "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"
"12:00"       "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"
*/
