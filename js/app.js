$(document).ready(function () {
  //Hero Slider
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    smartSpeed:1000,
    items: 1,
    dots:false,
    navText:['PREV','NEXT'],
    responsive: {
      0: {},
      600: {},
      1000: {},
    },
  });
});
