$(window).ready(function () {

    $('button.hovered').mouseenter(function () {
        if ($(this).css('opacity') === '0') {
            $(this).css({ 'opacity': '1', 'cursor': 'pointer', 'transition': '.3s' });
            
        }
    });

    $('button.hovered').mouseleave(function () {
        if ($(this).css('opacity') === '1') {
            $(this).css({ 'opacity': '0', 'cursor': 'auto', 'transition': '.3s' });
        }
    });

    $('button.static').mouseenter(function () {
        if ($(this).next().css('opacity') === '0') {
            $(this).next().css({ 'opacity': '1', 'cursor': 'pointer', 'transition': '.3s' });
            
        }
    });

    $('button.static').mouseleave(function () {
        if ($(this).next().css('opacity') === '1') {
            $(this).next().css({ 'opacity': '0', 'cursor': 'auto', 'transition': '.3s' });
        }
    });



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

