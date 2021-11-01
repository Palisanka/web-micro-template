// Se lance quand le DOM est prêt
$(document).ready(function(){

	// affiche le menu responsive
	function hamburger_menu() {
    /* Quand je clique sur l'icône hamburger je rajoute une classe au body */
    $('.header__icon').click(function(e){
        e.preventDefault();
        $('.menu').attr('data-mobile', 'on');
				$('#site-cache').addClass('site-cache');
    });
    /* Je veux pouvoir masquer le menu si on clique sur le cache */
    $('#site-cache').click(function(e){
        $('.menu').attr('data-mobile', 'off');
				$('#site-cache').removeClass('site-cache');
    });
	}
	hamburger_menu();

});

// Se lance quand tout est chargé ( img + script ... )
window.onload = function () {

}
