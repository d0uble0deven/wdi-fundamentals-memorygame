console.log("Up and running!");


var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: "images/king-of-diamonds.png"
	}
];



var cardsInPlay = [];


function createBoard() {
	for (var i = 0; i < cards.length; i++) { //good
		

		var cardElement = document.createElement('img'); //good
		cardElement.setAttribute("src", "images/back.png"); //good
		cardElement.setAttribute("data-id", i);//good
		cardElement.addEventListener("click", flipCard); //good
		document.getElementById("game-board").appendChild(cardElement); //good
	}

};



function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
};



function flipCard() {
	
	const cardId = this.getAttribute("data-id");//good
//where this.seAttribute was	

//where if statement was
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	this.setAttribute("src", cards[cardId].cardImage);//issue

	if (cardsInPlay.length === 2) {
	checkForMatch();	
	} 
};



//where createBoard was




createBoard();

//should reset after getting match
//should alert before it flips





