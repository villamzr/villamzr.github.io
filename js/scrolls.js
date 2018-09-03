$(document).ready(function(){

		if ($(window).width() <= 639) {

		$('#perfilCabecera').on('click', function(){
			$('html, body').animate({scrollTop:0}, 1000);
		})

		$('#profile').on('click', function(){
			$('html, body').animate({scrollTop:0}, 1000);
		});

		$('#sobremi').on('click', function(){
			$('html, body').animate({scrollTop:$('.sobremi').offset().top}, 1000);
		});

		$('#educacion').on('click', function(){
			$('html, body').animate({scrollTop:$('.educacion').offset().top}, 1000);
		});

		$('#habilidades').on('click', function(){
			$('html, body').animate({scrollTop:$('.habilidades').offset().top}, 1000);
		});

		$('#portafolio').on('click', function(){
			$('html, body').animate({scrollTop:$('.portafolio').offset().top}, 1000);
		});
	}
})