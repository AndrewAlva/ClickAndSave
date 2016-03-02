jQuery(document).ready(function($) {

	$('#restartPage').click(function() {
		location.reload();
	});

	$('.quotes').click(function() {
		// quotesArray[0].remove();
		$('.quotes:first-child').remove();
		$('.quotes:first-child').removeClass('hiddenQuote');
	});

	// FIRST DECISION INTERACTION
		$('#less20').click(function() {
			$('.firstQuote').remove();
			$('.quotes:first-child').removeClass('hiddenQuote');
			$('#quote1').prepend('Meh, no son tantos.');
		});

		$('#yes20').click(function() {
			$('.firstQuote').remove();
			$('.quotes:first-child').removeClass('hiddenQuote');
			$('#quote1').prepend('Si, son mas o menos los que yo te mandaría.');
		});

		$('#more20').click(function() {
			$('.firstQuote').remove();
			$('.quotes:first-child').removeClass('hiddenQuote');
			$('#quote1').prepend('Wow, más de lo que esperaba.');
		});
	// END FIRST INTERACTION

	// SET TIMER FOR LOADING
		$('#quote1').click(function() {
			
		});
	// END SET TIMER

	// ABORT SITE
		$('.quotes:last-child').click(function() {
			window.location.href = 'https://vimeo.com/86358930';
		});
	// END ABORT


});