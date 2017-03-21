var xuanzhong = 0;
var count=0;
var h = $(".TopBar_two").height();
var ftop=$("#footer").offset().top-200;
var ftopy=document.getElementById("footer_end").offsetTop;
$(document).ready(function() {
	$(window).click(function () {
		console.log(ftop);
		console.log(ftopy);
		console.log("window:"+$(window).scrollTop());
	})
	
		$(window).scroll(function() {
			
			if($(window).scrollTop()>h) {
				
				$("#logo_animate").animate({backgroundSize:"0%"},100)
				$(".fixed").fadeIn();
			} else {
				$("#logo_animate").animate({backgroundSize:"100%"},200)
				$(".fixed").fadeOut();
			}
			if($(window).scrollTop()>ftop) {
				$("#footer_text").animate({"top":"130px","opacity":"1"},600);
				$("#footer_text_two").animate({"top":"195px","opacity":"1"},600);
				$("#footer_circle").animate({"top":"250px","opacity":"1"},600);
			} 
		})
		
	 oneItem=$("<a href='http://www.kaola.com/activity/detail/11835.shtml?tag=7cc46fc8c91a33ec9aa62298347b4ede&__da_MmVZMh_zPJ3p1rAsE' >安卓充值9.8折</a>")
	 twoItem=$("<a href='http://you.163.com/act/static/12r9kQ6MHF.html?from=web_rk_game_wz_0' target='_blank'>领取网易严选宝箱</a>")
//		$("#topLunbo").append(oneItem);
//			setInterval(zLunbo,2000);	
	setInterval(xLunbo,3000);
	var bigWidth=$(".BBG").width();
//	console.log(bigWidth)
	$("#qingMing").css("background-image","url(img/qingmin_5e1c3bc.png)").delay(100).animate({"top":"40px","opacity":"1"},1000);
	$("#shenLe").css("background-image","url(img/shenle_77d66bd.png)").animate({"top":"0px","opacity":"1"},1000);
	$("#BanCharacter").delay(200).animate({"top":"65px","opacity":"1"},1000);
	$("#logo_animate").delay(1000).animate({"left":(bigWidth*0.07-70/2)+"px","opacity":"1"},800);
		$("#cal_nineL,#cal_tenL,#cal_elevenL").mouseenter(function () {
//			$(this).css("transform","scale(1.1)")
			scaleUp($(this));
			scaleDown($(this).siblings());
		})
		$("#cal_nineL,#cal_tenL,#cal_elevenL").mouseleave(function () {
			$(this).css("transform","scale(1)")
			$(this).siblings().css("transform","scale(1)")
		})
		$("#footer_btn").mouseenter(function () {
			$("#footer_text_two").animate({"opacity":"0"},500);
			$("#footer_circle").animate({"top":"180px","opacity":"1"},500);
			$("#footer_code").animate({"top":"235px","opacity":"1"},500);
			$("#footer_door").animate({"top":"394px"},500);
		})
		$("#footer_btn").mouseleave(function () {
			$("#footer_text_two").animate({"opacity":"1"},500);
			$("#footer_circle").animate({"top":"250px","opacity":"1"},500);
			$("#footer_code").animate({"top":"245px","opacity":"0"},500);
			$("#footer_door").animate({"top":"344px"},500);
		})
})
//两种垂直轮播
function zLunbo () {
		$("#topLunbo").animate({"top":"-53px"},1000,function () {
			$("#topLunbo").css("top","0px").find("a:first").appendTo("#topLunbo")
		});		
}
function xLunbo () {
	$("#topLunbo").animate({"top":"-35px"},500,function () {
		$("#topLunbo").css({"top":"35px"});
		if (count==0) {
			$("#topLunbo").html(oneItem);
			count=1;
		}else{
			$("#topLunbo").html(twoItem);
			count=0;
		}	
		});
	$("#topLunbo").animate({"top":"0px"},500);	
	
}
function scaleUp (itemO) {
	itemO.css("transform","scale(1.1)")
}
function scaleDown (itemO) {
	itemO.css("transform","scale(0.9)")
}


	//小轮播
$(function() {

	var time;
	$.getJSON("res/ban.json", function(data) {
		$.each(data, function(i, item) {
//			console.log(i)
			$("#strategy_left_banner_main").append("<span><img src='" + item.imgUrl + "'></span>");
		})
	})
	time = setInterval(lunbo, 2000);
	$(".point").click(function() {
		clearInterval(time);
		$("#strategy_left_banner_main").animate({
			"marginLeft": "368px"
		}, 1000, function() {
			$(this).css("margin-left", "0px").find("span:last").prependTo(this);
		});
		if(xuanzhong == 0) {
			$("#BlackPoint_one").css("background-color", "white")
			$("#BlackPoint_two").css("background-color", "black")
			xuanzhong = 1;
		} else {
			$("#BlackPoint_one").css("background-color", "black")
			$("#BlackPoint_two").css("background-color", "white")
			xuanzhong = 0
		}
		time = setInterval(lunbo, 2000);
	});
})

function lunbo() {

	$("#strategy_left_banner_main").animate({
		"marginLeft": "368px"
	}, 1000, function() {
		$(this).css("margin-left", "0px").find("span:last").prependTo(this);
	});
	if(xuanzhong == 0) {
		$("#BlackPoint_one").css("background-color", "white")
		$("#BlackPoint_two").css("background-color", "black")
		xuanzhong = 1;
	} else {
		$("#BlackPoint_one").css("background-color", "black")
		$("#BlackPoint_two").css("background-color", "white")
		xuanzhong = 0
	}
}
//小轮播结束
//式神JSON图片
$(function() {
		$.getJSON("res/SS.json", function(data) {
			$.each(data, function(i, item) {
				$(".SS_list").append("<ul><li><a href='#' class='SS_item'><span class='name'><span class='SS_size'><em>" + item.category + "</em></span></span><img src='" + item.imgUrl + "'></a></li><li><a href='#' class='SS_item'><span class='name_two'><span class='SS_size'><em>" + item.category_two + "</em></span></span><img src='" + item.imgUrl_two + "'></a></li></ul>");
			})
		})
	})
	//式神JSON图片结束
	//视频JSON
$(function() {
		$.getJSON("res/video.json", function(data) {
			$.each(data, function(i, item) {
				$(".video_img").append("<div class='video_list_main'><a href='#' class='video_list'><img src='" + item.imgUrl + "' class='video_img_two' ><p>" + item.depict + "</p></a></div>");
			})
		})
	})
	//视频JSON结束