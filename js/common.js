//smartRollover.js
function smartRollover() {
	if(document.getElementsByTagName) {
		var images = document.getElementsByTagName("img");

		for(var i=0; i < images.length; i++) {
			if(images[i].src.match("_off."))
			{
				images[i].onmouseover = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
				}
				images[i].onmouseout = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
				}
			}
		}
	}
}

if(window.addEventListener) {
	window.addEventListener("load", smartRollover, false);
}
else if(window.attachEvent) {
	window.attachEvent("onload", smartRollover);
}

$(function() {
	//set auto width or height for img

	$('.to_top').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 800);
		return false;
	});

  equalheight = function(container){

	var currentTallest = 0,
			 currentRowStart = 0,
			 rowDivs = new Array(),
			 $el,
			 topPosition = 0;
	 $(container).each(function() {

		 $el = $(this);
		 $($el).height('auto')
		 topPostion = $el.position().top;

		 if (currentRowStart != topPostion) {
			 for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
				 rowDivs[currentDiv].height(currentTallest);
			 }
			 rowDivs.length = 0; // empty the array
			 currentRowStart = topPostion;
			 currentTallest = $el.height();
			 rowDivs.push($el);
		 } else {
			 rowDivs.push($el);
			 currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
		}
		 for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
			 rowDivs[currentDiv].height(currentTallest);
		 }
	 });
	}

	$(window).load(function() {
		equalheight('.top03 ul li .info');
	});

	$(window).resize(function(){
		equalheight('.top03 ul li .info');
	});

  $(window).load(function() {
		equalheight('#com01 ul li');
	});

	$(window).resize(function(){
		equalheight('#com01 ul li');
	});


  $(window).load(function() {
  	var f = $('#footer').height();
  	var pageup = $('.to_top');
  	var pageup_show_yn = 1;
  	var pageup_state = 2;
  	var d_h;
  	$(window).scroll(function () {
  			if ($(window).scrollTop() > 300) {
  					if (pageup_show_yn != 1) {
  							pageup.clearQueue().stop().animate({ 'opacity': '1' }, 500);
  							pageup_show_yn = 1;
  					}
  			}
  			else {
  					if (pageup_show_yn != 0) {
  							pageup.clearQueue().stop().animate({ 'opacity': '0' }, 500);
  							pageup_show_yn = 0;
  					}
  			}

  			var t_d_h = d_h - $(window).height();
  			if ($(window).scrollTop() > t_d_h) {
  					var t_v = $(window).scrollTop() - t_d_h;
  					$('.page_top_cont').css('bottom', t_v + 'px');
  					pageup_state = 1;
  			}
  			else {
  					if (pageup_state != 0) {
  							$('.page_top_cont').css('bottom', '20px');
  							pageup_state = 0;
  					}
  			}
  	});
  	setTimeout(function () {
  			pageup_show_yn = 2;
  			d_h = $(document).height() - 300;
  			$(window).scroll();
  	}, 500);
  });

});
