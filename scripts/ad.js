$(function(){
	var index = 0;
	var adTimer = null;
	var $imgRoll = $("#jnImageroll div a");
	$imgRoll.mouseover(function(){
		index = $("#jnImageroll div a").index(this);
		showImg(index);
	}).eq(0).mouseover();

	$("#jnImageroll").hover(function(){
		//鼠标移入时停止自动轮播
		clearInterval(adTimer);
	}, function(){
		clearInterval(adTimer);
		// 自动轮播广告图
		adTimer = setInterval(function(){
			index ++;
			index %= $imgRoll.length;
			showImg(index);
		}, 5000);
	}).trigger("mouseleave");

});	
//切换图片
function showImg(index) {
	var $curChos = $("#jnImageroll div a").eq(index);
	$("#JS_imgWrap").attr("href", $curChos.attr("href"))
		.find("img").eq(index).stop(true,true).fadeIn()
		.siblings().fadeOut();
	$curChos.addClass("chos").css("opacity","1")
		.siblings().removeClass("chos").css("opacity", "0.7");
}