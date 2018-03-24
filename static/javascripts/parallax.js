$(document).ready(function() {
    height = $(window).height();
    $('.screen').css('height', height + 'px')
    var lastScroll = 0;


    $('.name-tour').click(function(){
      $('.hic-modal-window').addClass('open');
      $('body').css('overflow', 'hidden');
    });
    $('.close-hic').click(function(){
      $('.hic-modal-window').removeClass('open');
      $('body').css('overflow', 'auto');      
    });

    $(window).scroll(function() {
        var scrolled = Math.round($(window).scrollTop()); 
        //console.log(scrolled);
        var second = (0 - scrolled*0.3);
        

        $('#second').css('top', (height - scrolled) + 'px');


        /*FIRST SLIDE*/
        if (scrolled > lastScroll && scrolled < 550) {
          $('#second').addClass('first-down');
          $('#second').css('position', 'fixed');
        }
        if (scrolled < lastScroll && scrolled < 400) {
          $('#second').removeClass('first-down');
          $('#second').addClass('first-up');
        }        


        /*SECOND SLIDE*/
        if (scrolled > lastScroll && scrolled > 550 && scrolled < 800) {
          $('#third').addClass('first-down');
          $('#third').css('position', 'fixed');
        }
        if (scrolled < lastScroll && scrolled > 550 && scrolled < 600) {
          $('#third').removeClass('first-down');
          $('#third').addClass('first-up');
        }


        /*SEA SLIDER*/
        if(scrolled > lastScroll && scrolled > 1200 && scrolled < 1400){
          $('.sea-02').removeClass('sea-return');
          $('.sea-02').addClass('sea-slide');
        }
        if(scrolled < lastScroll && scrolled > 1200 && scrolled < 1400){
          $('.sea-02').removeClass('sea-slide');
          $('.sea-02').addClass('sea-return');
        }

        /*HIKING SLIDE*/
        if (scrolled > lastScroll && scrolled > 1700 && scrolled < 1900) {
          $('#fourth').addClass('first-down');
          $('#fourth').css('position', 'fixed');
        }
        if (scrolled < lastScroll && scrolled > 1700 && scrolled < 1900) {
          $('#fourth').removeClass('first-down');
          $('#fourth').addClass('first-up');
        }

        if(scrolled > lastScroll && scrolled > 2400 && scrolled < 2700){
          $('.egypt').removeClass('return');
          $('.egypt').addClass('slide');
          $('.egypt-name').removeClass('return-name');
          $('.egypt-name').addClass('name-slide');
        }
        if(scrolled < lastScroll && scrolled > 2400 && scrolled < 2700){
          $('.egypt').removeClass('slide');
          $('.egypt').addClass('return');
          $('.egypt-name').removeClass('name-slide');
          $('.egypt-name').addClass('return-name');
        }        

        if(scrolled > lastScroll && scrolled > 3000 && scrolled < 3300){
          $('.new-zeland').removeClass('return');
          $('.new-zeland').addClass('slide');
          $('.new-zeland-name').addClass('zeland-name-slide');
          $('.new-zeland-name').removeClass('return-name');          
        }
        if(scrolled < lastScroll && scrolled > 3000 && scrolled < 3300){
          $('.new-zeland').removeClass('slide');
          $('.new-zeland').addClass('return');
          $('.new-zeland-name').removeClass('zeland-name-slide');
          $('.new-zeland-name').addClass('return-name');          
        }      

        /*THIRD SLIDE*/
        // if(scrolled > lastScroll && scrolled > 400){
        //   $('#fourth').addClass('last');
        // }
        // if(scrolled < lastScroll && scrolled > 450 && scrolled < 600){
        //   $('#fourth').removeClass('last');
        //   $('#third').addClass('second-up');
        // }


        lastScroll = scrolled;

    });
});