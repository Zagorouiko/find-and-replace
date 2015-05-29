describe("normalizeWord", function() {
  it("user inputs a sentence and the sentence outputs on the page.", function() {
    expect(normalizeWord("hello world")).to.equal("hello world");
  });

  it("lower cases any upper cased words in the input string", function() {
    expect(normalizeWord("Hello world")).to.equal("hello world");
  });

  it("removes any punctuation for the user input", function() {
    expect(normalizeWord("hello,. world")).to.equal("hello world");
  });
});

describe("findReplace", function () {
  it("puts the input into an array seperated by the words.", function() {
    expect(findReplace("hello world")).to.equal(["hello", "world"]);
  });
});
