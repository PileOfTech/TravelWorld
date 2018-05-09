$(document).ready(function() {
    clearPage();
    //console.log($(window).scrollTop());

    height = $(window).height();
    $('.screen').css('height', height + 'px')

    var lastScroll = 0;


    $('.main-link').click(function(){
      clearPage();
    });

    function clearPage(){
      var els = [$(".screen"), $('.sea-02'), $('#fourth'),
        $('.egypt'), $('.new-zeland'), $('.fifth')];       
        for(ind in els){
          el = els[ind];
          //console.log(el);
          el.removeClass("first-down");
          el.removeClass("first-up");
          el.removeClass("slide");
          el.removeClass("return");
        }
        window.scrollTo(0, 0);
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

    /*Modal controll for sea-slide*/
    $('.tour').click(function(){
      $('body').css('overflow', 'hidden'); 
      var theme = $(this).attr('theme');
      if(theme == "bali"){
        $('.sea-modal-window-02').addClass('open');
        $('.bali').addClass('active');
      }
      if(theme == "LA"){
        $('.sea-modal-window-02').addClass('open');
        $('.LA').addClass('active');
      }
      if(theme == "hawaii"){
        $('.sea-modal-window-01').addClass('open');
        $('.hawaii').addClass('active');
      }
      if(theme == "PL"){
        $('.sea-modal-window-01').addClass('open');
        $('.point-lobos').addClass('active');
      }                          
    });

    /*Modal controll for hicing*/
    $('.name-tour').click(function(){
      $('.hic-modal-window').addClass('open');
      $('body').css('overflow', 'hidden');
      var theme = $(this).attr('theme');
      if(theme == "red"){
        $('.red-theme').addClass('active');
        slick();
      }
      if(theme == "yellow"){
        $('.yellow-theme').addClass('active');
      }      
      if(theme == "green"){
        $('.green-theme').addClass('active');
      }        
    });
    
    /*Close sea*/
    $('.close-sea').click(function(){
      $('.sea-modal-window').removeClass('open');
      $('body').css('overflow', 'scroll');
      $('.theme').removeClass('active');
    });

    /*Close hicing*/
    $('.close-hic').click(function(){
      $('.red-slider').slick('unslick'); 
      $('.hic-modal-window').removeClass('open');
      $('body').css('overflow', 'scroll');
      $('.theme').removeClass('active');
    });

    // machineMove
    function blockDown(element){
      if(!element.hasClass("first-down")){
        element.removeClass('first-up');
        element.addClass('first-down');    
        $('body').css('overflow-y', 'hidden');
        element.one(transitionEvent, function(event) {
          $('body').css('overflow-y', 'scroll');
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
          $('body').css('overflow-y', 'scroll');
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
          $('body').css('overflow-y', 'scroll');
        });                
      }      
    }
    function blockRight(element, prefix = ""){
      if(!element.hasClass(prefix+"return")){
        element.removeClass(prefix+'slide');
        element.addClass(prefix+'return');
        $('body').css('overflow-y', 'hidden');
        element.one(transitionEvent, function(event) {
          $('body').css('overflow-y', 'scroll');
        });                
      }      
    }    

    function toJungle(){
      var element = $("#second");
      blockDown(element);      
      window.scrollTo(300, 0);
    } 

    function toSea(){
      toJungle();
      element = $("#third");
      setTimeout(function() { 
        blockDown(element);
        window.scrollTo(600, 0);
      }, 1800);       
    }

    function toMount(){
      toSea();
      setTimeout(function() { 
        blockLeft($('.sea-02'), "sea-");

      }, 3000); 
      
      setTimeout(function() { 
        blockDown($('#fourth'), "sea-");
        window.scrollTo(1200, 0);
      }, 4000);       
    }

    function toLive(){
      toMount();
      setTimeout(function() { 
        blockLeft($('.egypt'));
        $('.egypt-name').removeClass('return-name');
        $('.egypt-name').addClass('name-slide'); 
      }, 5100); 
      
      setTimeout(function() { 
        blockLeft($('.new-zeland'));
        $('.new-zeland-name').addClass('zeland-name-slide');
        $('.new-zeland-name').removeClass('return-name'); 
      }, 6200);

      setTimeout(function() { 
        element = $("#fifth");
        blockDown(element);
        window.scrollTo(600, 0);
        // window.scrollby(50,0);
      }, 7300);    
    }

    $('#jungle').click(function(){
      toJungle();
    });

    $('#sea').click(function(){
      toSea();   
    });

    $('#mountains').click(function(){
      toMount();
    });

    $('#liveit').click(function(){
      toLive();
    });

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

        //EGYPT
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

        //NEW ZEALAND
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
        
        //Last screen
        if(scrolled > lastScroll && scrolled > 3300 && scrolled < 3700){
          blockDown($('#fifth'));
        }
        if(scrolled < lastScroll && scrolled > 3300 && scrolled < 3700){
          blockUp($('#fifth'));
          console.log('yes');
        }   

        //mountains
        if(scrolled > lastScroll && scrolled > 3900 && scrolled < 4300){
          blockLeft($('.mountains'));       
        }              
        if(scrolled < lastScroll && scrolled > 3900 && scrolled < 4300){
          blockRight($('.mountains'));       
        }  

        // fields
        if(scrolled > lastScroll && scrolled > 4300 && scrolled < 4700){
          blockLeft($('.fields'));       
        }              
        if(scrolled < lastScroll && scrolled > 4300 && scrolled < 4700){
          blockRight($('.fields'));       
        }  

        //ocean
        if(scrolled > lastScroll && scrolled > 4700 && scrolled < 5400){
          blockLeft($('.ocean'));       
        }              
        if(scrolled < lastScroll && scrolled > 4700 && scrolled < 5400){
          blockRight($('.ocean'));       
        }  

        //beach
        if(scrolled > lastScroll && scrolled > 5400 && scrolled < 6100){
          blockLeft($('.beach'));       
        }              
        if(scrolled < lastScroll && scrolled > 5400 && scrolled < 6100){
          blockRight($('.beach'));       
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

    function slick(){
      $(".red-slider").slick({
        infinite: true,
        speed: 500,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1000,  
        initialSlide: 1,
      });
    }

});