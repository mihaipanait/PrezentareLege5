
// Tooltips for Social Links
$('.tooltip-social').tooltip({
  selector: "a[data-toggle=tooltip]"
})

// Flexslider
$(document).ready(function($) {
	$('#main-slider').flexslider({
		animation: "fade",
		slideshowSpeed: 6000,
		controlNav: false,
		directionNav: false
	});
});

// Smooth-scroll
$(document).ready(function($) {
  smoothScroll.init({
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
  });
});

// wow-js
$(document).ready(function($) {
  var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true        // act on asynchronously loaded content (default is true)
  });
  wow.init();
  wow.sync();
});

// Owl Top-slider
$(document).ready(function($) {
      $("#owl-top-slider").owlCarousel({
 
      navigation : false,
      slideSpeed : 400,
      paginationSpeed : 400,
      singleItem:true,
      dots: false,
      autoPlay : true,
      autoplayHoverPause: true, 
  });
});

// Owl Carousel
$(document).ready(function($) {
      $("#pictures-slider").owlCarousel({
        navigation : true
      });
});

// Custom Tab styles
$(document).ready(function($) {
	$(".i-div").on('click', function() {
	       $(".android-div").fadeOut();
	       $(".windows-div").fadeOut();
	       $(".iphone-div").fadeIn();
	});

	$(".a-div").on('click', function() {
	       $(".android-div").fadeIn();
	       $(".windows-div").fadeOut();
	       $(".iphone-div").fadeOut();
	});

	$(".w-div").on('click', function() {
	       $(".android-div").fadeOut();
	       $(".windows-div").fadeIn();
	       $(".iphone-div").fadeOut();
	});
});

// Prettyphoto
$(document).ready(function() {
	$("a[class^='prettyPhoto']").prettyPhoto({theme:'pp_default'});
});

// Google Map
$(function () {
	var map = new GMaps({
	el: "#map",
	lat: 44.430257,
	lng: 26.083796,
          scrollwheel: false,
          zoom: 15, 
          zoomControl : true,
          zoomControlOpt: {
            style : "BIG",
            position: "TOP_LEFT"
          },
          panControl : true,
          streetViewControl : false,
          mapTypeControl: false,
          overviewMapControl: false
      });
        
      var styles = [
            {
              stylers: [
                { hue: "#00ffe6" },
                { saturation: -100 }
              ]
            }
      ];
        
      map.addStyle({
            styledMapName:"Styled Map",
            styles: styles,
            mapTypeId: "map_style"  
      });
        
      map.setStyle("map_style");

      map.addMarker({
        lat: 44.430257,
        lng: 26.083796,
        icon: "images/marker.png"
      });
});


