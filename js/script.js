$(document).ready(function(){

	var show = 0;

	if (screen.width <=700) {
		$('.content-menu').addClass("content-menu2");
	}

	$('.show').on('click', function(){

		if (show == 1){

			$('.content-menu').addClass("content-menu2");
			$('#prof').show(600);
			show = 0;

		}else{
			$('.content-menu').removeClass("content-menu2");
			$('#prof').hide(600);
			show = 1;

		}
	});

	

});