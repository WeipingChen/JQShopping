$(function(){

	$("#jnProitem ul.imgList li a").click(function(){
		var imgSrc = $(this).find("img").attr("src");
		var index = imgSrc.lastIndexOf(".");
		var unit = imgSrc.substring(index);
		var imgSrc_big = imgSrc.substring(0,index) + "_big" + unit;
		$("#thickImg").attr("href",imgSrc_big);
	});
});