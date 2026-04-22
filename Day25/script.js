// Day 25: Search Filter

function filterList() {
    let input = document.getElementById("search").value.toLowerCase();
    let items = document.querySelectorAll("#list li");

    items.forEach(item => {
        let text = item.innerText.toLowerCase();

        if (text.includes(input)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
