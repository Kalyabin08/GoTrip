


$(document).ready(function() {

$(function() {
    $('.slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        fade: false,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        
      });
    })



  $('.menu_burger').click(function() {
    $('.menu_burger, .nav_list_mobile').toggleClass('active')
  })

})