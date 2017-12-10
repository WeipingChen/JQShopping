$(function(){
	$("#inputSearch").focus(function(){
		$(this).addClass("focus");
		if($(this).val() == this.defaultValue ){
			$(this).val("");
		}
	}).blur(function(){
		$(this).removeClass("focus");
		if($(this).val() == "") {
			$(this).val(this.defaultValue);
		}
	}).keyup(function(event){
		if(event.which == 13) {
			// $(this).submit();
			alert("提交表单!");
		}
	});
});