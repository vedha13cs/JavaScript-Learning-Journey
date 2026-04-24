// Day 27: Password Toggle

function togglePassword() {
    let password = document.getElementById("password");
    let button = document.querySelector("button");

    if (password.type === "password") {
        password.type = "text";
        button.innerText = "Hide";
    } else {
        password.type = "password";
        button.innerText = "Show";
    }
}
