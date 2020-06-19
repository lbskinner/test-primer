function toTitleCase(someString) {
  const words = someString.split(" ");

  const titleCasedWords = [];
  words.forEach((str) => {
    titleCasedWords.push(str[0].toUpperCase() + str.substring(1));
  });
  return titleCasedWords.join(" ");
}

module.exports = toTitleCase;
