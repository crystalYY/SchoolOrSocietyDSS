$(document).ready(function(){
	var mastheadHeight=$('#assitImg').css('height');
	$('.masthead').css('height',mastheadHeight);
	//背景图随屏幕大小改变
	$(window).resize(function(){
		var mastheadHeight=$('#assitImg').css('height');
		$('.masthead').css('height',mastheadHeight);
	});
	
});