// Day 2: User Input & Interaction

function greetUser() {
    let name = document.getElementById("nameInput").value;

    if (name === "") {
        document.getElementById("output").innerText = "Please enter your name!";
    } else {
        document.getElementById("output").innerText = "Hello, " + name + "!";
    }

    console.log("User entered:", name);
}
