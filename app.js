function toTitleCase(someString) {
  //match the first letter of string, the first letter after a space, "-", and "."
  const re = /(^|[\s.\-])([a-zA-z])/g;
  const newString = someString.replace(re, (match, symbol, letter) => {
    // console.log("M: ", match, "S: ", symbol, "L: ", letter);

    return symbol + letter.toUpperCase();
  });
  return newString;
}

module.exports = toTitleCase;
