//= vendors/jquery-3.3.1.min.js
//= vendors/owl.carousel.min.js
//= vendors/bootstrap.min.js
//= vendors/slick.min.js



$("#navbarMenu ul .submenu > a").append('<span class="submenu-button"></span>');


$(".toggleMenu").click(function(e){
    $("nav > ul").slideToggle();
    e.preventDefault();
});

$(".submenu ul li").click(function(e){
    e.stopPropagation();
});

$(".submenu").click(function(e){
    //CLOSE OPEN SUBMENU
    if($(this).hasClass("current-menu-item")){
        $("#navbarMenu ul li").removeClass('current-menu-item');
        $('#navbarMenu ul li ul').slideUp();
    }else{
        $("#navbarMenu ul li").removeClass('current-menu-item');
        $("#navbarMenu ul li ul").slideUp();
        $(this).addClass("current-menu-item");
        $(this).find('ul').stop().slideToggle();
        e.stopPropagation();
    }
    $("#navbarMenu ul li").removeClass('openSub');
    $(this).addClass('openSub');

});

$("body, html").click(function(){
    $("#navbarMenu ul li").removeClass('current-menu-item openSub');
    $('#navbarMenu ul li ul').slideUp();
});
$(document).ready(function() {
    'use strict';

var owl = $('.owl-carousel'),
    item,
    itemsBgArray = [], // to store items background-image
    itemBGImg;

owl.owlCarousel({
    items: 1,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplaySpeed: 1000,
    loop: true,
    nav: true,
    navText: false,
    onTranslated: function () {
        changeNavsThump();
    }
});

$('.active').addClass('anim');

var owlItem = $('.owl-item'),
    owlLen = owlItem.length;
/* --------------------------------
  * store items bg images into array
--------------------------------- */
$.each(owlItem, function( i, e ) {
    itemBGImg = $(e).find('.owl-item-bg').attr('src');
    itemsBgArray.push(itemBGImg);
});
/* --------------------------------------------
  * nav control thump
  * nav control icon
--------------------------------------------- */
var owlNav = $('.owl-nav'),
    el;

$.each(owlNav.children(), function (i,e) {
    el = $(e);
    // append navs thump/icon with control pattern(owl-prev/owl-next)
    el.append('<div class="'+ el.attr('class').match(/owl-\w{4}/) +'-thump">');
    el.append('<div class="'+ el.attr('class').match(/owl-\w{4}/) +'-icon">');
});

/*-------------------------------------------
  Change control thump on each translate end
------------------------------------------- */
function changeNavsThump() {
    var activeItemIndex = parseInt($('.owl-item.active').index()),

        prevItemIndex = activeItemIndex != 0 ? activeItemIndex - 1 : owlLen - 1,

        nextItemIndex = activeItemIndex != owlLen - 1 ? activeItemIndex + 1 : 0;

}
changeNavsThump();
});

window.onresize = function() {
    var body = document.body;
    if(body.classList.contains('menu-is-open')) {
        body.classList.remove('menu-is-open');
    }
};


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    autoplay: true
});

$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerPadding: false,
    centerMode: true,
    focusOnSelect: true, arrows: true
});

$('.gallery-our-work').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },

        {
            breakpoint: 870,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 660,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});








