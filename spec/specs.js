describe("findReplace", function() {
  it("user inputs a sentence and the sentence outputs on the page.", function() {
    expect(findReplace("hello world")).to.equal("hello world");
  });

  it("lower cases any upper cased words in the input string", function() {
    expect(findReplace("Hello world")).to.equal("hello world")
  })
});
