$(function () {

    

    $(".rating__star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
    });

    $('.slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 2,
    });

    $('.header__burger-menu').on('click', function(){
        $('.menu__list').slideToggle();
    });



    

    var mixer = mixitup('.products__inner-box');

});