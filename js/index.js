$(document).ready(function(){
	//初始化背景图大小
	var mastheadHeight=$('#assitImg').css('height');
	mastheadHeight=parseInt(mastheadHeight);
	mastheadHeight+=7;
	console.log(mastheadHeight);
	$('.masthead').css('height',mastheadHeight+'px');
	//背景图随屏幕大小改变
	$(window).resize(function(){
		var mastheadHeight=$('#assitImg').css('height');
		mastheadHeight=parseInt(mastheadHeight);
		mastheadHeight+=7;
		$('.masthead').css('height',mastheadHeight);
		console.log(typeof(mastheadHeight)+mastheadHeight);
	});
	
});