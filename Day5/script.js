// Day 5: Digital Clock

function updateClock() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock").innerText = time;
}

// Update every second
setInterval(updateClock, 1000);

// Initial call
updateClock();
