$(document).ready(function() {

  $("#show-animal-pic").click(function() {
    $("#hide-photo").toggle(function() {
    });
  });

  $("#hide-photo").click(function() {
    $("#hide-photo").after("<p>Woof woof!</p>");
  });

});