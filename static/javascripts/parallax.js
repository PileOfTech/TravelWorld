$(document).ready(function() {
    clearPage();
    // window.scrollTo(0, 2020);
     $('html, body').stop().animate( {
      'scrollTop': 0
    }, 900)
    //console.log($(window).scrollTop());

    height = $(window).height();
    $('.screen').css('height', height + 'px')
    var lastScroll = 0;


    function clearPage(){
      var els = [$(".screen"), $('.sea-02'), $('#fourth'),
        $('.egypt'), $('.new-zeland')];       
        for(ind in els){
          el = els[ind];
          console.log(el);
          el.removeClass("first-down");
          el.removeClass("first-up");
          el.removeClass("slide");
          el.removeClass("return");
        }
    }
    function whichTransitionEvent(){
      var t, el = document.createElement("fakeelement");

      var transitions = {
        "transition"      : "transitionend",
        "OTransition"     : "oTransitionEnd",
        "MozTransition"   : "transitionend",
        "WebkitTransition": "webkitTransitionEnd"
      }

      for (t in transitions){
        if (el.style[t] !== undefined){
          return transitions[t];
        }
      }
    }

    var transitionEvent = whichTransitionEvent();


    /*Modal controll*/
    $('.name-tour').click(function(){
      $('.hic-modal-window').addClass('open');
      $('body').css('overflow', 'hidden');
      var theme = $(this).attr('theme');
      if(theme == "red"){
        $('.red-theme').addClass('active');
      }
      if(theme == "yellow"){
        $('.yellow-theme').addClass('active');
      }      
      if(theme == "green"){
        $('.green-theme').addClass('active');
      }        
    });
    
    $('.close-hic').click(function(){
      $('.hic-modal-window').removeClass('open');
      $('body').css('overflow', 'auto');
      $('.theme').removeClass('active');
    });

    function blockDown(element){
      if(!element.hasClass("first-down")){
        element.removeClass('first-up');
        element.addClass('first-down');    
        $('body').css('overflow-y', 'hidden');
        element.one(transitionEvent, function(event) {
          $('body').css('overflow-y', 'auto');
        });
        element.css('position', 'fixed');
      }      
    }

    function blockUp(element){
      if(!element.hasClass("first-up")){
        element.removeClass('first-down');
        element.addClass('first-up');    
        $('body').css('overflow-y', 'hidden');
        element.one(transitionEvent, function(event) {
          $('body').css('overflow-y', 'auto');
        });
        element.css('position', 'fixed');
      }   
    }

    function blockLeft(element, prefix=""){
      if(!element.hasClass(prefix+"slide")){
        element.removeClass(prefix+'return');
        element.addClass(prefix+'slide');
        $('body').css('overflow-y', 'hidden');
        element.one(transitionEvent, function(event) {
          $('body').css('overflow-y', 'auto');
        });                
      }      
    }
    function blockRight(element, prefix = ""){
      if(!element.hasClass(prefix+"return")){
        element.removeClass(prefix+'slide');
        element.addClass(prefix+'return');
        $('body').css('overflow-y', 'hidden');
        element.one(transitionEvent, function(event) {
          $('body').css('overflow-y', 'auto');
        });                
      }      
    }    

    $(window).scroll(function() {
        var scrolled = Math.round($(window).scrollTop()); 
        //console.log(scrolled);
        var second = (0 - scrolled*0.3);
        
        $('#second').css('top', (height - scrolled) + 'px');

        /*FIRST SLIDE*/
        if (scrolled > lastScroll && scrolled < 400) {
          var element = $("#second");
          blockDown(element);
        }
        if (scrolled < lastScroll && scrolled < 400) {
          var element = $("#second");
          blockUp(element);
        }        

        /*SECOND SLIDE*/
        if (scrolled > lastScroll && scrolled > 550 && scrolled < 800) {
          var element = $("#third");
          blockDown(element);          
        }
        if (scrolled < lastScroll && scrolled > 550 && scrolled < 600) {
          var element = $("#third");
          blockUp(element);          
        }

        /*SEA SLIDER*/
        if(scrolled > lastScroll && scrolled > 1200 && scrolled < 1400){
          blockLeft($('.sea-02'), "sea-");
        }
        if(scrolled < lastScroll && scrolled > 1200 && scrolled < 1400){
          blockRight($('.sea-02'), "sea-");
        }

        /*HIKING SLIDE*/
        if (scrolled > lastScroll && scrolled > 1700 && scrolled < 1900) {
          // $('#fourth').addClass('first-down');
          // $('#fourth').css('position', 'fixed');
          blockDown($('#fourth'), "sea-");
        }
        if (scrolled < lastScroll && scrolled > 1700 && scrolled < 1900) {
          blockUp($('#fourth'), "sea-");
        }

        if(scrolled > lastScroll && scrolled > 2400 && scrolled < 2700){
          blockLeft($('.egypt'));
          $('.egypt-name').removeClass('return-name');
          $('.egypt-name').addClass('name-slide');
        }
        if(scrolled < lastScroll && scrolled > 2400 && scrolled < 2700){
          blockRight($('.egypt'));
          $('.egypt-name').removeClass('name-slide');
          $('.egypt-name').addClass('return-name');
        }        

        if(scrolled > lastScroll && scrolled > 3000 && scrolled < 3300){
          blockLeft($('.new-zeland'));
          $('.new-zeland-name').addClass('zeland-name-slide');
          $('.new-zeland-name').removeClass('return-name');          
        }
        if(scrolled < lastScroll && scrolled > 3000 && scrolled < 3300){
          blockRight($('.new-zeland'));
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