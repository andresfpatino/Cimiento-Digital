// -- Sticky header
jQuery(function( $ ){

    $(window).scroll(function () {
        if ($(document).scrollTop() > 30 ) {
            $('.header').addClass('fixed');
        } 
        else {
            $('.header').removeClass('fixed');
        }
    });
    
    $('.clientes').owlCarousel({
        loop: true,
        margin: 10,
        responsive:{
            0: {
                items: 1
            },
            375: {
                items: 2
            },
            600:{
                items: 3
            },
            820:{
                items:4
            },
            1000:{
                items:5
            }
        }
    })


});

