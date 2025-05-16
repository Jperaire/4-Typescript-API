import { acuditDiv } from "./dom.js";
export let currentJoke: string = "";

export const fetchJoke = async () => {
    const res = await fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
    });
    const data = await res.json();

    currentJoke = data.joke;

    printJoke(currentJoke);
};

const printJoke = (joke: string) => {
    cleanJoke();
    const p = document.createElement("p");
    p.textContent = joke;
    acuditDiv?.append(p);
};

const cleanJoke = () => {
    while (acuditDiv?.firstChild) {
        acuditDiv.removeChild(acuditDiv.firstChild);
    }
};
