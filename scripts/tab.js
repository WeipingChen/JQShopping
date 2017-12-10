$(function(){
	$div_li = $("#jnProitem div.tab_menu li");	
	$div_li.click(function(){
		$(this).addClass("selected")					//高亮当前元素
			.siblings().removeClass("selected");		//移除同辈元素的高亮
		var index = $div_li.index(this);				//获取当前元素在全部元素中的索引
		$("#jnProitem div.tab_box>div").eq(index).show()//显示索引对应的div节点
			.siblings().hide();							//隐藏其他同辈节点
	}).hover(function(){
		$(this).toggleClass("hover");
	});
});