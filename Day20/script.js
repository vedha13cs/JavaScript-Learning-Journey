// Day 20: Movie Search App

async function searchMovie() {
    let movie = document.getElementById("movieInput").value;

    if (movie === "") {
        alert("Enter a movie name!");
        return;
    }

    let apiKey = "YOUR_API_KEY"; // 🔴 Replace this
    let url = `https://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.Response === "False") {
            document.getElementById("movieResult").innerText = "Movie not found!";
            return;
        }

        document.getElementById("movieResult").innerHTML = `
            <h2>${data.Title}</h2>
            <p>Year: ${data.Year}</p>
            <p>Genre: ${data.Genre}</p>
            <img src="${data.Poster}">
        `;

    } catch (error) {
        console.log("Error:", error);
    }
}
