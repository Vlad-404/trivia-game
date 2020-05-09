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


$("#link-index").click(function() {
  
  $("#welcome").removeClass("hide");
  $("categories").addClass("hide");
  $("#questions").addClass("hide");
  $("#victory").addClass("hide");  
});

$("#link-categories").click(function() {
  
  $("#welcome").addClass("hide");
  $("categories").removeClass("hide");
  $("#questions").addClass("hide");
  $("#victory").addClass("hide");
});

$("#link-questions").click(function() {
  
  $("#welcome").addClass("hide");
  $("categories").addClass("hide");
  $("#questions").removeClass("hide");
  $("#victory").addClass("hide");
});

$("#link-victory").click(function() {
  
  $("#welcome").addClass("hide");
  $("categories").addClass("hide");
  $("#questions").addClass("hide");
  $("#victory").removeClass("hide");
});