// Day 22: Tabs UI

function showTab(tabId) {
    let contents = document.querySelectorAll(".content");

    // Hide all
    contents.forEach(content => {
        content.style.display = "none";
    });

    // Show selected
    document.getElementById(tabId).style.display = "block";
}

// Show default tab
window.onload = function () {
    showTab("home");
};
