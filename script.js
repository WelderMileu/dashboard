(function() {
	'use strict';

	const $ = (event) =>  document.querySelector(event);


	$('#toggle-header-menu').addEventListener('click',() => {
		$('.navbar').classList.toggle('toggle-header');
	});

})();