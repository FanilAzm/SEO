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

  function animateGraph(item, selector) {
    $(item).hover(function(){
      $(selector).css({'transform': 'translateX(-10%)'})
    }, function() {
      $(selector).css({'transform': 'translateX(0)'})
    })
  }

  $('.funnel-item__wrap').each(function(index, item) {
    if (index === 0) {
      animateGraph(item, '.funnel-figure__blue');
    }
    if (index === 1) {
      animateGraph(item, '.funnel-figure__green');
    }
    if (index === 2) {
      animateGraph(item, '.funnel-figure__yellow');
    }
    if (index === 3) {
      animateGraph(item, '.funnel-figure__red');
    }
  });

  $('#fullpage').fullpage({
    navigation: true,
    responsiveWidth: 700,
    anchors: ['advertising', 'funnel', 'custom', 'testing', 'conversion', 'selling', 'install', 'price', 'order', 'cases'],
    parallax: true,
    onLeave: function(origin, destination, direction){
      if (origin.index === 1 && direction == 'down') {

        $('.funnel-graph').css({
          'opacity': '0'
        });
        $('.funnel-graph-img').css({
          'opacity': '1',
          'transform': 'scale(1.2) translate(45%, 1850px)',
          'transition': 'all .9s ease'
        });
        if (document.documentElement.clientWidth <= 1400) {
          $('.funnel-graph-img').css({
            'transform': 'scale(1.2) translate(40%, 1850px)',
            'transition': 'all .9s ease'
          });
        }
        if (document.documentElement.clientWidth <= 1250) {
          $('.funnel-graph-img').css({
            'transform': 'scale(1.2) translate(35%, 1850px)',
            'transition': 'all .9s ease'
          });
        }
        if (document.documentElement.clientWidth <= 900) {
          $('.funnel-graph-img').css({
            'transform': 'scale(1.2) translate(20%, 1850px)',
            'transition': 'all .3s ease'
          });
        }
        if (document.documentElement.clientWidth <= 1150) {
          $('.funnel-graph').css({
            'opacity': '1'
          });
        }
      }
      if (origin.index === 2 && direction == 'up') {
        $('.funnel-graph-img').css({
          'transform': 'scale(.15) translate(0px, 0px)',
          'transition': 'all .9s ease'
        });
      }
      

      function stylePosition(sectionNum, vertDirection, selector, posX, posY) {
        if (origin.index === sectionNum && direction == vertDirection) {
          $(selector).css({
            'background-position': `${posX}% ${posY}px`
          })
        }
      }
      
      // testing
      stylePosition(2, 'down', '.testing', '110', '0');
      stylePosition(3, 'up', '.testing', '110', '-1000');

      if (document.documentElement.clientWidth <= 1400) {
        stylePosition(2, 'down', '.testing', '150', '0');
        stylePosition(3, 'up', '.testing', '150', '-1000');
      }
      if (document.documentElement.clientWidth <= 1250) {
        stylePosition(2, 'down', '.testing', '175', '0');
        stylePosition(3, 'up', '.testing', '175', '-1000');
      }
      if (document.documentElement.clientWidth <= 1150) {
        stylePosition(2, 'down', '.testing', '200', '0');
        stylePosition(3, 'up', '.testing', '200', '0');
      }
      if (document.documentElement.clientWidth <= 768) {
        stylePosition(2, 'down', '.testing', '0', '0');
        stylePosition(3, 'up', '.testing', '0', '0');
      }
      
      // conversion
      stylePosition(3, 'down', '.conversion', '92', '0');
      stylePosition(4, 'up', '.conversion', '92', '-1000');

      if (document.documentElement.clientWidth <= 1400) {
        stylePosition(3, 'down', '.conversion', '110', '0');
        stylePosition(4, 'up', '.conversion', '110', '-1000');
      }
      if (document.documentElement.clientWidth <= 1250) {
        stylePosition(3, 'down', '.conversion', '120', '0');
        stylePosition(4, 'up', '.conversion', '120', '-1000');
      }
      if (document.documentElement.clientWidth <= 1150) {
        stylePosition(3, 'down', '.conversion', '120', '0');
        stylePosition(4, 'up', '.conversion', '120', '0');
      }
      if (document.documentElement.clientWidth <= 1024) {
        stylePosition(3, 'down', '.conversion', '80', '0');
        stylePosition(4, 'up', '.conversion', '80', '0');
      }
      if (document.documentElement.clientWidth <= 657) {
        stylePosition(3, 'down', '.conversion', '0', '0');
        stylePosition(4, 'up', '.conversion', '0', '0');
      }

      // selling
      stylePosition(4, 'down', '.selling', '65', '0');
      stylePosition(5, 'up', '.selling', '65', '-500');

      if (document.documentElement.clientWidth <= 1400) {
        stylePosition(4, 'down', '.selling', '72', '0');
        stylePosition(5, 'up', '.selling', '72', '-500');
      }
      if (document.documentElement.clientWidth <= 1250) {
        stylePosition(4, 'down', '.selling', '75', '0');
        stylePosition(5, 'up', '.selling', '75', '-500');
      }
      if (document.documentElement.clientWidth <= 1150) {
        stylePosition(4, 'down', '.selling', '80', '0');
        stylePosition(5, 'up', '.selling', '80', '0');
      }
      if (document.documentElement.clientWidth <= 900) {
        stylePosition(4, 'down', '.selling', '70', '0');
        stylePosition(5, 'up', '.selling', '70', '0');
      }
      if (document.documentElement.clientWidth <= 768) {
        stylePosition(4, 'down', '.selling', '50', '0');
        stylePosition(5, 'up', '.selling', '50', '0');
      }
      if (document.documentElement.clientWidth <= 425) {
        stylePosition(4, 'down', '.selling', '70', '0');
        stylePosition(5, 'up', '.selling', '70', '0');
      }

    },
    afterLoad: function(origin, destination, direction) {
      if (origin.index === 2 && direction == 'up') {
        $('.funnel-graph').css({
          'opacity': '1'
        });
        $('.funnel-graph-img').css({
          'opacity': '0'
        });
      }
    },
    afterResize: function(width, height) {
      if (width < 1400) {
        // console.log('width');
      }
    },
    scrollingSpeed: 900,
  });

});