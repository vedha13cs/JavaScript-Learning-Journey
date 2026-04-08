// Day 13: Weather App (API)

async function getWeather() {
    let city = document.getElementById("city").value;

    if (city === "") {
        alert("Enter a city name!");
        return;
    }

    let apiKey = "YOUR_API_KEY"; // 🔴 Replace with your API key
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.cod === "404") {
            document.getElementById("weatherResult").innerText = "City not found!";
            return;
        }

        let result = `
            🌍 City: ${data.name}
            🌡️ Temp: ${data.main.temp}°C
            ☁️ Weather: ${data.weather[0].main}
        `;

        document.getElementById("weatherResult").innerText = result;

    } catch (error) {
        console.log("Error:", error);
    }
}
