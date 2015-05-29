var normalizePhrase = function(phrase) {
  var word = phrase.toLowerCase().replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ")
  return word
};
var findReplace = function(words, wordReplace, wordReplacement) {
  var phrase = normalizePhrase(words)
  for (var j = 0; j < phrase.length; j++) {
    if (phrase[j] === wordReplace) {
      phrase[j] = wordReplacement;
      var newPhrase = phrase.join(" ")
    }
  }
  return newPhrase
};


$(document).ready(function() {
  $("form#find-replace").submit(function(event) {
    var words = ($("input#string").val());
    var wordReplace = ($("input#replace").val());
    var wordReplacement = ($("input#replacement").val());
    var result = findReplace(words, wordReplace, wordReplacement);
    $(".sentence").text(result);
    $("#result").text(result);
    event.preventDefault();
  });
});
