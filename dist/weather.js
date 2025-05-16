import { API_KEY, CITY } from "./config.js";
import { weatherDiv } from "./dom.js";
export const fetchWeather = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}`)
        .then((res) => res.json())
        .then((data) => {
        printWeather(data.current);
    });
};
export const printWeather = (data) => {
    const temperatureP = document.createElement("p");
    temperatureP.textContent = `${data.temp_c} ºC`;
    const weatherIcon = document.createElement("img");
    weatherIcon.src = data.condition.icon;
    weatherDiv?.prepend(weatherIcon);
    weatherDiv?.append(temperatureP);
};
