let deck = [];
let newDeck = [];
let playerHand = [];
let playerPoints = 0;

//point system: cards 2-9 will count as their corresponding values. 
//Cards 10, jack, queen, and king will all count as 10 points. 
//The ace card can count as 1 or 10.
//21 points wins the game. Over 21 busts.




//constructor for creating array of objects representing cards in deck
class Card {
  constructor(ranks, suits) {
    this.ranks = ranks; 
    this.suits = suits;
    this.value = 0;
  }
}


// function to create a deck of cards
function creatDeck() {
  const suits = ["Heart's", "Club's", "Diamond's", "Spade's"];
  const ranks = ['2', '3', '4', '5','6', '7', '8', '9', '10', "Jack" ,"Queen", "King", "Ace"];
  
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      deck.push(new Card(ranks[j], suits[i]));
    }
  }
  return deck;    
}

//shuffle function creates a new deck for each round shuffled at random.
function shuffleDeck(deck) {  
  for (var i = 0; i < deck.length; i++) {
    let tempCard = deck[i];
    let randomIndex = Math.floor(Math.random() * 52);
    deck[i] = deck[randomIndex];
    deck[randomIndex] = tempCard;
  }
  newDeck = deck;
  return newDeck;
  
}
//get values for cards

// function assignCardValues(card) {
//   switch (card.rank)
// }

//switch to assign value of cards.




creatDeck();

shuffleDeck(deck);
console.log(newDeck);