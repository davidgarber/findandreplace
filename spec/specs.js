describe("findAndReplace", function() {
  it("replaces the word in a string", function() {
    expect(findAndReplace("Hello world", "world", "country")).to.equal("hello country");
  });

  it("replaces a word regardless of capitalization", function() {
    expect(findAndReplace("Hello WoRlD", "world", "country")).to.equal("hello country");
  });

  // it("returns 'This word is not in this string' if a the word is not in the string", function() {
  //   expect(findAndReplace("Hello world", "city", "country")).to.equal("This word is not in this string.");
  // });
  it("returns original string if a the word is not in the string", function() {
    expect(findAndReplace("Hello world", "city", "country")).to.equal("Hello world");
  });
});
