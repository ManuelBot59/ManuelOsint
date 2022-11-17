jQuery(document).ready(function(){
"use strict";

var height = $('.service').height();
$('.service').height(height+120-128);

var height2 = $('.service-boxed').height();
$('.service-boxed').height(height2+80-108);

var pagetop = $(".page-title .block .container").height()+160;     
jQuery(".page-title .block").css({
    "height": pagetop
});

var pagetop2 = $("header.header2, header.header3").height();     
jQuery(".page-title").css({
    "padding-top": pagetop2
});

var portfoliotitle = $(".portfolio-title").height();
var portfoliotitlemargin = portfoliotitle/2;
jQuery(".portfolio-title").css({
    "margin-top": -portfoliotitlemargin
});

var a = $(".portfolio-hover").height()+100;   
var b = a / 2;
jQuery(".portfolio-hover").css({
    "margin-top": -b
});


var kenburnstext = $(".kenburns-text").height();   
var textmargin = kenburnstext / 2;
jQuery(".kenburns-text").css({
    "margin-top": -textmargin
});


/*=================== Hire Us ===================*/ 
$("hire-form").fadeOut();
$('.hire-button').on("click",function(){
    $(".hire-form").fadeIn();
    return false;
});
$(".hire-form .form > span").on("click",function(){
    $(this).parent().parent().parent().fadeOut();
});

/*=================== Start Now Form ===================*/ 
var simpletext = $(".simple-text").height();
jQuery(".simple-text").css({
"height": simpletext
});    

$('.open-form').on("click",function(){
    $(this).parent().addClass('form-opened');
    $(".form").addClass('show');

    var formheight = $(".form").height();
    jQuery(".simple-text").css({
    "height": formheight
    });    
    return false;
});
$('.form > span').on("click",function(){
    $('.simple-text').removeClass('form-opened');
    $(".form").removeClass('show');

    jQuery(".simple-text").css({
    "height": simpletext
    });    
    return false;
});

/*=================== Side Header ===================*/ 
$(".menu-open > span").on("click",function(){
    $(this).parent().parent().toggleClass("opened");
    $(".side-menu li ul").slideUp();
});
$(".side-menu li ul").parent().addClass("has-child");
$(".side-menu li.has-child > a").on("click",function(){
    $(this).attr('href', 'javascript:void(0)');
});
$(".has-child").on("click",function(){
    $(".side-menu li ul").slideUp();
    $(this).find("ul").slideDown();
});
var drop = $('.menu-open > ul > li') 
$('.menu-open > ul').each(function(){
    var delay = 200;
    $(this).find(drop).each(function(){
    $(this).css({transitionDelay: delay+'ms'});
    delay += 100;
    });
});  

/*=================== Dropdown Anmiation ===================*/ 
var drop = $('nav > ul > li > ul > li') 
$('nav > ul > li').each(function(){
    var delay = 0;
    $(this).find(drop).each(function(){
    $(this).css({transitionDelay: delay+'ms'});
    delay += 50;
    });
});  
var drop2 = $('nav  > ul > li > ul > li >  ul > li')
$('nav > ul > li > ul > li').each(function(){      
    var delay2 = 0;
    $(this).find(drop2).each(function(){
    $(this).css({transitionDelay: delay2+'ms'});
    delay2 += 50;
    });
});  

/*=================== STICKY HEADER ===================*/ 
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 70) {
        $(".stick").addClass("sticky");
    }
    else{
        $(".stick").removeClass("sticky");
    }
}); 
    
/*=================== Responsive Header ===================*/  
$(".responsive-header > span").on("click",function(){
    $(this).next('ul').slideToggle();
    $(".responsive-header > ul > li > ul").slideUp();
    $(".responsive-header > ul > li > ul > li > ul").slideUp();
    $(".responsive-header > ul > li").removeClass('opened');
    $(".responsive-header > ul > li > ul > li").removeClass('opened');
}); 

$('.responsive-header ul li a').next('ul').parent().addClass('no-link')
$('.no-link > a').on("click",function(){
    return false;
}); 

$(".responsive-header > ul > li > a").on("click",function(){
    $(".responsive-header > ul > li > ul").slideUp();
    $(".responsive-header > ul > li").removeClass('opened');
    $(this).next('ul').slideDown();
    $(this).next('ul').parent().toggleClass('opened');
}); 
$(".responsive-header > ul > li > ul > li a").on("click",function(){
    $(".responsive-header > ul > li > ul > li > ul").slideUp();
    $(".responsive-header > ul > li > ul > li").removeClass('opened');
    $(this).next('ul').slideDown();
    $(this).next('ul').parent().toggleClass('opened');
}); 
    

/*=================== Portfolio Popup ===================*/  
jQuery('.portfolio').each(function() {
    jQuery('.portfolio a').on("click",function(){        
        var data = jQuery(this).data('id');
        jQuery('.popup').removeClass('active');
        jQuery('.portfolio-popup').find('#'+data).addClass('active');
        jQuery('body').addClass('stop').find('.portfolio-popup').fadeIn().addClass('fix-height animated fadeInUp');
        jQuery('html').addClass('stop');
        return false
    });
    jQuery('.portfolio-popup .container > span').on("click",function(){        
        jQuery('.popup').removeClass('active');
        jQuery('body').removeClass('stop').find('.portfolio-popup').fadeOut().removeClass('fix-height animated fadeInUp');
        jQuery('html').removeClass('stop');
        return false
    });
});

jQuery('.big-portfolio').each(function() {
    jQuery('.big-port-desc a').on("click",function(){        
        var data = jQuery(this).data('id');
        jQuery('.popup').removeClass('active');
        jQuery('.portfolio-popup').find('#'+data).addClass('active');
        jQuery('body').addClass('stop').find('.portfolio-popup').fadeIn().addClass('fix-height animated fadeInUp');
        jQuery('html').addClass('stop');
        return false;
    });
    jQuery('.portfolio-popup .container > span').on("click",function(){        
        jQuery('.popup').removeClass('active');
        jQuery('body').removeClass('stop').find('.portfolio-popup').fadeOut().removeClass('fix-height animated fadeInUp');
        jQuery('html').removeClass('stop');
        return false;
    });
});


/*=================== Pretty Photo ===================*/  
jQuery("body a[data-rel^='prettyPhoto']").prettyPhoto({
    theme: "facebook",
});

/*=================== Ajax Contact Form ===================*/  
$('#contactform').submit(function(){
    var action = $(this).attr('action');
    $("#message").slideUp(750,function() {
    $('#message').hide();
        $('#submit')
        .after('<img src="images/ajax-loader.gif" class="loader" />')
        .attr('disabled','disabled');
    $.post(action, {
        name: $('#name').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),
        comments: $('#comments').val(),
        verify: $('#verify').val()
    },
        function(data){
            document.getElementById('message').innerHTML = data;
            $('#message').slideDown('slow');
            $('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
            $('#submit').removeAttr('disabled');
            if(data.match('success') != null) $('#contactform').slideUp('slow');

        }
    );
    });
    return false;

    
});


});/*=== Document.Ready Ends Here ===*/ 		


$(window).load(function(){
    /*** PARALLAX INITIALIZATION ***/   
    $('.parallax').scrolly({bgParallax: true});
    $('.service-parallax').scrolly({bgParallax: true});
});/*=== Window.Load Ends Here ===*/         
