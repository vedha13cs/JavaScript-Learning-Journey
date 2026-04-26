// Day 29: Modal Popup

let modal = document.getElementById("modal");

// Open modal
function openModal() {
    modal.style.display = "block";
}

// Close modal
function closeModal() {
    modal.style.display = "none";
}

// Close when clicking outside
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
