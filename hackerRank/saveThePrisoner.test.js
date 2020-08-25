const saveThePrisoner = require("./saveThePrisoner");
const testData = require("./testData");
const testAnswers = require("./testAnswers");

const testValues = testData.split("\n").map((values) => {
  return values.split(" ").map(Number);
});

const expectedAnswers = testAnswers.split("\n").map(Number);

describe("saveThePrisoner", () => {
  testValues.forEach((valueArr, index) => {
    const [first, second, third] = valueArr;
    const expectedAnswer = expectedAnswers[index];
    it(`When ${first}, ${second}, ${third} are inputs, returns ${expectedAnswer}`, () => {
      const result = saveThePrisoner(first, second, third);
      expect(result).toBe(expectedAnswers[index]);
    });
  });
});
