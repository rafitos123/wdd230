
const key = "29dbdb5b52394d31fb0823709d986fb3";
const city = "Mogi Mirim";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;


async function getWeatherData() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("location").textContent = data.name;
        document.getElementById("description").textContent = data.weather[0].description;
        document.getElementById("temp").textContent = `${Math.round(data.main.temp - 273.15)}°C`;
      
        
       
        document.getElementById("weather").innerHTML = weatherData;
    } catch (error) {
        console.error("Error with catching weather data:", error);
    }
}

getWeatherData();