$(document).ready(function(){
	var show = 0;

	if($(window).width() <= 600){
		$('.cont-menu').addClass('cont-menu2');
		show = 0;
	}

	$('.show').on('click', function(){
		if (show == 1) {
			$('.cont-menu').addClass('cont-menu2');
			$('#perfilCabecera').show(500);
			show = 0;
		}else{
			$('.cont-menu').removeClass('cont-menu2');
			$('#perfilCabecera').hide(500);
			show = 1;
		}
	})
})