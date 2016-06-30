;(function($){

	'use strict'; // ecma script 5

	var menu    = $('#mf-menu-right' ),
	push_buttom = $('.mf-push-menu' ),
	menu_overlay = $('.mf-menu-overlay'),
	body        = $('body');

	push_buttom.on('click', function() {
		$(this).toggleClass('mf-push-menu--active');

		if(!body.hasClass('mf-pushing-menu')) {
			body.addClass('mf-pushing-menu');
		}

		body.toggleClass('mf-pushing-menu-toright');

		menu.toggleClass('mf-menu--opened' );
	});

	menu_overlay.on('click', function() {
		$('.mf-push-menu--active').trigger('click');
	});

})(jQuery);


