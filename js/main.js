$(function(){
    $('.doctors__boxes').slick({
        arrows: false,
        slidesToShow: 3,
        infinite: true,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                slidesToShow: 1,
                infinite: false,
                }
            }
        ]
    })
    $('.reviews__slider-prev').on('click', function(e) {
        e.preventDefault()
        $('.doctors__boxes').slick('slickPrev')
    })
    $('.reviews__slider-next').on('click', function(e) {
        e.preventDefault()
        $('.doctors__boxes').slick('slickNext')
    })
    $(".rev").slick({
        arrows: false,
        slidesToShow: 1,
        dots: true,
        infinite: true,
        dotsClass: 'slick-dots',
        waitForAnimate: false,
        
        responsive: [{ 
            breakpoint: 500,
            settings: {
                arrows: false,
                slidesToShow: 1,
                dots: true,
            } 
        }]
        });
        $('.review__slider-next').on('click', function(e) {
            e.preventDefault()
            $('.rev').slick('slickNext')
        })


        $(".blog__boxes").slick({
            arrows: false,
            slidesToShow: 1,
            dots: true,
            infinite: true,
            dotsClass: 'slick-dots',
            waitForAnimate: false,
            
            responsive: [{ 
                breakpoint: 500,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                } 
            }]
            });
            $('.review__slider-next').on('click', function(e) {
                e.preventDefault()
                $('.blog__boxes').slick('slickNext')
            })
            setInterval(() => {
                if ($(window).scrollTop() > 0 && $('.header__nav').hasClass('header__nav--open') === false) {
                $('.burger').addClass('burger--follow')
                } else {
                $('.burger').removeClass('burger--follow')
                }
            }, 0);
            $('.burger, .header__nav').on('click', function() {
                $('.header__nav').toggleClass('header__nav--open')
                $('.burger').toggleClass('open')
            })
})