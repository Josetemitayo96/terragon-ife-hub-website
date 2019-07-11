"use strict";

// var site_title = "";
// var page_title = "";
var menu_links = [];
var resizeEvent = new Event('resize');


function roundyMenuToggle() {
  $('#roundy-menu-toggle').toggleClass('roundy-active');
  $('#round-body').toggleClass('roundy-menu-opened');
}

function roundyMenuClose() {
  $('#roundy-menu-toggle').removeClass('roundy-active');
  $('#round-body').removeClass('roundy-menu-opened');
}

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function setPosition(item, angle, fulldiameter){
  var itemDistance = 0.33 * fulldiameter;
  var px = Math.cos(angle)*itemDistance + fulldiameter/2;
  var py = Math.sin(angle)*itemDistance + fulldiameter/2;
  item.css("top", py+"%");
  item.css("left", px+"%");
  item.css("opacity", 1);
}

function Regulation(count){
  var num = 0;
  $(".round-menu .round-menu-item").each(function(){
    var item = $(this);
    var angle = 360*Math.PI/180/count*num;
    var fulldiameter = $(".round-menu").width(); //width(height) of menu circle

    setPosition(item, angle, 100);

    menu_links[num] = item.attr('href');
    num++;
  });
}


function Rotate(item, angle){
  var angledeg = 'rotate(' + angle + 'deg)';
  item.css({
    "-webkit-transform": angledeg,
    "-moz-transform": angledeg,
    "-o-transform": angledeg,
    "-ms-transform": angledeg,
    "transform": angledeg
  });
}
function MakeMenu(itemsCount){
  Regulation(itemsCount);
  Rotate($("#round-menu-pie .round-menu-pie-quarter"), Math.floor(180 - 360/itemsCount));
}
$(window).on("load", function(){

  $('#roundy-controls-toggle').on('click', function(){
    $('#roundy-controls').toggleClass('active');
  });

  $('#roundy-dark-toggle').on('click', function(){
    $('body').toggleClass('roundy-mode-dark');
    $(this).toggleClass('active');
  });

  $('#roundy-bigpage-toggle').on('click', function(){
    $('.roundy-body').toggleClass('roundy-bigpage');
    window.dispatchEvent(resizeEvent);
  });

  $('#roundy-bg-image-toggle').on('click', function(){
    $('#roundy-bg-image').toggleClass('roundy-hidden');
    $(this).toggleClass('active');
  });

  $('#roundy-bg-video-toggle').on('click', function(){
    $('#roundy-bg-video').toggleClass('roundy-hidden');
    $(this).toggleClass('active');
  });

  roundyMenuClose();

  $('#roundy-menu-toggle').on('click', function(){
    roundyMenuToggle();
  });

  var countMenuItems = $(".round-menu .round-menu-items > .round-menu-item").length;
  MakeMenu(countMenuItems);
  var typedOptions = {
        strings: [".",
                  "This is a place for young developers to learn, grow and build great products <i class='far fa-heart'></i>.",
                  ],
        typeSpeed: 50,
        loop: true,
        //shuffle: true,
        smartBackspace: true,
        backDelay: 5000
      }
    
      var typed = new Typed(".menu-subtitle span", typedOptions);
})
