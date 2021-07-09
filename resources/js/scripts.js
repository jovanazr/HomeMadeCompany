$(document).ready(function() {
    
    /* scroll na dugme prikazi vise */
    $('.js--scroll-na-pocetak').click(function(){
        $('html, body').animate({ scrollTop: $('.js--section-o-nama').offset().top}, 700)
    });
    
    
    /* scroll main i footer navigacije */
     $('.js--o-nama').click(function(){
        $('html, body').animate({ scrollTop: $('.js--section-o-nama').offset().top}, 700)
    });
    
    $('.js--galerija').click(function(){
        $('html, body').animate({ scrollTop: $('.js--section-galerija').offset().top}, 700)
    });
    
    $('.js--cenovnik').click(function(){
        $('html, body').animate({ scrollTop: $('.js--section-cenovnik').offset().top}, 700)
    });
    
    $('.js--kako-do-nas').click(function(){
        $('html, body').animate({ scrollTop: $('.js--section-gradovi').offset().top}, 700)
    });
    
    $('.js--ostavite-utisak').click(function(){
        $('html, body').animate({ scrollTop: $('.js--section-forma').offset().top}, 700)
    });
    
    /* padajuci meni */
     $('.js--mobile-nav').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--mobile-nav i');
        
        nav.slideToggle(200);
    });
});