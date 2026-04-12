// Day 17: Countdown Timer

let timer = null;
let timeLeft = 0;

// Start Timer
function startTimer() {
    let minutes = document.getElementById("minutes").value;

    if (minutes === "" || minutes <= 0) {
        alert("Enter valid minutes!");
        return;
    }

    timeLeft = minutes * 60;
    updateDisplay();

    clearInterval(timer);
    timer = setInterval(updateTime, 1000);
}

// Update time
function updateTime() {
    if (timeLeft <= 0) {
        clearInterval(timer);
        alert("Time's up!");
        return;
    }

    timeLeft--;

    updateDisplay();
}

// Update UI
function updateDisplay() {
    let mins = Math.floor(timeLeft / 60);
    let secs = timeLeft % 60;

    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    document.getElementById("display").innerText = `${mins}:${secs}`;
}

// Reset Timer
function resetTimer() {
    clearInterval(timer);
    document.getElementById("display").innerText = "00:00";
}
