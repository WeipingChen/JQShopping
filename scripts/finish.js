$(function(){
	var $product = $("#jnDetails div.jnProDetail");
	$("#cart a").click(function(){
		console.log($("#jnDetails li.color_change img.hover").length);
		if($("#jnDetails li.color_change img.hover").length === 0) {
			alert("请选择颜色！");
			return false;
		}
		if($("#jnDetails li.pro_size li.cur").length === 0) {
			alert("请选择尺寸！");
			return false;
		}
		var pro_name = $product.find("h4:first").text();
		var pro_size = $product.find("li.pro_size strong").text();
		var pro_color = $product.find("li.color_change strong").text();
		var pro_num = $("#num_sort").val();
		var pro_price = $product.find("li.pro_price strong").text();
		var dialog = "感谢您购买。\n您购买的\n" +
					"产品是："+pro_name +";\n" +
					"尺寸是；"+pro_size+";\n"+
					"颜色是："+pro_color+";\n"+
					"数量是："+pro_num+";\n"+
					"总价是："+pro_price+"元";
		alert(dialog);
		return false;
	});
});