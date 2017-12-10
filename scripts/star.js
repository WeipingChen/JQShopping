$(function(){
	$("#jnDetails ul.rating li a").click(function(){
		var className = $(this).parent().attr("class");
		$(this).parent().parent().removeClass()
			.addClass("rating " + className +"star");
		return false;
	});
});
