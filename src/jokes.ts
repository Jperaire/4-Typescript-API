import { acuditDiv } from "./dom.js";
export let currentJoke: string = "";

export const fetchJoke = async () => {
    try {
        const source = Math.random() < 0.5 ? "icanhaz" : "chuck";

        if (source === "icanhaz") {
            const res = await fetch("https://icanhazdadjoke.com/", {
                headers: { Accept: "application/json" },
            });

            if (!res.ok) {
                throw new Error(`Error con icanhazdadjoke: ${res.status}`);
            }

            const data = await res.json();
            currentJoke = data.joke;
        } else {
            const res = await fetch("https://api.chucknorris.io/jokes/random");

            if (!res.ok) {
                throw new Error(`Error con chucknorris.io: ${res.status}`);
            }

            const data = await res.json();
            currentJoke = data.value;
        }

        printJoke(currentJoke);
    } catch (error) {
        const err = error as Error;
        console.error("Error al obtener el chiste:", err.message);
        printJoke("Ups, no se pudo cargar el chiste. Intenta de nuevo.");
    }
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
