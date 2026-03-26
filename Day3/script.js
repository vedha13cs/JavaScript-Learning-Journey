// Day 3: Counter App

let count = 0;

// Increase
function increase() {
    count++;
    updateDisplay();
}

// Decrease
function decrease() {
    count--;
    updateDisplay();
}

// Reset
function reset() {
    count = 0;
    updateDisplay();
}

// Update UI
function updateDisplay() {
    document.getElementById("count").innerText = count;
    console.log("Current count:", count);
}
