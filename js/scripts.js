$(document).ready(function() {
  $("form#loveFinder").submit(function(event) {
    const age = parseInt($("input#validationCustom02").val());
    const gender = $("select#gender").val();
    const favcolor =$("input#validationCustom03").val();

    let match = 1;
    if (age) {
      if (gender === 'male' && age < 21) {
        match += 1;
      } else if (favcolor === "blue") {
        match += 2;
      } else if (favcolor === "red") {
        match += 3;
      }
    $("#love").text(match);
    $("#match").show();

    event.preventDefault();
    }
  });
});