var findAndReplace = function(stringSearch, wordContain, wordReplace){

  if (stringSearch.toLowerCase().includes(wordContain)) {
  var stringSearchResult = stringSearch.toLowerCase().replace(wordContain, wordReplace);
  return stringSearchResult; } else
  {return stringSearch;}
};

$(document).ready(function() {
  $("form#find-replace").submit(function(event) {
    var string = $("input#string").val();
    var contain = $("input#contain").val();
    var replace = $("input#replace").val();
    var result = findAndReplace(string, contain, replace);

    $("result-wrapper").show();
    $("#result").text(result);
    event.preventDefault();
  });
});
