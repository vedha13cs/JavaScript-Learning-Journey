// Day 24: Form with Local Storage

// Load saved data
window.onload = function () {
    let name = localStorage.getItem("name");
    let email = localStorage.getItem("email");

    if (name) document.getElementById("name").value = name;
    if (email) document.getElementById("email").value = email;
};

// Save data
function saveData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    alert("Data saved!");
}

// Clear data
function clearData() {
    localStorage.removeItem("name");
    localStorage.removeItem("email");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";

    alert("Data cleared!");
}
