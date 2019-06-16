var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];


function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

function flipCard(cardId) {

	var flippedCard = cards[cardId];
	console.log(flippedCard);

	cardsInPlay.push(flippedCard);
	console.log(cardsInPlay);

	console.log("User flipped" + " " + flippedCard + ".");

	if (cardsInPlay.length === 2) {
		checkForMatch()
	};
}

flipCard(0);
flipCard(3);