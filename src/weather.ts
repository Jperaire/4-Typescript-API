import { API_KEY, CITY } from "./config.js";
import { weatherDiv } from "./dom.js";

interface WeatherData {
    temp_c: number;
    condition: {
        text: string;
        icon: string;
    };
}

export const fetchWeather = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Error: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            if (!data.current) {
                throw new Error("Falta la propiedad 'current'");
            }
            printWeather(data.current);
        })
        .catch((error) => console.log("Algo salió mal:", error.message));
};

export const printWeather = ({ temp_c, condition }: WeatherData) => {
    const temperatureP = document.createElement("p");
    temperatureP.textContent = `${temp_c} ºC`;

    const weatherIcon = document.createElement("img");
    weatherIcon.src = condition.icon;

    weatherDiv?.prepend(weatherIcon);
    weatherDiv?.append(temperatureP);
};
