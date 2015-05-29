describe("findAndReplace", function() {
  it("replaces the word in a string", function() {
    expect(findAndReplace("Hello world", "world", "country")).to.equal("Hello country");
  });
});
