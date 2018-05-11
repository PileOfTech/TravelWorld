$(document).ready(function() {
    clearPage();
    //console.log($(window).scrollTop());

    var height = $(window).height();
    var width = $(window).width();
    var is_mobile = false;
    if(width < 768){
      is_mobile = true;
    }
    // $('.screen').css('height', '100%');

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
        $('button').removeClass('but-active');
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
      if(is_mobile){
        $('.big-logo').removeClass('top-logo');
        $('.line').toggleClass('top-line');
      }
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

    function toHic(){
      toSea();
      setTimeout(function() { 
        blockLeft($('.sea-02'), "sea-");

      }, 3000); 
      
      setTimeout(function() { 
        blockDown($('#fourth'), "sea-");
        window.scrollTo(1200, 0);
      }, 4000);       
    }

    function toMount(){
      toHic();
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
        $('.but-01').addClass('but-active');
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
      toHic();
    });

    $('#liveit').click(function(){
      toMount();
    });

    lastScroll = 0;

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
        
        //MOUNTAINS        
        if(scrolled > lastScroll && scrolled > 3300 && scrolled < 3700){
          blockDown($('#fifth'));
          $('.but-01').addClass('but-active');
        }
        if(scrolled < lastScroll && scrolled > 3300 && scrolled < 3700){
          blockUp($('#fifth'));
          $('.but-01').removeClass('but-active');
        }  
        //mount-02
        if(scrolled > lastScroll && scrolled > 3900 && scrolled < 4300){
          $('.but-01').removeClass('but-active');
          $('.but-02').addClass('but-active');
          blockLeft($('.mount-02'));
        }              
        if(scrolled < lastScroll && scrolled > 3900 && scrolled < 4300){
          $('.but-02').removeClass('but-active');
          $('.but-01').addClass('but-active');          
          blockRight($('.mount-02'));       
        } 
        // mount-03
        if(scrolled > lastScroll && scrolled > 4300 && scrolled < 4700){
          $('.but-02').removeClass('but-active');
          $('.but-03').addClass('but-active');          
          blockLeft($('.mount-03'));       
        }              
        if(scrolled < lastScroll && scrolled > 4300 && scrolled < 4700){
          $('.but-03').removeClass('but-active');
          $('.but-02').addClass('but-active');                 
          blockRight($('.mount-03'));
        }  



        //Last screen
        if(scrolled > lastScroll && scrolled > 4700 && scrolled < 5000){
          blockDown($('#six'));
        }
        if(scrolled < lastScroll && scrolled > 4700 && scrolled < 5000){
          blockUp($('#six'));
        }   

        //mountains
        if(scrolled > lastScroll && scrolled > 5000 && scrolled < 5300){
          blockLeft($('.mountains'));       
        }              
        if(scrolled < lastScroll && scrolled > 5000 && scrolled < 5300){
          blockRight($('.mountains'));       
        }  

        // fields
        if(scrolled > lastScroll && scrolled > 5300 && scrolled < 5700){
          blockLeft($('.fields'));       
        }              
        if(scrolled < lastScroll && scrolled > 5300 && scrolled < 5700){
          blockRight($('.fields'));       
        }  

        //ocean
        if(scrolled > lastScroll && scrolled > 5700 && scrolled < 6400){
          blockLeft($('.ocean'));       
        }              
        if(scrolled < lastScroll && scrolled > 5700 && scrolled < 6400){
          blockRight($('.ocean'));       
        }  

        //beach
        if(scrolled > lastScroll && scrolled > 6400 && scrolled < 6700){
          blockLeft($('.beach'));       
        }              
        if(scrolled < lastScroll && scrolled > 6400 && scrolled < 6700){
          blockRight($('.beach'));       
        }  


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