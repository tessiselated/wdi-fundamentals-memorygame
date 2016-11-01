console.log("JS file is connected to HTML! Woo!")
var cardOne = "king";
var cardTwo = "queen";
var cardThree = "queen";
var cardFour = "king";

if (cardOne === cardFour) {
	alert("You found a match!")
}

var createCards = function() {

	var gameBoard = document.getElementById('game-board')
	for (var i = 0; i < 4; i++) {
	var cardElement = document.createElement('div');
	cardElement.className = 'card';
	gameBoard.appendChild(cardElement);
	}
};
createCards();