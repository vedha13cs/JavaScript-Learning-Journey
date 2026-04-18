// Day 21: Dark Mode Toggle

// Load saved mode
window.onload = function () {
    let mode = localStorage.getItem("mode");

    if (mode === "dark") {
        document.body.classList.add("dark");
    }
};

// Toggle mode
function toggleMode() {
    document.body.classList.toggle("dark");

    // Save mode
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
}
