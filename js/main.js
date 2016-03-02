jQuery(document).ready(function($) {

	$('.quotes').click(function() {
		// quotesArray[0].remove();
		$('.quotes:first-child').remove();
		$('.quotes:first-child').removeClass('hiddenQuote');
	});
});