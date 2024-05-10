
let max;
let min;
let firstCard;
let secondCard;
let cards;
let sum;
let hasBlackJack;
let isAlive
let message;
let messageEl;
let cardsEl;
let sumEl;
let playerEl;
let player;
let firstGame = true;
let startBtn = document.getElementById('startBtn');

function ready() {
    // these are the cards from 2 - 11 (will need it to find random card)
    min = 1;
    max = 13;

    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cards = [firstCard, secondCard];
    sum = cards[0] + cards[1];
    hasBlackJack = false;
    isAlive = true;
    message = "";

    player = {
        name: "Uzair",
        chips: 85
    }

    messageEl = document.getElementById('message-el');
    sumEl = document.getElementById('sum');
    cardsEl = document.getElementById('cards-el');
    playerEl = document.getElementById("player-el");
}


function getRandomCard() {

    let randomCard = Math.floor(Math.random() * ( max - min ) + min );

    if (randomCard === 1) {
        return 11;
    } else if (randomCard >= 11) {
        return 10;
    }

    return randomCard;
}


function startGame() {
    ready();
    renderGame();
    startBtn.style.display = "none";
}




function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? ";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }

    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    playerEl.textContent = player.name + ": $" + player.chips;
    
    cardsEl.textContent = "Cards: ";
    for (let i=0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

}


function newCard() {
    if (isAlive && !hasBlackJack) { // blackJack === false && isAlive === true
        let random = getRandomCard()
        cards.push(random);
        sum += random;
        renderGame();
    }
}


function reset() {
    sum = 0;
    cards = [];
    firstGame = true;
    hasBlackJack = false;
    isAlive = true;
    messageEl.textContent = "Want to play a round?"
    sumEl.textContent = "Sum: "
    cardsEl.textContent = "Cards: "
    startBtn.style.display = "block";

}

if (sum === 0) {
    startGame();
}
