import { changeBlobShape } from "./blobs.js";
import { nextButton, scoreButtons } from "./dom.js";
import { fetchJoke } from "./jokes.js";
import { removeClass, sendScore } from "./score.js";
import { reportAcudits } from "./state.js";
import { fetchWeather } from "./weather.js";

export let currentScore: number = 0;
fetchWeather();
fetchJoke();
changeBlobShape();

scoreButtons?.forEach((scoreButton) => {
    const button = scoreButton as HTMLButtonElement;

    button.addEventListener("click", () => {
        currentScore = Number(button.dataset.score);

        removeClass();
        scoreButton.classList.add("selected");
    });
});

nextButton?.addEventListener("click", () => {
    removeClass();
    sendScore();
    fetchJoke();
    changeBlobShape();
    currentScore = 0;
    console.log(reportAcudits);
});
