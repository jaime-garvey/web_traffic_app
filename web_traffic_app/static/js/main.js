(function($) {

    "use strict";



    // page transitions
    // ==================================================

    if ( $( ".preloader" ).length ) {
        $(window).on('load', function () {
            $( '.preloader .wrap' ).delay(1500).fadeOut(600, function() {
                $('.preloader').slideUp(400);
            });
        })

        $('a').each(function() {
             if ( location.hostname === this.hostname || !this.hostname.length ) {

                var link = $(this).attr("href");
                var attr = $(this).attr('data-lity');

                if ( link.match("^#") ) {

                    $(this).click(function() {
                        var target = $(link);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                        if (target.length) {
                            $('html,body').animate({
                                scrollTop: target.offset().top - 70
                            }, 1000); return false;
                        }
                    });

                } else if ( link.match("^mailto") ) {
                    // Act as normal
                } else if (typeof attr !== typeof undefined && attr !== false) {
                    // Act as normal
                } else {

                    $(this).click(function(e) {
                        e.preventDefault();
                        $('.preloader').slideDown(400);
                        setTimeout(function() {
                                window.location = link;
                        }, 700);

                    });

                }
            }
        });
    }


    // particles.regular
    // ==================================================

    if ( $( "#particles-js" ).length ) {
        particlesJS("particles-js",{
            "particles":{
                "number":{
                    "value":80,"density":{
                        "enable":true,"value_area":800
                    }
                },
                "color":{
                    "value":"#333333"
                },
                "shape":{
                    "type":"circle","stroke":{
                        "width":0,"color":"#000000"
                    },
                    "polygon":{
                        "nb_sides":5
                    },
                    "image":{
                        "src":"img/github.svg","width":100,"height":100
                    }
                },
                "opacity":{
                    "value":0.3,"random":false,"anim":{
                        "enable":false,"speed":1,"opacity_min":0.1,"sync":false
                    }
                },
                "size":{
                    "value":3,"random":true,"anim":{
                        "enable":false,"speed":40,"size_min":0.1,"sync":false
                    }
                },
                "line_linked":{
                    "enable":true,"distance":150,"color":"#333333","opacity":0.2,"width":1
                },
                "move":{
                    "enable":true,"speed":3,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{
                        "enable":false,"rotateX":600,"rotateY":1200
                    }
                }
            },
            "interactivity":{
                "detect_on":"canvas","events":{
                    "onhover":{
                        "enable":false,"mode":"repulse"
                    },
                    "onclick":{
                        "enable":true,"mode":"push"
                    },
                    "resize":true
                },
                "modes":{
                    "grab":{
                        "distance":400,"line_linked":{
                            "opacity":1
                        }
                    },
                    "bubble":{
                        "distance":400,"size":40,"duration":2,"opacity":8,"speed":3
                    },
                    "repulse":{
                        "distance":200,"duration":0.4
                    },
                    "push":{
                        "particles_nb":4
                    },
                    "remove":{
                        "particles_nb":2
                    }
                }
            },
            "retina_detect":true
        });
    }


    // typewriter
    // ==================================================

    if ( $( ".typewrite" ).length ) {
        var TxtType = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtType.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

            var that = this;
            var delta = 200 - Math.random() * 100;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
            }

            setTimeout(function() {
            that.tick();
            }, delta);
        };

        window.onload = function() {
            var elements = document.getElementsByClassName('typewrite');
            for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                  new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
            document.body.appendChild(css);
        };
    }


    // owl.carousels
    // ==================================================

    if ( $( ".single-carousel" ).length ) {
        $('.single-carousel').owlCarousel({
            loop:true,
            nav:false,
            dots:true,
            margin:0,
            mouseDrag:false,
            animateOut: 'fadeOutLeft',
            animateIn: 'fadeInRight',
            autoHeight: true,
            responsive:{0:{items:1}}
        });
    }


    // clients
    // ==================================================

    if ( $( ".clients .image" ).length ) {
        $( '.clients .image' ).hover(
            function() {
                $('.clients .image').toggleClass("hover");
                $(this).removeClass("hover");
            }
        );
    }


    // animated
    // ==================================================

    if ( $( ".animated" ).length ) {
        $('.animated').each(function () {
            $(this).appear(function() {
                $(this).addClass('fadeInUp');
            });
        });
    }


    // mobile nav
    // ==================================================

    if ( $( ".mobile-nav" ).length ) {
        $('.mobile-icon').click(function() {
            $('.mobile-nav').addClass('active');
        });
        $('.mobile-nav i').click(function() {
            $('.mobile-nav').removeClass('active');
        });
    }





})(jQuery);
