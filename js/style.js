$(document).ready(function(){
    $('.slide-album').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $('.list-event').slick({
        infinite: true,
        arrow: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});