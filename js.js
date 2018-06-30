$(function(){
  $('.burger-block').click(function(){
   $('.navbar').toggleClass('menu-opened');
 })
  $(document).click(function(event){
    if ($(event.target).closest(".burger-block").length ) 

     return;
   $('.navbar').removeClass('menu-opened'); 
   event.stopPropagation();
 });
});

$(document).ready(function(){
  $('a[href*=\\#]:not([href=\\#carouselExampleControls])').on("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 777);
    e.preventDefault();
    return false;
  });
});

$('.carousel').carousel({
  interval: 2000
});