$(window).ready(function () {
    $('button.static').mouseenter(function () {
        if ($(this).next().css('opacity') === '0') {
            $(this).next().css({ 'opacity': '1', 'cursor': 'pointer' });
        }
    });

    $('button.hovered').mouseleave(function () {
        if ($(this).css('opacity') === '1') {
            $(this).css({ 'opacity': '0', 'cursor': 'auto' });
        }
    });

    // $('button.static').hover(
    //     function() {
    //         $(this).addClass('hovered');
    //         setTimeout($(this).addClass('hovered'), 300);
    //     }, function() {
    //         $(this).removeClass('hovered');
    //         setTimeout($(this).removeClass('hovered'), 300);
    //     }
    // );

    $('.slider').slick({
        infinite: true,
        prevArrow: '<button type="button" class="slick-common slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-common slick-next"></button>',
        cssEase: 'ease',
        dots: true
    });

    $('.news-slider').slick({
        infinite: true,
        prevArrow: '<button type="button" class="slick-common slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-common slick-next"></button>',
        cssEase: 'ease',
    });

    $('.menu__btn').on('click', function() {
        $('.nav').slideToggle(500);
    });

});

