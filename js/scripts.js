var findAndReplace = function(stringSearch, wordContain, wordReplace){
  stringSearch = stringSearch.toLowerCase().replace(wordContain, wordReplace);
  return stringSearch;
};
