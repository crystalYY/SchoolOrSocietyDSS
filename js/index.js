$(document).ready(function(){
	var windowHeight=$(window).height();
	$('#mastheadBg').css('height',windowHeight);
	$(window).resize(function(){
		var windowHeight=$(window).height();
		$('#mastheadBg').css('height',windowHeight);
	});
	//问号的动画

	function rotateImg(){
		if(angle<=357){
			angle+=3;
		}else{
			angle=0;
		}
		$("#questionImg").find('img').rotate(angle);
	}
	var angle=0;
	timer=setInterval(rotateImg,30);
	$('#questionImg').find('img').on('mouseenter',function(){
		clearInterval(timer);
	});
	$('#questionImg').find('img').on('mouseout',function(){
		clearInterval(timer);
		timer=setInterval(rotateImg,30);
	});

	//choice button
	$('#choiceBtn').on('mouseover',function(){
		$(this).css('opacity','1');
	});
	$('#choiceBtn').on('mouseout',function(){
		$(this).css('opacity','0.7');
	});

	//systemBase brief
	$('.brief').click(function(){
		var baseIntro=$(this).closest('.col-xs-4').find('.baseIntro');
		if(baseIntro.css('display').toLowerCase()=='none'){
			$(this).rotate(45);
		}else{
			$(this).rotate(0);
		}
		baseIntro.slideToggle();	
	});

	//滚动条滚动到指定位置加载指定内容
	$(window).scroll(function(){
		if($(window).scrollTop()>=$(window).height()/3){
			$('#systemBase1').show(1000);
			$('.brief').fadeIn(2000);
		}

		if($(window).scrollTop()>=$(window).height()*2/3){
			$('#obtainShow').slideDown(1000);
		}	
	});
	console.log($(window).height());
});