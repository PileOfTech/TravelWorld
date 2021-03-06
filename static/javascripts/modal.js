$('body').css('overflow-y', 'hidden');
window.onload = function() {
  if (supportBrowser()){
    setTimeout(function(){
      $('.loader').removeClass('loader-active');
      $('body').css('overflow-y', 'scroll');
    },1000);
  }else{
    $(".text-loader").text(navigator.userAgent);
    document.getElementById("globus-loader").style.display = 'none';
    document.getElementById("browser-support").className += "act-support";
  }
};

function supportBrowser(){
  ua = navigator.userAgent;
  var bName = function () {
    if (ua.search(/Firefox/) > -1) return "firefox";
    if (ua.search(/Opera/) > -1) return "opera";
    if (ua.search(/Chrome/) > -1) return "chrome";
    if (ua.search(/Safari/) > -1) return "safari";
    if (ua.search(/UC/) > -1) return "uc";
    if (ua.search(/Konqueror/) > -1) return "konqueror";
    if (ua.search(/Iceweasel/) > -1) return "iceweasel";
    if (ua.search(/SeaMonkey/) > -1) return "seamonkey";
    if (ua.search(/OPR/) > -1) return "opera";
    
  }();
  var list = ["uc", "firefox", "opera", "chrome", "safari"];
  return list.includes(bName);
}

var width = $(window).width();
var is_mobile = false;
if(width < 768){
  is_mobile = true;
}

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
    autoplaySpeed: 2500,  
    initialSlide: 1,
    accessibility: false,
  });
}

$('.globus').click(function(){
  $('.big-logo').toggleClass('top-logo');
  $('.line').toggleClass('top-line');
});

$('.modal-globus').click(function(){
  $(this).toggleClass('bottom-globus');
  $(this).parent().children('.desc-block').toggleClass('act-desc');
});

$('.red-globus').click(function(){
  $('.red-el').children('.desc-block').toggleClass('act-desc');
});
/*Modal controll for sea-slide*/
$('.tour').click(function(){
  $('body').css('overflow', 'hidden'); 
  var theme = $(this).attr('theme');
  if(theme == "hawaii"){
    $('.sea-modal-window-01').addClass('open');  
  }
  if(theme == "point-lobos"){
    $('.sea-modal-window-01').addClass('open');
  }                          
  if(theme == "bali"){
    $('.sea-modal-window-02').addClass('open');
  }
  if(theme == "LA"){
    $('.sea-modal-window-02').addClass('open');
  }
  $('.'+theme+'').addClass('active');
  $('.'+theme+'').children('.modal-globus').addClass('act-globus');  
});

/*Modal controll for hicing*/
$('.name-tour').click(function(){
  $('.hic-modal-window').addClass('open');
  $('body').css('overflow', 'hidden');
  var theme = $(this).attr('theme');
  if(theme == "red"){
    $('.red-theme').addClass('active');
    $('.red-theme').children('.modal-globus').addClass('act-globus');  
    slick();
  }     
  $('.'+theme+'-theme').addClass('active');
  $('.'+theme+'-theme').children('.modal-globus').addClass('act-globus');    
});


var skiData = [
  {
    "title": "Kirchdorf",
    "text": "Hit the slopes running (or should we say, boarding) on this awesome ski and snowboard trip in the Austrian Alps. Make your own way to Kirchdorf in the Austrian Tyrol region, then tailor your equipment hire and lessons upon arrival. You'll gain access to world-class runs that satisfy beginners",
    "cover": "cov-01.jpg",
  },
  {
    "title": "Queenstown",
    "text": "There’s one word to describe the sights you’ll see in New Zealand: dramatic. Whether it’s the mirror-like lakes, soaring mountains or the wildlife of Queenstown, there’s nowhere quite like the Land of the Long White Cloud. Strap on those skis, take to the slopes and enjoy the trip.",
    "cover": "cov-02.jpg",    
  },
  {
    "title": "Japanese",
    "text": "Hit the powder and max out on moguls for an entire week. Make your way to the nearby ski resorts and apres-ski your way from green to black runs. With free time to make this trip your own, visit snow monkeys, a sake brewery, a temple tour, and plenty of Japanese noms thrown in.",
    "cover": "cov-03.jpg",    
  
  }
]
$('.ski-but').click(function(){
  $('.ski-modal-window').addClass('open');
  $('body').css('overflow', 'hidden');

  $('.blue-theme').children('.modal-globus').addClass('act-globus');    

  var theme = $(this).attr('theme');
  if(theme == 'but-01'){
    $('.ski-title').text(skiData[0]["title"]);
    $('.ski-text').text(skiData[0]["text"]);
    $('.ski-cover').css("background-image", "url('static/css/images/"+skiData[0]["cover"]+"')");
  }
  if(theme == 'but-02'){
    $('.ski-title').text(skiData[1]["title"]);
    $('.ski-text').text(skiData[1]["text"]);
    $('.ski-cover').css("background-image", "url('static/css/images/"+skiData[1]["cover"]+"')");
  }
  if(theme == 'but-03'){
    $('.ski-title').text(skiData[2]["title"]);
    $('.ski-text').text(skiData[2]["text"]);
    $('.ski-cover').css("background-image", "url('static/css/images/"+skiData[2]["cover"]+"')");
  }    

});

$('.close-ski').click(function(){
  $('.ski-modal-window').removeClass('open');
  $('body').css('overflow', 'scroll');
  $('.modal-globus').removeClass('act-globus');
  $('.modal-globus').removeClass('bottom-globus');
  $('.desc-block').removeClass('act-desc');
  $('.desc-block').removeClass('right-desc');  
});


/*Close sea*/
$('.close-sea').click(function(){
  $('.sea-modal-window').removeClass('open');
  $('body').css('overflow', 'scroll');
  $('.theme').removeClass('active');
  $('.modal-globus').removeClass('act-globus');
  $('.modal-globus').removeClass('bottom-globus');
  $('.desc-block').removeClass('act-desc');
  $('.desc-block').removeClass('right-desc');
});


$('.side-image').click(function(){
  $(this).addClass('full-side');
  $(this).children("div.j-close").addClass('j-active');
  $(this).children("div.shadow").children('.button').addClass('show-but');
});


$('.j-close').click(function(){
  setTimeout(function() {
    $('.j-close').removeClass('j-active');
    $('.full-side').children("div.shadow").children('.button').removeClass('show-but');
    $('.side-image').removeClass("full-side");
    $('.button').removeClass('bottom-but');
    $('.content').removeClass('act-content');
    $('.desc').removeClass('act-desc');   
  }, 100);  
});

$('.button').click(function(){
  $(this).toggleClass('bottom-but');
  $(this).parent().toggleClass('slide-shadow');
  $(this).parent().children('.content').toggleClass('act-content');
  $(this).parent().children('.content').children('.desc').toggleClass('act-desc');
});




