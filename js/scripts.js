var findAndReplace = function(stringSearch, wordContain, wordReplace){

  if (stringSearch.toLowerCase().includes(wordContain)) {
  stringSearch = stringSearch.toLowerCase().replace(wordContain, wordReplace);
  return stringSearch; } else
  {return "does not exist";}
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
