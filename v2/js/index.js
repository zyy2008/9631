$(function(){
//	var bescroll = $(document).scrollTop();
	var prevTop = 0,currTop = 0;
	$('.cm-wrapper1').css('height',document.body.clientHeight);
	$(window).resize(function(){
		$('.cm-wrapper1').css('height',document.body.clientHeight);
	});
	$('.swiper-container-1').swiper({
		pagination: '.swiper-container-1 .swiper-pagination'
	});
	$('.swiper-container-2').swiper({
		pagination: '.swiper-container-2 .swiper-pagination',
		direction:'vertical',
		paginationClickable: true
	});
	$('.cm-faq-question').on('mousemove','li',function(){
		$(this).siblings().removeClass('cm-active');
		$(this).addClass('cm-active');
		$('.cm-faq-answer li').eq($(this).index()).addClass('cm-active');
		$('.cm-faq-answer li').eq($(this).index()).siblings().removeClass('cm-active');
	});
	$(window).scroll(function(event) {
		$(".swiper-container-1").css('-webkit-transform', 'translateY('+0.5*$(window).scrollTop()+'px)');
		$(".cm-text").css('-webkit-transform', 'translateY('+-0.1*$(window).scrollTop()+'px)');
	});
	//$(window).scroll(function(e){
	//	currTop = $(window).scrollTop();
	//	if (currTop < prevTop) {//判断小于则为向上滚动
	//		var style = window.getComputedStyle($('.cm-wrapper1').get(0));
     //       var matrix = new WebKitCSSMatrix(style.webkitTransform);
     //       var transY = parseInt(matrix.m42);//translateY的值
     //       transY += 1;
     //       $('.cm-wrapper1').css('-webkit-transform','translateY('+transY+'px)');
	//	}else{
	//		var style = window.getComputedStyle($('.cm-wrapper1').get(0));
     //       var matrix = new WebKitCSSMatrix(style.webkitTransform);
     //       var transY = parseInt(matrix.m42);//translateY的值
     //       transY -= 1;
     //       $('.cm-wrapper1').css('-webkit-transform','translateY('+transY+'px)');
	//	}
	//	 //prevTop = currTop; //IE下有BUG，所以用以下方式
     //    setTimeout(function(){prevTop = currTop},0);
	//})


});