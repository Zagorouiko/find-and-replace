describe("findReplace", function() {
  it("it replaces a single word for another word.", function() {
    expect(findReplace("cat")).to.equal("dog");
  });
});
