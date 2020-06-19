const toTitleCase = require("./app");

describe("toTitleCase", () => {
  it("capitalizes the first letter of passed in string", () => {
    const titleCasedString = toTitleCase("hello");
    expect(titleCasedString).toBe("Hello");
  });
});
