var findAndReplace = function(stringSearch, wordContain, wordReplace){
  stringSearch = stringSearch.toLowerCase().replace(wordContain, wordReplace);
  return stringSearch;
};

$(document).ready(function() {
  $("form#find-replace").submit(function(event) {
    var string = $("input#string").val();
    var contain = $("input#contain").val();
    var replace = $("input#replace").val();
    var result = findAndReplace(contain, replace);

    $("#contain").text(contain);
    if (!contain) {
      $(".not").text("not");
    }

    $("result-wrapper").show();
    $("#result").text(result);
    event.preventDefault();
  });
});
