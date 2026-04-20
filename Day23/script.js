// Day 23: Accordion UI

let buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        let content = this.nextElementSibling;

        // Toggle current
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
