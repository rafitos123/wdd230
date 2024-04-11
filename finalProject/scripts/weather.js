document.addEventListener("DOMContentLoaded", function() {
    const apiKey = '29dbdb5b52394d31fb0823709d986fb3';
    const lat = '20.50707272284345';
    const lon = '-86.94899772419937';

    const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(currentWeatherURL)
        .then(response => response.json())
        .then(data => {
            const currentTemp = data.main.temp;
            const currentIcon = data.weather[0].icon;
            document.getElementById('current-temp').textContent = `${currentTemp}°C`;
            document.getElementById('current-icon').src = `http://openweathermap.org/img/wn/${currentIcon}.png`;
            
            const tempMax = data.main.temp_max;
            const message = `The max current Weather today is ${tempMax.toFixed(1)}°C.`;
            displayWeatherMessage(message);

        });

        //message
        function displayWeatherMessage(message) {
            const weatherInfo = document.getElementById('info-tempo');
            weatherInfo.textContent = message;
    
            const weatherMessage = document.getElementById('mensagem-tempo');
            weatherMessage.style.display = 'block'; // Exibe a mensagem do tempo
    
            const btnFechar = document.getElementById('btn-fechar');
            btnFechar.addEventListener('click', function() {
                weatherMessage.style.display = 'none'; // Oculta a mensagem do tempo quando o botão de fechar é clicado
            });
        }

    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(forecastURL)
        .then(response => response.json())
        .then(data => {
            const forecasts = data.list.filter(item => item.dt_txt.includes('15:00:00'));
            const forecastList = document.getElementById('forecast-list');
            forecasts.forEach(forecast => {
                const date = new Date(forecast.dt * 1000);
                const dayOfWeek = date.toLocaleDateString('en-US', {weekday: 'long'});
                const temperature = forecast.main.temp;
                const icon = forecast.weather[0].icon;
                const forecastItem = document.createElement('div');
                forecastItem.innerHTML = `
                    <p>${dayOfWeek}: ${temperature}°C</p>
                    <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Condições do Tempo">
                `;
                forecastList.appendChild(forecastItem);
            });
        });
});

