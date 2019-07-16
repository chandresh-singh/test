$(document).ready(function($) {

$('.sol-section__slider').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true
        }
    }
});
    $("#time-count").countdown("2019/12/01", function(event) {
        $(this).text(
          event.strftime('%D days %H:%M:%S')
        );
    });
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.tech-head').addClass('shrink');
        } else {
            $('.tech-head').removeClass('shrink');
        }
    });
     
});