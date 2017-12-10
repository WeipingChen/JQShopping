$(function(){
	$("#jnDetails li.pro_size ul li").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur")
			.parents("ul").siblings("strong").text($(this).text());
	});
	var $price_space = $("#jnDetails li.pro_price strong");
	var price = $price_space.text();
	$("#num_sort").change(function(){
		var total = price * $(this).val();
		$price_space.text(total);	
	}).change();
});