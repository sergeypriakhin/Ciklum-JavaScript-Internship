(function(){
	let action = $('[data-toggle="header__search"]');
	let toggle = $('.header__menu-item').data('toggle');
	action.click(function(e) {
		e.preventDefault();
		$(this).toggleClass('header__menu-item--active');
		$('.header__search').toggleClass(toggle + '--open');
		if($('.header__search').hasClass('header__search--open')) {
			$('.header').addClass('header--height');
		} else {
			$('.header').removeClass('header--height');
		}
	});
}());

(function(){
	let action = $('.dropdown__toggle');
	action.click(function(e) {
		e.preventDefault();
		$(this).toggleClass('dropdown__toggle--active');
		$(this).siblings('.dropdown__menu').slideToggle();
	});
}());

(function(){
	let action = $('.header__menu-mob-icon-menu');
	action.click(function(e) {
		e.preventDefault();
		$(this).toggleClass('header__menu-item--active');
		$('.header__nav').toggleClass('header__nav--open');
	});
}());