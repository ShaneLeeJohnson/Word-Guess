const timerDiv = document.querySelector('#timer');
const startButton = document.querySelector('#start');
const winsTitle = document.querySelector('#winsTitle');
const lossesTitle = document.querySelector('#lossesTitle');
const winCount = document.querySelector('#winCount');
const lossCount = document.querySelector('#lossCount');
const message = document.querySelector('#message');
const wordToGuess = document.querySelector('#wordToGuess');

let losses = 0;
let wins = 0;

const words = ['apple', 'cat'];

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

const chosenWord = getRandomWord();
console.log(chosenWord);

function createBlanks(word) {
    const blanks = [];
    for (let i = 0; i < word.length; i++) {
        blanks.push('_');
    }
    return blanks;
}

const wordBlanks = createBlanks(chosenWord);
console.log(wordBlanks);

function hideTotals() {
    winsTitle.style.display = 'none';
    lossesTitle.style.display = 'none';
};

function displayTotals() {
    winsTitle.style.display = 'block';
    lossesTitle.style.display = 'block';
};

function gameStart() {
    hideTotals();
    startButton.style.display = 'none';
    message.textContent = "";
    wordToGuess.textContent = wordBlanks;

    let timer = 5

    let timeInterval = setInterval(function () {
        timerDiv.textContent = timer;
        timer--;

        if (timer < 0) {
            clearInterval(timeInterval);
            displayTotals();
            losses ++;
            lossCount.textContent = losses;
            startButton.style.display = 'block';
            message.textContent = "GAME OVER!"
        }
    }, 1000)
}

startButton.addEventListener('click', function (event) {
    event.preventDefault();
    gameStart();
});

hideTotals();