
const key = "29dbdb5b52394d31fb0823709d986fb3";
const city = "Curitiba";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;



async function getWeatherData() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("location").textContent = data.name;
        document.getElementById("description").textContent = data.weather[0].description;
        document.getElementById("temp").textContent = `${Math.round(data.main.temp - 273.15)}°C`;


        const weatherDiv = document.getElementById('three');
        for (let i = 0; i < 3; i++) {
            const date = new Date(data.list[i].dt * 1000).toLocaleDateString();
            const temp = data.list[i].main.temp;
            const description = data.list[i].weather[0].description;

            const forecast = `<p>${date}: ${temp}°C, ${description}</p>`;
            weatherDiv.innerHTML += forecast;
        }


        document.getElementById("weather").innerHTML = weatherData;
    } catch (error) {
        console.error("Error with catching weather data:", error);
    }
}

getWeatherData();

//close alert box
const today = new Date().getDay();

//alert box
if (today === 1 || today === 2 || today === 3) {
    // Mostra o alert box
    document.getElementById("Myalert").style.display = "block";
}