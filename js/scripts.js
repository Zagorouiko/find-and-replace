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
    var word = ($("input#input").val());
    var result = findReplace(word);

    $(".sentence").text(result);
    $("#result").text(result);
    event.preventDefault();
  });
});
