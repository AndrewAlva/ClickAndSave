// START!
	setTimeout(function(){
		$('#agencyMails').focus();
	},1000);
// END START

jQuery(document).ready(function($) {

	
	// RESTART
		$('#restartPage').click(function() {
			location.reload();
		});
	// END RESTART


	// NORMAL FLOW
		$('.quotes').click(function() {
			// quotesArray[0].remove();
			$('.quotes:first-child').remove();
			$('.quotes:first-child').removeClass('hiddenQuote');
		});
	// END NORMAL FLOW 



	// FIRST DECISION INTERACTION
		$(document).keyup(function(e) {
	  		if (e.keyCode === 13 ) { 
				// fingers(fingersInput);
				var howManyMails = $('#agencyMails').val();


				if(howManyMails <= 10){
					$('#quote1').prepend('Con que ' + howManyMails +' nada más ¿eh? tal vez no debí mandarte esto a ti.');

				} else if (howManyMails > 10 && howManyMails < 20){
					$('#quote1').prepend('Claro, ya me imaginaba de 10 a 20, no está mal.');

				} else if (howManyMails >= 20){
					$('#quote1').prepend('Vaya! <span class="boldie">' + howManyMails +'!?</span> No mientas, me huele a <span class="boldie">bluff.</span>');

				}
				$('.firstQuote').remove();
				$('.quotes:first-child').removeClass('hiddenQuote');
			};
		});
	// END FIRST INTERACTION

	// SET TIMER FOR LOADING
		$('#quote1').click(function() {
			$('#quote2').removeClass('quotes');
			setTimeout(function(){
				$('#quote2').remove();
				$('.quotes:first-child').removeClass('hiddenQuote');
			},2000);
		});
	// END SET TIMER

	// ABORT SITE
		$('.quotes:last-child').click(function() {
			window.location.href = 'https://vimeo.com/86358930';
		});
	// END ABORT


});