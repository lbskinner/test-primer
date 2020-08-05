// 1.	Write a function that accepts a string as a parameter and returns the string backwards.
// a.	Pass in “This string is backwards!” and output the resulting string “!sdrawkcab si gnirts sihT”
string = "This string is backwards!";

function sortStringBackwards(string) {
  const splitStringArray = string.split("");
  const reverseArray = splitStringArray.reverse();
  return (newString = reverseArray.join(""));
}

console.log(sortStringBackwards(string));

// 2.	Write a recursive function that accepts an integer as a parameter and returns the factorial of that integer
// a.	Pass in 5 and output 120
// b.	The factorial of a number is that number multiplied by every number lower than it
// Example: 8*7*6*5*4*3*2*1

function factorialNum(num) {
  //   const result = num * (num - 1);
  if (num > 1) {
    return num * factorialNum(num - 1);
  }
  return 1;
}
console.log(factorialNum(5));

// 3.	Write a program that prints the numbers from 1 to 100.
// But for multiples of four print “Buzz” instead of the number and for the multiples of seven print “Lightyear”.
// For numbers which are multiples of both three and five print “BuzzLightyear”

function buzzLightYear() {
  const num = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 4 === 0) {
      num.push("Buzz");
    } else if (i % 7 === 0) {
      num.push("LightYear");
    } else if (i % 3 === 0 && i % 5 === 0) {
      num.push("BuzzLightYear");
    } else {
      num.push(i);
    }
  }
  return num.join(" ");
}
console.log(buzzLightYear());
