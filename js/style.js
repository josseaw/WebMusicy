$(document).ready(function() {
    // button open and close
    $('.button').on('click', function() {
        $(this).css({ "display": "none" });
        $('.close').css({ "display": "block" });
        $('nav .links').slideDown(300);
        $('nav .login').slideDown(500);
        $('nav .links').css({ "display": "flex" });
        $('nav .login').css({ "display": "block" });
    });
    $('.close').on('click', function() {
        $(this).css({ "display": "none" });
        $('.button').css({ "display": "block" });
        // $('nav .links').css({ "display": "none" });
        // $('nav .login').css({ "display": "none" });
        $('nav .links').slideUp(500);
        $('nav .login').slideUp(300);
    });
    $('.slide-album').slick({
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        enterPadding: '1000px',
        prevArrow: $('#prevBtn'),
        nextArrow: $('#nextBtn')
    });
    $('.list-event').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});