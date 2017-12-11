 var swiperv = new Swiper('.swiper-container-v', {
   	pagination: '.cm-pagination',
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    mousewheelControl: true,
    simulateTouch:false,
    roundLengths : true, 
    setWrapperSize :true,
    paginationBulletRender: function (index, className) {
		switch (index) {
		  case 0: name='品牌与tt活动';break;
		  case 1: name='生活与方式';break;
		  case 2: name='我的四维';break;
		  case 3: name='线下体验';break;
		  case 4: name='工作机会&商务合作';break;
		  default: name='';
		}
		 return '<span class="' + className + '">' + name + '</span>';
	},
	onSlideNextStart: function(swiper){
		$('header').removeClass('fadeInDown').addClass('fadeOutUp');
   },
   onSlidePrevStart: function(swiper){
      $('header').removeClass('fadeOutUp').addClass('fadeInDown');
   },
   onSlidePrevEnd:function(swiper){
		if(swiper.activeIndex == 1){
			swiper.slideTo(0,1000,false);
			swiper2v.slideTo(0,1000,false);
		}
   		
   }
});

var swiperh = new Swiper('.swiper-container-h', {
    paginationClickable: true,
    pagination: '.cm-pagination-h',
    direction: 'horizontal',
    effect : 'fade',
    slidesPerView: 1,
    paginationClickable: true
});

var swiper2v = new Swiper('.swiper-container-2v', {
	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    swiperAnimateCache(swiper); //隐藏动画元素 
	    swiperAnimate(swiper); //初始化完成开始动画
	  }, 
    pagination: '.swiper-pagination-2v',
    paginationClickable: true,
    direction: 'vertical',
    slidesPerView: 1,
    mousewheelControl: true,
    mousewheelReleaseOnEdges:true,
    onSlideChangeEnd: function(swiper){ 
	   swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	 }, 
	onSlideChangeStart:function(swiper){
		swiperv.disableMousewheelControl();
	},
	onSlideNextEnd: function(swiper){
     	if(swiper.isEnd){
     		swiperv.enableMousewheelControl();
     	}
   },
   onSlidePrevEnd : function(swiper){
   		if(swiper.isBeginning){
     		swiperv.enableMousewheelControl();
     	}
   },
   onSlideNextStart: function(swiper){
	   $('header').removeClass('fadeInDown').addClass('fadeOutUp');
   },
   onSlidePrevStart: function(swiper){
       $('header').removeClass('fadeOutUp').addClass('fadeInDown');
    }
});

var swiper2h = new Swiper('.swiper-container-2h', {
	effect : 'coverflow',
	slidesPerView: 2,
	centeredSlides: true,
	coverflow: {
        rotate: 50,
        stretch: -300,
        depth: 0,
        modifier: 1,
        slideShadows : false
   },
	prevButton:'.swiper-button-prev',
	nextButton:'.swiper-button-next',
});
$(function(){
	$('.cm-qr-img').click(function(){
		$('.cm-qr').removeClass('cm-active');
	});
	$('.cm-qr-colse').click(function(){
		$('.cm-qr').addClass('cm-active');
	});
	$('.cm-faq-question').on('mousemove','li',function(){
		$(this).siblings().removeClass('cm-active');
		$(this).addClass('cm-active');
		$('.cm-faq-answer li').eq($(this).index()).addClass('cm-active');
		$('.cm-faq-answer li').eq($(this).index()).siblings().removeClass('cm-active');
	});
	$('.cm-focus-weixin').click(function(){
		$('.cm-qr-weixin').toggleClass('cm-active');
	});
	$('main').click(function(){
		$('.cm-qr-weixin').removeClass('cm-active');
	});
});