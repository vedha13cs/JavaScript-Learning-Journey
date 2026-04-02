// Day 10: Modal Popup

function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Close when clicking outside modal
window.onclick = function(event) {
    let modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
