// Day 16: Stopwatch

let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

// Start
function start() {
    if (timer !== null) return;

    timer = setInterval(updateTime, 1000);
}

// Stop
function stop() {
    clearInterval(timer);
    timer = null;
}

// Reset
function reset() {
    clearInterval(timer);
    timer = null;

    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();
}

// Update time
function updateTime() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    updateDisplay();
}

// Update UI
function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("display").innerText = `${h}:${m}:${s}`;
}
