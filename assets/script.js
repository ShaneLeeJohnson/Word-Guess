const timerDiv = document.querySelector('#timer');
const startButton = document.querySelector('#start');
const winsTitle = document.querySelector('#winsTitle');
const lossesTitle = document.querySelector('#lossesTitle');
const winCount = document.querySelector('#winCount');
const lossCount = document.querySelector('#lossCount');
const message = document.querySelector('#message');

let losses = 0;
let wins = 0;

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