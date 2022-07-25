$(document).ready(function() {
    // button open and close
    $('.button').on('click', function() {
        $(this).css({ "display": "none" });
        $('.close').css({ "display": "block" });
        $('nav .links').slideDown(300);
        $('nav .login').slideDown(500);
    });
    $('.close').on('click', function() {
        $(this).css({ "display": "none" });
        $('.button').css({ "display": "block" });
        $('nav .links').slideUp(500);
        $('nav .login').slideUp(300);
    });
    // $('.slide-album').slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 3
    // });
    $('.list-event').slick({
        infinite: true,
        // arrow: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    // $('.slide-news').slick({
    //     infinite: true,
    //     arrow: false,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // });
});