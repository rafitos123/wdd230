
let temp = 35
if (temp <= 50 && speed > 3) {
    const windChillFahrenheit = 35.74 + (0.6215 * temp) + (0.4275 * temp - 35.75) * speed ^ 0.16;


    document.getElementById("#windchill").innerHTML = windChillFahrenheit;

} else {
    na = "N/A";
    windChill.innerHTML = na;
}
windSpeed.innerHTML = speed;





