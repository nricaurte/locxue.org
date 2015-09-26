$(function () {
  var $win = $(window);
  // definir mediente $pos la altura en píxeles desde el borde superior de la ventana del navegador y el elemento
  var $pos = 140;
  var $sliderAltura = $('#elSlider').height();
  $win.scroll(function () {

    if ($win.scrollTop() <= $pos){
        $("nav").removeClass("blue lighten-3").addClass("transparent");
		$("nav a").removeClass("black-text").addClass("white-test");
		$("#logo").removeClass("peque").addClass("grande");
    } else{
        $("nav").removeClass("transparent").addClass("blue lighten-3");
		$("nav a").removeClass("while-text").addClass("black-text");
		$("#logo").removeClass("grande").addClass("peque");
    }
});
$(window).resize(function() {
	  $sliderAltura = $('#elSlider').height();
	  $('.contenido').css('top', $sliderAltura);
});
$(document).ready(function(){
      $('.slider').slider({full_width: true});
	  $('.parallax').parallax();
	  $('.scrollspy').scrollSpy();
	  $('.contenido').css('top', $sliderAltura);
	  $('.button-collapse').sideNav();
    });
});
