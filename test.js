const toTitleCase = require("./app");

describe("toTitleCase", () => {
  it("capitalizes the first letter of passed in string", () => {
    const titleCasedString = toTitleCase("hello");
    expect(titleCasedString).toBe("Hello");
  });

  it("capitalizes the first letter of each word in string", () => {
    const titleCasedString = toTitleCase("hello world");
    expect(titleCasedString).toBe("Hello World");
  });

  it("correctly title cases hyphenated words", () => {
    const titleCasedString = toTitleCase("raleigh-durham");
    expect(titleCasedString).toBe("Raleigh-Durham");
  });

  it("correctly title cases letters after dots", () => {
    const titleCasedString = toTitleCase("washington d.c.");
    expect(titleCasedString).toBe("Washington D.C.");
  });

  it("correctly takes numbers as input", () => {
    const titleCasedString = toTitleCase(123);
    expect(titleCasedString).toBe("123");
  });

  it("correctly takes null as input", () => {
    const titleCasedString = toTitleCase(null);
    expect(titleCasedString).toBe("");
  });

  it("correctly takes undefined as input", () => {
    const titleCasedString = toTitleCase(undefined);
    expect(titleCasedString).toBe("");
  });

  it("correctly takes empty string as input", () => {
    const titleCasedString = toTitleCase("");
    expect(titleCasedString).toBe("");
  });
});
