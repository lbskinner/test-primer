function toTitleCase(someString) {
  //match the first letter of string, the first letter after a space, "-", and "."
  const regex = /(^|[\s.\-])([a-zA-z])/g;
  const titleCaseString = someString.replace(regex, (match, symbol, letter) => {
    // console.log("M: ", match, "S: ", symbol, "L: ", letter);
    return symbol + letter.toUpperCase();
  });
  return titleCaseString;
}

module.exports = toTitleCase;
