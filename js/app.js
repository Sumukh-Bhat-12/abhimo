

$(document).ready(function () {
  //Hero Slider
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    smartSpeed: 1000,
    items: 1,
    dots: false,
    navText: ["PREV", "NEXT"],
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      },
    },
  });

  //Project Slider
  $("#project-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    smartSpeed: 1000,
    dots: false,
    margin: 24,
    navText: ["PREV", "NEXT"],
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 0,
      },
      768: {
        items: 2,
      },
      1140: {
        items: 2,
        center: true,
        dots: true,
      },
    },
  });

    //Reviews Slider
    $("#reviews-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      smartSpeed: 800,
      dots: true,
      items:1,
     
    });
});

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
