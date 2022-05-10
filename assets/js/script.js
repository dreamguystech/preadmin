(function($) {
    "use strict";

    // Sidebar
    
    if($(window).width() <= 991) {
        var Sidemenu = function() {
            this.$menuItem = $('.main-nav a');
        };

        function init() {
            var $this = Sidemenu;
            $('.main-nav a').on('click', function(e) {
                if($(this).parent().hasClass('has-submenu')) {
                    e.preventDefault();
                }
                if(!$(this).hasClass('submenu')) {
                    $('ul', $(this).parents('ul:first')).slideUp(350);
                    $('a', $(this).parents('ul:first')).removeClass('submenu');
                    $(this).next('ul').slideDown(350);
                    $(this).addClass('submenu');
                } else if($(this).hasClass('submenu')) {
                    $(this).removeClass('submenu');
                    $(this).next('ul').slideUp(350);
                }
            });
        }

    // Sidebar Initiate
    init();
    }

    // Mobile menu sidebar overlay
    
    $('body').append('<div class="sidebar-overlay"></div>');
    $(document).on('click', '#mobile_btn', function() {
        $('main-wrapper').toggleClass('slide-nav');
        $('.sidebar-overlay').toggleClass('opened');
        $('html').addClass('menu-opened');
        $('.header').removeClass('navbar-fixed');
        return false;
    });
    
    $(document).on('click', '.sidebar-overlay', function() {
        $('html').removeClass('menu-opened');
        $(this).removeClass('opened');
        $('main-wrapper').removeClass('slide-nav');
    });
    
    $(document).on('click', '#menu_close', function() {
        $('html').removeClass('menu-opened');
        $('.sidebar-overlay').removeClass('opened');
        $('main-wrapper').removeClass('slide-nav');
    });

    // One Page Scrolling 

    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-toggle="tab"]').on('click', function(event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

    // Owl Carousel

    $('#owl-carousel').owlCarousel({
        loop:true,
        margin:5,
        autoplay:true,
        dots:false,
        responsiveClass:true,
        navText : ["<img src='assets/img/arrow-left.png'>","<img src='assets/img/arrow-right.png'>"],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            400:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            800:{
                items:1,
                nav:true
            },
            1000:{
                items:1,
                nav:true,
                loop:true,
                autoplay:true,
                autoplayTimeout:5000
            }
        }
    })

    // Owl Carousel

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:5,
        autoplay:true,
        dots:false,
        responsiveClass:true,
        navText : ["<img class='rotate' src='assets/img/arrow-left.png'>","<img class='rotate' src='assets/img/arrow-right.png'>"],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            400:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            800:{
                items:1,
                nav:true
            },
            1000:{
                items:1,
                nav:true,
                loop:true,
                autoplay:true,
                autoplayTimeout:5000
            }
        }
    })

    // Owl Carousel Testimonials

    var $testimonialsDiv = $('.testimonials');
    if ($testimonialsDiv.length && $.fn.owlCarousel) {
        $testimonialsDiv.owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>']
        });
    }

    var $galleryDiv = $('.img-gallery');
    if ($galleryDiv.length && $.fn.owlCarousel) {
        $galleryDiv.owlCarousel({
            nav: false,
            center: true,
            loop: true,
            autoplay: true,
            dots: true,
            navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            }
        });
    }

})(jQuery); 