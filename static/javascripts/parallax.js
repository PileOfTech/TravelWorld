$(document).ready(function() {
    height = $(window).height();
    $('.screen').css('height', height + 'px')
    var lastScroll = 0;

    $(window).scroll(function() {
        var scrolled = Math.round($(window).scrollTop()); 
        console.log(scrolled);
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