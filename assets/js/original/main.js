/**!
 * Scripts gerais do site
 */

 ;(function($){

	'use strict'; // ecma script 5

	// button search

	var search_button = $('.mf-search__button'),
		search_close = $('.mf-search__close'),
		search_block = $('.mf-search'),
		body =$('body');

	search_button.on('click', function() {
		// close menu
		if(!body.hasClass('mf-pushing-mobile-menu')) {
			body.removeClass('mf-pushing-mobile-menu mf-show-overlay');
		}

		if(!body.hasClass('mf-pushing-search')) {
			body.addClass('mf-pushing-search');
		} else {
			return;
		}

		search_block.toggleClass('mf-search--active');

		body.toggleClass('mf-show-overlay');
	});

	search_close.on('click', function(){
		body.removeClass('mf-pushing-search');
		search_block.removeClass('mf-search--active');
		body.removeClass('mf-show-overlay');
	});

	$('.mf-pushing-search .mf-overlay').on('click', function() {
		$('.mf-search--active .mf-search__close').trigger('click');
	});


	// mobile menu

	var menu_button = $('#mf-push-menu');

	menu_button.on('click', function(){

		// close search
		if(!body.hasClass('mf-pushing-search')) {
			$('.mf-search--active .mf-search__close').trigger('click');
		}

		body.toggleClass('mf-pushing-mobile-menu');
		body.toggleClass('mf-show-overlay');
	});


	$('.mf-pushing-mobile-menu .mf-overlay').on('click', function() {
		body.removeClass('mf-pushing-mobile-menu mf-show-overlay');
	});

 })(jQuery);
