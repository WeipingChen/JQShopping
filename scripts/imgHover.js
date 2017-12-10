$(function(){
	$("#jnBrandList li").each(function(index) {
		var $img = $(this).find("img");
		var img_width = $img.width();
		var img_height = $img.height();
		var imgOver = "<span class='imgMask' style='width:"+img_width+"px;height:"+img_height+ "px;position:absolute; left:5px; top:0;'></span>";
		$(this).find("a").append(imgOver);
	});
	$("#jnBrandList .imgMask").hover(function(){
		$(this).toggleClass("imgOver");
	});
	
});