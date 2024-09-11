timerDiv = document.querySelector("#timer");
startButton = document.querySelector("#start");

function countdown() {
   let timer = 5

    let timeInterval = setInterval(function () {
        timerDiv.textContent = timer;
        timer --;

        if (timer < 0) {
            clearInterval(timeInterval);
        }
    }, 1000)
}

startButton.addEventListener('click', function (event) {
    event.preventDefault();
    countdown();
});