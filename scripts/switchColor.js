$(function(){

	$("#jnDetails li.color_change ul li img").click(function(){
		$(this).addClass("hover").parent()
			.siblings().find("img").removeClass("hover")
			.parents("li.color_change").find("strong").html($(this).attr("alt"));


		var imgSrc = $(this).attr("src");
		var index = imgSrc.lastIndexOf(".");
		var unit = imgSrc.substring(index);
		imgSrc = imgSrc.substring(0,index);

		var imgSrc_big = imgSrc + "_one_big" + unit;
		$("#thickImg").attr("href",imgSrc_big);							//更换点击大图链接
		var imgSrc_small = imgSrc + "_one_small" + unit;			
		$("#jnProitem div.zoomPad>img").attr("src",imgSrc_small);		//更换显示图链接
		var color = imgSrc.replace("images/pro_img/","");			
		$("#jnProitem ul.imgList li").hide()							//隐藏缩略图
			.filter(".imgList_" + color).show();
		console.log($("#jnProitem ul.imgList li.imgList_" + color));	//显示颜色当前缩略图
		$("#jnProitem ul.imgList li.imgList_" + color)					
			.eq(0).find("a").click();									//触发点击事件，更换放大镜图片
	});
});