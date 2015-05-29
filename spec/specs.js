describe("normalizePhrase", function() {
  it("input string is lowercased, split into an array, and punctuation is removed", function() {
    expect(normalizePhrase("HELLO,.,., world")).to.equal(["hello", "world"]);
  });
});

  describe("findReplace", function() {
    it("user inputs a string, a word to replace, and the replacement word, and it outputs the changed string", function() {
      expect(findReplace("hello world", "world", "universe")).to.equal("hello universe");
    });
});
