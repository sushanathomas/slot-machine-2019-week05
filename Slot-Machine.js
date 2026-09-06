// These are the possible symbols
const symbols = ['🍒', '🍋', '⭐', '💎', '7️⃣'];

// My starting balance and current bet
let moneyBalance = 300;
let currentBet = 0;

// My min & max amount
const minBetAmount = 5;
const maxBetAmount = 50;

// Selecting my elements in my HTML document

const reelOne = document.querySelector('#reelOne');

const reelTwo = document.querySelector('#reelTwo');

const reelThree = document.querySelector('#reelThree');

const balanceDisplay = document.querySelector('#balance');

const currentBetDisplay = document.querySelector('#currentBet');

const result = document.querySelector('#result');

// Minimum Bet
document.querySelector('#minBet').addEventListener('click', minBet);

function minBet() {
    //To set the minimum bet to the lowest amont and then display

    currentBet = minBetAmount;
    currentBetDisplay.innerText = currentBet;
}

// Maximum Bet
document.querySelector('#maxBet').addEventListener('click', maxBet);

function maxBet() {
    //Setting the max bet to the highest and then display

    currentBet = maxBetAmount;
    currentBetDisplay.innerText = currentBet;
}

//Random Symbol Function

function getRandomSymbol() {
    // Picking a random position from the symbols array
    const randomNumber =
        Math.floor(Math.random() * symbols.length);

    // Return the symbol from that position
    return symbols[randomNumber];
}

//Spin the Button

document.querySelector('#spinBtn').addEventListener('click', spin);


function spin() {

    // Make sure the player selected a bet
    if (currentBet === 0) {

        result.innerText = 'Please choose a bet first.';
        return;
    }

    // Make sure player has enough money
    if (currentBet > balance) {

        result.innerText = 'You do not have enough money.';
        return;
    }

    // Remove bet from player's balance
    balance = balance - currentBet;


    // Pick a random symbol for each reel
    const firstReel = getRandomSymbol();

    const secondReel = getRandomSymbol();

    const thirdReel = getRandomSymbol();

    // Display symbols on webpage
    reelOne.innerText = firstReel;

    reelTwo.innerText = secondReel;

    reelThree.innerText = thirdReel;

    //Checking to see who wins

    if (
        firstReel === secondReel &&
        secondReel === thirdReel
    ) {

        // Player wins 5 times their bet
        const winnings = currentBet * 5;

        // Add winnings to balance
        balance = balance + winnings;


        // Show winning message
        result.innerText =
            'You won $' + winnings + '!';

    } else {

        // Show losing message
        result.innerText = 'Sorry, you lost.';

    }

    // Update balance on webpage
    balanceDisplay.innerText = balance;

}