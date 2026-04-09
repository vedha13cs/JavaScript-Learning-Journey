// Day 14: Quote Generator (Fixed API)

async function getQuote() {
    let url = "https://dummyjson.com/quotes/random";

    try {
        document.getElementById("quote").innerText = "Loading...";
        document.getElementById("author").innerText = "";

        let response = await fetch(url);
        let data = await response.json();

        document.getElementById("quote").innerText = `"${data.quote}"`;
        document.getElementById("author").innerText = `- ${data.author}`;

    } catch (error) {
        document.getElementById("quote").innerText = "Failed to load quote!";
        console.log("Error:", error);
    }
}
