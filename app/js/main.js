$(function () {
    $('.fairy-tail_slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt="arrow img"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"> <img src="images/arrow-next.svg" alt="arrow img"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                }
            },
        ]
    });



    $('.our-trip_slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt="arrow img"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"> <img src="images/arrow-next.svg" alt="arrow img"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
    });
})