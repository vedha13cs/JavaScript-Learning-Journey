// Day 28: Character Counter

function countChars() {
    let text = document.getElementById("textInput").value;
    let length = text.length;

    document.getElementById("count").innerText = length + " characters";
}
