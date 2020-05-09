/*$("#chose-category").click(function() {
  
  $("#welcome").addClass(hide);

  $("categories").removeClass(hide);
  
}); */

$("#chose-category").click(function() {
  
  $("#welcome").addClass("hide");
  $("#categories").removeClass("hide");
  
});

$(".btn-grid>.no-style").click(function() {
  
  $("#categories").addClass("hide");
  $("#questions").removeClass("hide");
  
});

$("#restart-btn").click(function() {
  
  $("#questions").addClass("hide");
  $("#categories").removeClass("hide");
  
});

$("#again").click(function() {
  
  $("#victory").addClass("hide");
  $("#categories").removeClass("hide");
  
});

/*$("#next-btn").click(function() {
  
  $("#categories").addClass("hide");
  $("#questions").removeClass("hide");
  
}); */

/*

$("#link-index").click(function() {
  
  $("#welcome").removeClass("hide");
  $("categories").css("display", "none");
  $("#questions").css("display", "none");
  $("#victory").css("display", "none");
  $("#link-index").css("display", "none");
  $("#link-categories").removeClass("hide");
  $("link-questions").removeClass("hide");
  $("link-victory").removeClass("hide");
  
});

$("#link-categories").click(function() {
  
  $("#welcome").css("display", "none");
  $("categories").removeClass("hide");
  $("#questions").css("display", "none");
  $("#victory").css("display", "none");
  $("#link-index").removeClass("hide");
  $("#link-categories").css("display", "none");
  $("link-questions").removeClass("hide");
  $("link-victory").removeClass("hide");
  
});

$("#link-questions").click(function() {
  
  $("#welcome").css("display", "none");
  $("categories").css("display", "none");
  $("#questions").removeClass("hide");
  $("#victory").css("display", "none");
  $("#link-index").removeClass("hide");
  $("#link-categories").removeClass("hide");
  $("link-questions").css("display", "none");
  $("link-victory").removeClass("hide");
  
});

$("#link-victory").click(function() {
  
  $("#welcome").addClass("hide");
  $("categories").addClass("hide");
  $("#questions").addClass("hide");
  $("#victory").removeClass("hide");
  $("#link-index").removeClass("hide");
  $("#link-categories").removeClass("hide");
  $("link-questions").removeClass("hide");
  $("link-victory").addClass("hide");
  
}); */