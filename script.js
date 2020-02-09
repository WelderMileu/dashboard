(function() {
	'use strict';

	// Selector
	const $ = (event) =>  document.querySelector(event);

	// Menu do header.
	$('#toggle-header-menu').addEventListener('click',() => {
		$('.navbar').classList.toggle('toggle-header');
	});

	// Menu do usuario.
	$('#toggle-menu').addEventListener('click',() => {
		$('.menu').classList.toggle('toggle-menu-menu');
	});

})();