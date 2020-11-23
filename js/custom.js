$(document).ready(function(){
   //trigger nicescroll plugins
    $('body').niceScroll({
        cursorcolor: '#F65F0E',
        cursorwidth:10
    });

    //adjust window heigtt
    $('.header').height($(window).height());

    $(window).resize(function(){
        $('.header').height($(window).height());
    });

    //scroll to features
    $('.header .arrow i').click(function(){
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        },1000)
    });

    //scroll to our team
    $('.hire').click(function(){
        $('html, body').animate({
            scrollTop: $('.our-team').offset().top
        },1000)
    });
    //show hidden image 
    $('.show-more').click(function(){
        $('.our-work .hidden').fadeIn(2000);
    });
    
    //check testimonials
    var leftArrow= $('.testim .fa-chevron-left'),
        rightArrow = $('.testim .fa-chevron-right');
    function checkClients () {
        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
        $('.client:last').hasClass('active') ? rightArrow.fadeOut() :rightArrow.fadeIn();
    }
    checkClients();
    
    $('.testim i').click(function(){
        if ($(this).hasClass('fa-chevron-right')) {
            $('.testim .active').fadeOut(100, function(){
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
    checkClients();            
            });
        }else {
            $('.testim .active').fadeOut(100, function(){
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
    checkClients();            
            });
        }
    });
});