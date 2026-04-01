function generatePassword() {
    let length = parseInt(document.getElementById("length").value);

    if (isNaN(length) || length < 4 || length > 20) {
        alert("Please enter a length between 4 and 20");
        return;
    }

    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    let password = "";

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    document.getElementById("password").value = password;

    console.log("Generated password:", password);
}

document.getElementById("generateBtn").addEventListener("click", generatePassword);
