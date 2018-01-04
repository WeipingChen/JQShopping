$(function(){
	$("#jnBrandList li").each(function(index) {
		var imgOver = "<span class='imgMask'></span>";
		$(this).children("a").append(imgOver);
	});
	$("#jnBrandList").on('mouseenter','.imgMask',function(){
		$(this).toggleClass("imgOver");
	}).on('mouseleave','.imgMask',function(){
		$(this).toggleClass("imgOver");
	});
	
});