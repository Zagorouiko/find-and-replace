var normalizeWord = function(word) {
  var word = word.toLowerCase().replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  return word
}

$(document).ready(function() {
  $("form#find-replace").submit(function(event) {
    var word = ($("input#input").val());
    var result = findReplace(word);

    $(".sentence").text(result);
    $("#result").text(result);
    event.preventDefault();
  });
});
