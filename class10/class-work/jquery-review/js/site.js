$("#box1,#box2").css({"background-color":"yellow"});
$("#box1, #box2").text("This text was added with JQuery!");
$("#box1").click(function() {
	$(this).css({"width":"+=100px", "height":"+=100px"})
});
$("#box2").click(function() {
	$(this).css({"width":"+=100px", "height":"+=100px"})
});