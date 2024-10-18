$(document).ready(function($){
		$(".addressf_title a:eq(0)").addClass("on");
		$(".addressf .right_content_li:eq(0)").addClass("on");
		$(".addressf_title a:eq(0)").hover(function(){
			$(".addressf .right_content_li:eq(0)").addClass("on").siblings().removeClass("on");
			$(this).addClass("on").siblings().removeClass("on");
		})
		$(".addressf_title a:eq(1)").hover(function(){
			$(".addressf .right_content_li:eq(1)").addClass("on").siblings().removeClass("on");
			$(this).addClass("on").siblings().removeClass("on");
		})
		$(".addressf_title a:eq(2)").hover(function(){
			$(".addressf .right_content_li:eq(2)").addClass("on").siblings().removeClass("on");
			$(this).addClass("on").siblings().removeClass("on");
		})
		
		
		
		$(".click_nav").mousemove(function(){
			$(".nav_down").addClass("on");
		})
		$(".nav_down_close").click(function(){
			$(".nav_down").removeClass("on");
		})
		$(".nav_down").mouseleave(function(){
			$(".nav_down").removeClass("on");
		})
		


        $('.ClickTop').click(function () {
            $('html,body').animate({scrollTop:0 },800);
        });
		

        $('.Header2023_right_btn').click(function () {
            $(".pc_top_down").toggleClass("active")
        });
		


//手机端禁止滑动屏幕
    function touchmove(){//自定义函数
    $("body").on("touchmove",function(event){
		event.preventDefault;
		}, false)
			
	}
	
	 function touchmove2(){//自定义函数
	 $("body").off("touchmove");
	}
	var flag=true;
	$('.cd-nav-trigger').on('click', function () {
		 if(flag){
			 flag=false;
			 touchmove();
		 } else{
			 flag=true;
			 touchmove2();
		 }
	 });
	
	
//手机端导航	
			function responsive() {
				if($(window).width() <= 1200){
					console.log('mobile navigation');

					$('#mo_nav').infinitypush();

					$('body').removeClass('desktop');
				} else {
					console.log('desktop navigation');

					$('#mo_nav').infinitypush({
						destroy:true
					});

					$('body').addClass('desktop');
				}
			}
			function windowResize(){
				$(window).resize(function(){
					responsive();
				});
			}
			responsive();
			windowResize();



	var isLateralNavAnimating = false;
	
	//open/close lateral navigation
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			$('body').toggleClass('navigation-is-open');
			$('.ma-infinitypush-wrapper').toggleClass('on');
			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});
});





