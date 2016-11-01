// Test javascript connection

console.log("JS file is connected to HTML! Woo!")

//Setup cards

var cards = ['king', 'queen', 'king', 'queen'];

var cardsInPlay = [];





var createBoard = function() {

	var gameBoard = document.getElementById('game-board')

	for (var j = 0; j < cards.length; j++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[j])
		gameBoard.appendChild(cardElement);
		cardElement.addEventListener('click', isTwoCards)
	}
};


var isTwoCards = function() {

  cardsInPlay.push(this.getAttribute('data-card'));

  if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='images/king.png' height = '200px' width = '150px' alt = 'King'>"; 
	} else {
		this.innerHTML = "<img src='images/queen.png' height = '200px' width = '150px' alt ='Queen'>";
	}

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];

  }
}

var isMatch = function(cards){

	if (cards[0] === cards[1]) {
		alert("You got a match!");
	}	else {
		alert("Sorry, try again.");
	}
		
}

createBoard();



/* if (cardOne === cardFour) {
	alert("You found a match!")
}*/