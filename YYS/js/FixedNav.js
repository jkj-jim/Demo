$(document).ready(function(){ 
	$(window).scroll(function(){
		var h=$(".container_one").offset().top;
			if($(window).scrollTop()>h){
				$(".fixed").fadeIn();
					}else{
				$(".fixed").fadeOut();
				}
			})
		})
//小轮播
//			$(function() {
//				$('.BlackPoint_one').hover(function() {prev()});
//				$('.BlackPoint_two').hover(function() {next()});
//				var auto;
//				auto = setInterval("next()", 1000);
//				$('.strategy_left_banner_main').mouseenter(function() {
//					clearInterval(auto)
//				}).mouseleave(function() {
//					auto = setInterval("next()", 1000)
//				})
//			})
//			function prev() {
//				var index = $('.strategy_left_banner_main span[class="bn_one]').index();
//				if(index == 0) { index = 1 } else {index--};
//				$('.strategy_left_banner_main span').eq(index).fadeIn(1000)
//					.addClass('bn_one').siblings().fadeOut(1000).removeClass('bn_one')
//			};
//			function next() {
//				var index = $('.strategy_left_banner_main span[class="bn_one]').index();
//				if(index == 1) {index = 0 } else {index++};
//				$('.strategy_left_banner_main span').eq(index).fadeIn(1000)
//					.addClass('bn_one').siblings().fadeOut(1000).removeClass('bn_one')
//			};
//小轮播结束