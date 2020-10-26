;
// Начинать писать отсюда!!!!

$(document).ready(function(){
  
  

  $(".mouse-icon").click(function(){
		$("html, body").animate({
			scrollTop : $(".funnel").offset().top
		}, 900);
  });

  $(".popup").magnificPopup({
    type: "inline",
    fixedContentPos: false,
    removalDelay: 300,
    mainClass: 'mfp-width-zoom'
  });
  

  $('#fullpage').fullpage({
    navigation: true,
    responsiveWidth: 700,
    anchors: ['advertising', 'funnel', 'custom', 'testing', 'conversion', 'selling', 'install', 'price', 'order', 'cases'],
    parallax: true,
    onLeave: function(origin, destination, direction){
      console.log("Leaving section" + origin.index);
      if (origin.index === 1 && direction == 'down') {
        $('.funnel-graph').css({
          'opacity': '0'
        });
        $('.funnel-graph-img').css({
          // '-webkit-transform': '',
          // '-ms-transform': '',
          'transform': 'scale(1.2) translate(45%, 1850px)',
          'transition': 'all .9s ease'
        });
      }
      if (origin.index === 2 && direction == 'up') {
        $('.funnel-graph-img').css({
          // '-webkit-transform': '',
          // '-ms-transform': '',
          'transform': 'scale(.15) translate(0px, 0px)',
          'transition': 'all .9s ease'
        });
      }
      if (origin.index === 2 && direction == 'down') {
        $('.testing').css({
          'background-position': '110% 0px'
        })
        // $('.testing').addClass('onAnimate');
      }
      if (origin.index === 3 && direction == 'up') {
        $('.testing').css({
          'background-position': '110% -1000px'
        })
        // $('.testing').addClass('onAnimate');
      }
      if (origin.index === 3 && direction == 'down') {
        $('.conversion').css({
          'background-position': '92% 0px'
        })
      }
      if (origin.index === 4 && direction == 'up') {
        $('.conversion').css({
          'background-position': '92% -1000px'
        })
      }
      if (origin.index === 4 && direction == 'down') {
        $('.selling').css({
          'background-position': '65% 0px'
        })
      }
      if (origin.index === 5 && direction == 'up') {
        $('.selling').css({
          'background-position': '65% -500px'
        })
      }
    },
    afterLoad: function(origin, destination, direction) {
      // console.log("After Load" + direction);
      if (origin.index === 2 && direction == 'up') {
        $('.funnel-graph').css({
          'opacity': '1'
        });
      }
      if (origin.index === 3) {
        // $('.testing').css({
        //   'background-position': '110% 0px'
        // })
        // $('.testing').addClass('offAnimate');
      }
      
    },
    scrollingSpeed: 900,
  });

});