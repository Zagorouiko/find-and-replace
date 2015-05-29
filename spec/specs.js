describe("normalizePhrase", function() {
  it("user inputs a sentence and the sentence outputs on the page.", function() {
    expect(normalizePhrase("hello world")).to.equal(["hello", "world"]);
  });
});
