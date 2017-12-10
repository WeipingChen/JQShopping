$(function(){
	$("#skin li").click(function(){
		switchSkin(this.id);
	});
	var cookie_skin = $.cookie("MyCssSkin");
	// console.log(cookie_skin);
	if(cookie_skin) {
		switchSkin(cookie_skin);
	}
});

function switchSkin(skinName) {
	$("#"+skinName).addClass("selected").siblings().removeClass("selected");
	$("#cssfile").attr("href", "styles/" + skinName + ".css");
	$.cookie("MyCssSkin", skinName, {path: "/", expries: 10});
	
}