(function($){
    var mainWit = $(window).width(),
        mainHit = $(window).height(),
        header = $("header"),
        headerHeight = $("header").height(),
        navBarWrap = $(".navBarWrap"),
        navBar = $('.navBar'),
        navBarBtn = $(".bar-menu"),
        closeBar = $('.fixed-menu .close-bar'),
        munPhone = $('.fixed-menu .sub-menu-phone'),
        bodsBg = $('.body-bg'),
        fixedBar = $('.fixed-menu'),
        jsContainer = $(".js-container"),
        backToTop = $(".back-to-top"),
        mouseClick = $(".carousel-scroll-btn"),
        carouselBar = $(".page-header-bar"),
        dataBackground = $(".data-background "),
        fixedContact = $(".fixed-contact-wrap");
    setTimeout(function(){carouselBar.removeClass("active")},1200)
    backToTop.click(function(){
        $('html,body').animate({
            scrollTop:0
        },500);
    });
    mouseClick.click(function() {
        $(this).parents(".page-header-bar").addClass("active");
        $('html,body').animate({
            scrollTop: mainHit
        }, 500);
    });
    if( mainWit > 992){
        navBar.hover(function(){
            if(fixedBar.hasClass("active")){
                fixedBar.removeClass("on");
            }else{
                fixedBar.addClass("on");
            };
            if(jsContainer.hasClass("active")){
                jsContainer.removeClass("on");
            }else{
                jsContainer.addClass("on");
            };
        },function(){
            fixedBar.removeClass("on");
            jsContainer.removeClass('on');
        })
    }
    navBarBtn.click(function() {
        navBar.toggleClass('show');
        fixedBar.removeClass('on').toggleClass('active');
        bodsBg.toggleClass('active');
        munPhone.addClass('active');
        jsContainer.removeClass('on').toggleClass("active");
    })
    closeBar.click(function() {
        fixedBar.removeClass('active');
        bodsBg.removeClass('active');
        munPhone.removeClass('active');
        navBar.toggleClass('show');
        jsContainer.removeClass("active");
    })
    bodsBg.click(function() {
        $(this).removeClass('active');
        fixedBar.removeClass('active');
        munPhone.removeClass('active');
        navBar.toggleClass('show');
        jsContainer.removeClass("active");
    })
    if($(window).width() < 992) {
        navBar.removeClass('visble');
    }

    //index-banner
    $.fn.indexBannerScroll = function(options){
        var opts = $.extend({}, $.fn.indexBannerScroll.defaults,options);
        return this.each(function(){
            var $this = $(this),
                carouselItemLi = $this.find(".carousel-item"),
                carouselLength = carouselItemLi.length -1,
                currentIndex = 0,
                bannerLeft = $this.find(".carousel-controls .left"),
                bannerRight = $this.find(".carousel-controls .right"),
                cur = $this.find(".carousel-controls .count span.current"),
                tot = $this.find(".carousel-controls .count span.total"),
                speed = opts.speed,
                timer = null;
            $this.find(".carousel-item:first-child").addClass("active");
            tot.html("0" + (carouselLength + 1));
            function bannerScroll(){
                carouselItemLi.eq(currentIndex).addClass("active").siblings().removeClass("active");
            }
            bannerLeft.click(function() {
                currentIndex--;
                currentIndex = currentIndex < 0 ? carouselLength : currentIndex;
                bannerScroll();
                cur.html("0" + (currentIndex + 1));
            });
            bannerRight.click(function() {
                currentIndex++;
                currentIndex = currentIndex > carouselLength ? 0 : currentIndex;
                bannerScroll();
                cur.html("0" + (currentIndex + 1));
            });
            var timer = setInterval(function() {
                bannerRight.click();
            }, speed);
        })
    }
    $.fn.indexBannerScroll.defaults={
        speed:9000
    }
    $(".index-banner").indexBannerScroll({
        speed:9000
    })
    
    //index-work
    $.fn.pictureScroll = function(){
        return this.each(function(){
            var $this = $(this),
                p = $this.find(".work-buttons .work-button a.prev"),
                l = $this.find(".work-buttons .work-button a.next"),
                g = $this.find(".swiper-slide-image-wrap:first-child .swiper-slide-image"),
                k = $this.find(".swiper-slide-text-scroll .swiper-slide-text-each"),
                g1 = $this.find(".swiper-slide-image-wrap .swiper-slide-image:first-child"),
                k1 = $this.find(".swiper-slide-text-scroll .swiper-slide-text-each:first-child"),
                q = $this.find(".work-buttons .work-button .prograss-bar .lines").width(),
                d = $this.find(".work-buttons .work-button .prograss-bar .lines .nline"),
                m = $this.find(".work-buttons .work-button .count span.current"),
                r = $this.find(".work-buttons .work-button .count span.total"),
                c = g.length - 1,
                n = k.length - 1,
                a = 0,
                b = 0,
                e = q / (c + 1),
                timer = null;
            g1.addClass("active");
            k1.addClass("active");
            function f() {
                g.eq(a).addClass("active").siblings().removeClass("active");
            }
            function h() {
                k.eq(b).addClass("active").siblings().removeClass("active");
            }
            d.width(e);
            r.html("0" + (c + 1));
            p.click(function () {
                clearInterval(timer);
                a--;
                b--;
                a = 0 > a ? c : a;
                b = 0 > b ? n : b;
                f();
                h();
                d.css({
                    left: e * a
                });
                m.html("0" + (a + 1))
            });
            l.click(function () {
                a++;
                b++;
                a = a > c ? 0 : a;
                b = b > n ? 0 : b;
                f();
                h();
                m.html("0" + (a + 1));
                d.css({
                    left: e * a
                })
            });
            var timer = setInterval(function () {
                l.click()
            }, 6000)
        })
    }
    $(".index-work").pictureScroll();
    $(".ourwork-mobile-images-scroll").pictureScroll();
    
    //公用滚动函数
    if($(window).width() > 992){
        var footerTop = $("footer").offset().top;
        if ($(this).scrollTop() > mainHit/2 && $(window).width() > 992 ){navBar.removeClass('visble');}else{navBar.addClass('visble');}
        if ($(this).scrollTop() > mainHit/2 ){
            carouselBar.addClass("active");
            fixedContact.addClass("show");
        } else {
            carouselBar.removeClass("active");
            fixedContact.removeClass("show");
        }
        if ($(this).scrollTop() > headerHeight ){
            header.addClass("active");
        } else {
            header.removeClass("active");
        }
        if (($(window).scrollTop() + window.screen.availHeight-$(window).height()/2) > footerTop){
            navBar.addClass("black");
            fixedContact.addClass("black");
        } else {
            navBar.removeClass("black");
            fixedContact.removeClass("black");
        }
    }
    $(window).resize(function() {
        if($(window).width() < 992) {
            navBar.removeClass('visble');
        }
        $(".index-data .wrap").height(dataBackground.height());
    });
    $(window).scroll(function() {
        if($(window).width() > 992){
            var footerTop = $("footer").offset().top;
            if ($(this).scrollTop() > mainHit/2 && $(window).width() > 992 ){
                navBar.removeClass('visble');
            } else {
                navBar.addClass('visble');
            }
            if ($(this).scrollTop() > mainHit/2 ){
                carouselBar.addClass("active");
                fixedContact.addClass("show");
            } else {
                carouselBar.removeClass("active");
                fixedContact.removeClass("show");
            }
            if ($(this).scrollTop() > headerHeight ){
                header.addClass("active");
            } else {
                header.removeClass("active");
            }
            if (($(window).scrollTop() + window.screen.availHeight-$(window).height()/2) > footerTop){
                navBar.addClass("black");
                fixedContact.addClass("black");
            } else {
                navBar.removeClass("black");
                fixedContact.removeClass("black");
            }
        }
    });
    $(".inner-banner").addClass("active");
})(jQuery);