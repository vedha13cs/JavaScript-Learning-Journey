// Day 15: Notes App with Local Storage

let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Load notes on page load
window.onload = function () {
    displayNotes();
};

function addNote() {
    let input = document.getElementById("noteInput");
    let noteText = input.value;

    if (noteText === "") {
        alert("Write something!");
        return;
    }

    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));

    input.value = "";
    displayNotes();
}

function displayNotes() {
    let container = document.getElementById("notesContainer");
    container.innerHTML = "";

    notes.forEach((note, index) => {
        let div = document.createElement("div");
        div.classList.add("note");

        div.innerText = note;

        let btn = document.createElement("button");
        btn.innerText = "X";
        btn.classList.add("deleteBtn");

        btn.onclick = function () {
            deleteNote(index);
        };

        div.appendChild(btn);
        container.appendChild(div);
    });
}

function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}
