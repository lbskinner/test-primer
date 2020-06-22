function toTitleCase(someString) {
  //   const words = someString.split(" ");

  //   const titleCasedWords = [];
  //   words.forEach((str) => {
  //     titleCasedWords.push(str[0].toUpperCase() + str.substring(1));
  //   });
  //   return titleCasedWords.join(" ");
  const re = /(^|[\s-])([a-zA-z])/g;
  const newString = someString.replace(re, (match, symbol, letter) => {
    console.log("S: ", symbol, "L: ", letter, "M: ", match);

    return symbol + letter.toUpperCase();
  });
  return newString;
}

module.exports = toTitleCase;
