$(function() {
	    $('a.page-scroll').bind('click', function(event) {
	        var $anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 2000, 'easeInOutExpo');
	        event.preventDefault();
	    });
	});

	// Highlight the top nav as scrolling occurs
	$('body').scrollspy({
	    target: '.navbar-fixed-top'
	})

	$("#owl-demo").owlCarousel({
        autoPlay: 3000,
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
      });
	// maps
	var map = new GMaps({
	  div: '.map',
	  lat: 12.876543,
	  lng: 77.604542,
	  zoom:16
	});

	map.addMarker({
  	lat: 12.876543,
  	lng: 77.604542,
  	title: 'R.P. Innovations',
  	infoWindow: {
  	content: '<p>#30/6/1, 1st Floor, krishna Layout, 4th Cross, 4th A main, hulimavu, Bangalore-76</p>'
	}
});

	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function() {
	    $('.navbar-toggle:visible').click();
});