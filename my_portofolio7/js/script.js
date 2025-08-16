$('.hamburger').on('click', function(){
    $(this).toggleClass('active');
    $('.drawer').toggleClass('active');
    $('html, body').toggleClass('no-scroll');
});

$('a[href^="#"]').on('click', function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
        scrollTop: position
    }, 300);

    $('a[href^="#"]').removeClass('active');
    $(this).addClass('active');
});

$('.drawer').find('a[href^="#"]').on('click', function(){
    $('.hamburger').toggleClass('active');
    $('.drawer').toggleClass('active');
    $('html, body').toggleClass('no-scroll');
});

$('#go-top').on('click', function(){
    $('html, body').animate({
        scrollTop: 0,
    }, 300)
});

$('#go-top').hide();
$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('#go-top').fadeIn();
    } else{
        $('#go-top').fadeOut();
    }
});