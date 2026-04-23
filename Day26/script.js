// Day 26: Image Preview

let input = document.getElementById("imageInput");
let preview = document.getElementById("preview");

input.addEventListener("change", function () {
    let file = input.files[0];

    if (file) {
        let reader = new FileReader();

        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = "block";
        };

        reader.readAsDataURL(file);
    }
});
