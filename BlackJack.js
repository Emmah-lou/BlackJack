// function to create a deck of cards
let deck = [];
let newDeck = [];
function creatDeck() {
  let suits = ['H', 'C', 'D', 'S'];
  let ranks = ['2', '3', '4', '5','6', '7', '8', '9', 'T', 'J','Q', 'K', 'A'];
    
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      deck.push(suits[i] + ranks[j]);
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


creatDeck();
shuffleDeck(deck);
console.log(newDeck);
