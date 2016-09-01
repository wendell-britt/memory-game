$(document).ready(function() {
  $("button").click(function() {
    $("body").addClass("background-grey");
    // $("button").removeClass("button");
    $(".game").show();
    // $(".game").hide();
  });

  $("img").click(function() {
    $("img").attr('src',"img/question.jpg");
    // $(".img-show").toggle();
    // $(".img-hidden").toggle();
  })


});
