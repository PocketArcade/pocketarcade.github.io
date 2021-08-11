// Preloader
(function($){
	'use strict';
	  $(window).on('load', function () {
		  if ($(".cont-wrapper").length > 0)
		  {
			  $(".cont-wrapper").fadeOut("slow");
		  }
	  });
  })(jQuery)



// Load main website
function goToMain () {
	
	// audio play on click
	const audio = new Audio("/sounds/coinsound.mp3");

	if (audio.paused) {
			audio.play();
	} else{
		audio.pause();
		audio.currentTime = 0
	}
	
	// Hide main-wrapper on click
	// create new link tag
	var link = document.createElement('link');

	// set properties of link tag
	link.href = '../css/hideMain.css';
	link.rel = 'stylesheet';
	link.type = 'text/css';

	// Loaded successfully
	link.onload = function() {
		console.log('success');
	};

	// Loading failed
	link.onerror = function() {
		console.log('error');
	};

	// append link element to html
	document.body.appendChild(link);
		
	// load whatsapp chat button
	var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?9450';
	var s = document.createElement('script');
	var options = null;
    

    s.type = 'text/javascript';
	s.async = true;
	s.src = url;
	options = {
		"enabled":true,
		"chatButtonSetting":{
		"backgroundColor":"#4dc247",
		"ctaText":"",
		"borderRadius":"25",
		"marginLeft":"0",
		"marginBottom":"70",
		"marginRight":"5",
		"position":"right"
		},
		"brandSetting":{
		"brandName":"Pocket Arcade MX",
		"brandSubTitle":"Típicamente responde en unas horas",
		"brandImg":"./images/PocketArcade_Avatar-White.png",
		"welcomeText":"¡Hola!\n¿Cómo podemos ayudarte?",
		"messageText":"Hola, quiero pedir más información para la renta de la consola.",
		"backgroundColor":"#0a5f54",
		"ctaText":"Enviar Mensaje",
		"borderRadius":"25",
		"autoShow":false,
		"phoneNumber":"528182768086"
		}
		};

		s.onload = function() {
			CreateWhatsappChatWidget(options);
	};

	var x = document.getElementsByTagName('script')[0];
	x.parentNode.insertBefore(s, x);
  
}


// for mobile apps
addEventListener("load", function () {
    setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
    window.scrollTo(0, 1);
}

// You can also use "$(window).load(function() {"
$(function () {
    // Slideshow 4
    $("#slider3").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        before: function () {
            $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
            $('.events').append("<li>after event fired.</li>");
        }
    });

});

// smooth scrolling

$(document).ready(function () {
    $("#lightGallery").lightGallery({
        mode: "fade",
        speed: 800,
        caption: true,
        desc: true,
        mobileSrc: true
    });
});

$(document).ready(function () {
    $("#owl-demo").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds
        autoPlay: true,
        navigation: true,

        items: 4,
        itemsDesktop: [640, 5],
        itemsDesktopSmall: [414, 4]

    });

});

jQuery(document).ready(function ($) {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
});


// scrolling icon

$(document).ready(function () {
    /*
        var defaults = {
        containerID: 'toTop', // fading element id
        containerHoverID: 'toTopHover', // fading element hover id
        scrollSpeed: 1200,
        easingType: 'linear' 
        };	
    */

    $().UItoTop({
        easingType: 'easeOutQuart'
    });

});