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

    
    //tabs 
    $(".tab_item").not(":first").hide();
    $(".product-one__tabs .tab").click(function() {
	$(".product-one__tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    //settings tabs
    $(".form__tab-content").not(":first").hide();
    $(".settings__wrapper .aside-tab").click(function() {
	$(".settings__wrapper .aside-tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".form__tab-content").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");


    //form styler 
        $('input[type="file"], select').styler();    

        

    var mixer = mixitup('.products__inner-box');

});