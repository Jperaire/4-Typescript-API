import { nextButton, scoreButtons } from "./dom.js";
import { fetchJoke } from "./jokesManage.js";
import { removeClass, sendScore } from "./scoreManage.js";
import { reportAcudits } from "./state.js";
import { fetchWeather } from "./weather.js";

export let currentScore: number = 0;
fetchWeather();
fetchJoke();

scoreButtons?.forEach((scoreButton) => {
    scoreButton.addEventListener("click", () => {
        currentScore = Number(scoreButton.textContent);

        removeClass();
        scoreButton.classList.add("selected");
    });
});

nextButton?.addEventListener("click", () => {
    removeClass();
    sendScore();
    fetchJoke();
    currentScore = 0;
    console.log(reportAcudits);
});
