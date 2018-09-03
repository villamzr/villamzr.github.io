$(document).ready(function(){

		if ($(window).width() <= 600) {

		$('#perfilCabecera').on('click', function(){
			$('html, body').animate({scrollTop:0}, 1000);
		})

		$('#profile').on('click', function(){
			$('html, body').animate({scrollTop:0}, 1000);
		});

		$('#sobremi').on('click', function(){
			$('html, body').animate({scrollTop:250}, 1000);
		});

		$('#educacion').on('click', function(){
			$('html, body').animate({scrollTop:950}, 1000);
		});

		$('#habilidades').on('click', function(){
			$('html, body').animate({scrollTop:1260}, 1000);
		});

		$('#portafolio').on('click', function(){
			$('html, body').animate({scrollTop:2000}, 1000);
		});
	}
})