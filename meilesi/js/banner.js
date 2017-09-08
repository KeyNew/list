 oHtml = document.documentElement;
	getSize();
	window.onresize = function(){
	    getSize();
	};
	function getSize(){
	    var screenWidth = oHtml.clientWidth;
	    if (screenWidth < 320) {
	        oHtml.style.fontSize = '32px';
	    } else if(screenWidth > 768){
	        oHtml.style.fontSize = '76.8px';
	    }else{
	        oHtml.style.fontSize = screenWidth/(768/100) + 'px';
	    }
	}
	
$(function(){
	$(".icon-menu").click(function () {
		if ($(".navbar").is(":hidden")) {
          $(".floatmask").show();
          $(".navbar").css("display", "block");
          $(".icon-caidanyingyong1").css("display", "block");
          $(".icon-menu").css("display", "none");
          $(".navbar ul").stop(true, true).animate({ "right": 0 }, 300);
          $(".navbar ul").addClass('show');
    }         
	});
	$(".icon-caidanyingyong1").click(function(){
		  $(".floatmask").hide();
          $(".icon-menu").css("display", "block");
          $(".icon-caidanyingyong1").css("display", "none");
          $(".navbar ul").stop(true, true).animate({
              "right": '-4rem'
          }, 300, function () {
              $(".navbar").css("display", "none");
              $(".navbar ul").removeClass('show');
          });
	})
	$('.floatmask').click(function(){
		$(".icon-menu").css("display", "block");
        $(".icon-caidanyingyong1").css("display", "none");
	    $(".navbar ul").stop(true, true).animate({
	        "right": '-4rem'
	    }, 300, function () {
	        $(".navbar").css("display", "none");
	        $(".navbar ul").removeClass('show');
	    });
	    $(this).hide();
	});
	
	   var i=0;
	   var timer=null;
	    $('#ol').children().mouseenter(function(){
	        clearInterval(timer);
	        var index=$(this).index();
	        i=index;
	        lbs(i);
	    });
	    function lbs(s){
	        $('#list').children().eq(s).fadeIn(400).siblings('li').fadeOut(400);
	        $('#ol').children().eq(s).addClass('current').siblings('li').removeClass('current');
	    }
	   timer=setInterval(lb,3000);
	    function lb(){
	        i++;
	        if(i==3){
	            i=0;
	        }
	        lbs(i);
	    }
                
	 

});