import { scoreButtons } from "./dom.js";
import { currentScore } from "./index.js";
import { currentJoke } from "./jokesManage.js";
import { reportAcudits } from "./state.js";
export const removeClass = () => {
    scoreButtons.forEach((scoreButton) => scoreButton.classList.remove("selected"));
};
export const sendScore = () => {
    if (currentScore) {
        reportAcudits.push({
            joke: currentJoke,
            score: currentScore,
            date: new Date().toISOString(),
        });
    }
};
