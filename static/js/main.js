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


  new fullpage('#fullpage', {
    navigation: true,
    responsiveWidth: 700,
    anchors: ['home', 'about-us', 'contact'],
    parallax: true,
    onLeave: function(origin, destination, direction){
        console.log("Leaving section" + origin.index);
    },
    scrollingSpeed: 900,
  });

});