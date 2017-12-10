$(function(){
	$("#jnBrandTab li a").click(function(){
		$(this).parent().addClass("chos")
			.siblings().removeClass("chos");
		var index = $("#jnBrandTab li a").index(this);
		slideImg(index);
	});
	function slideImg(index) {
		$("#jnBrandList").stop(true, false).animate({
			left: -index * 780,
		}, 1000);
	}
});