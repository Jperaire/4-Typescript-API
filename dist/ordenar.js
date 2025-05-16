var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { currentJoke } from "./state.js";
import { div } from "./dom.js";
export const fetchJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
    });
    const data = yield res.json();
    currentJoke = data.joke;
    printJoke(currentJoke);
});
const printJoke = (joke) => {
    cleanJoke();
    const p = document.createElement("p");
    p.textContent = joke;
    div === null || div === void 0 ? void 0 : div.append(p);
};
const cleanJoke = () => {
    while (div === null || div === void 0 ? void 0 : div.firstChild) {
        div.removeChild(div.firstChild);
    }
};
