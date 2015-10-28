$(function () {
  var $win = $(window);
  // definir mediente $pos la altura en píxeles desde el borde superior de la ventana del navegador y el elemento
  var $pos = 140;
  var $sliderAltura = $('#elSlider').height();

      
  $win.scroll(function () {

    if ($win.scrollTop() <= $sliderAltura-$pos){
        $("nav").removeClass("blue lighten-3").addClass("transparent");
		$(".texto-nav").removeClass("black-text").addClass("white-text");
		$("#logo").removeClass("peque").addClass("grande");
		$("#soclal-button").removeClass("bajo-slider").addClass("sobre-slider");
		$("#nav-page-wrapper").removeClass("bajo-slider").addClass("sobre-slider");
    } else{
        $("nav").removeClass("transparent").addClass("blue lighten-3");
		$(".texto-nav").removeClass("white-text").addClass("black-text");
		$("#logo").removeClass("grande").addClass("peque");
		$("#soclal-button").removeClass("sobre-slider").addClass("bajo-slider");
		$("#nav-page-wrapper").removeClass("sobre-slider").addClass("bajo-slider");
    }
});
$(window).resize(function() {
	  $sliderAltura = $('#elSlider').height();
	  $('.contenido').css('top', $sliderAltura);
});
$(document).ready(function(){
      $('.slider').slider({full_width: true});
	  $('.slider2').slider({full_width: true});
	  $('.parallax').parallax();
	  $('.scrollspy').scrollSpy();
	  $('.contenido').css('top', $sliderAltura);
	  $('.button-collapse').sideNav();
    });
});
