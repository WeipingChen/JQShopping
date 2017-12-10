
$(function(){
	var x = 10;
	var y = 20;
	$(".tooltip").mouseover(function(e){
		this.myTitle = this.title;
		this.title = "";
		$("body").append("<div id='tooltip'>" + this.myTitle + "</div>");
		$("#tooltip").css({
			top: e.pageY + y + "px",
			left: e.pageX + x +  "px",
			}).show("fast");
	}).mouseout(function(){
		this.title = this.myTitle;
		$("#tooltip").remove();
	}).mousemove(function(e){
		$("#tooltip").css({
			top: e.pageY + y + "px",
			left: e.pageX + x + "px",
			});
	});
});