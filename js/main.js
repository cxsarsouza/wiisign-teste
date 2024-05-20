jQuery(document).ready(function ($) {
    "use strict";

    // Preloader
    $(window).on('load', function () {
        $('#preloader').delay(2500).fadeOut('slow');
        $('body').delay(2500).css({
            'overflow': 'visible'
        });
    });

    // Sticky Navbar Navigation
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".stick").addClass("sticky");
        } else {
            $(".stick").removeClass("sticky");
        }
    });

    $("#navbarSupportedContent a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {
                window.location.hash = hash;
            });
        }
    });

    var topLimit = 200,
        ultimateOffset = 100;

    $(".navbar-nav").each(function () {
        var r = $(this),
            i = r.parent(),
            a = null,
            f = r.find("a");
        $(window).on("scroll", function () {
            var t = window.scrollY,
                e = r.outerHeight(),
                t = (i.offset().top, i.outerHeight(), ultimateOffset, function (t) {
                    var e = f.first();
                    if (t < topLimit) return e;
                    for (var r = 0; r < f.length; r++) {
                        var i = f.eq(r),
                            a = i.attr("href");
                        if ("#" === a.charAt(0) && 1 < a.length) {
                            a = $(a).first();
                            if (0 < a.length) {
                                if (t < a.offset().top - ultimateOffset) return e;
                                e = i
                            }
                        }
                    }
                    return e
                }(t));
            a !== t && (r.find(".active").removeClass("active"), t.addClass("active"), a = t)
        })
    });

    // Navbar Mobile
    $(".navbar-nav a").on('click', function () {
        $(".offcanvas-collapse").removeClass("show");
    });

    // Magnific Popup
    $('.about , .sec3 .icon').magnificPopup({
        delegate: 'a',
        type: 'iframe'
    });

    // Swiper Portfolio
    var swiper = new Swiper('.swiper-team', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            200: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1000: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });

    // Swiper Portfolio
    var swiper = new Swiper('.swiper-testimonial', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            200: {
                slidesPerView: 1,
            }
        },
    });

    // Counter JS
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Google Map
    var map = new GMaps({
        el: '#map',
        lat: -12.043333,
        lng: -77.028333
    });

});