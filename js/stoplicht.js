"use strict";

function stoplichtKleur(kleur) {
    const elementen = ["w", "s", "x"];
    const classes = ["rood", "oranje", "groen"];

    for (let i = 0; i < elementen.length; i++) {
        let element = document.getElementById(elementen[i]);
        if (kleur === i + 1) {
            element.classList.add(classes[i]);
            element.classList.remove("default");
        } else {
            element.classList.remove(classes[i]);
            element.classList.add("default");
        }
    }
}

let currentColor = 1;
let intervalId;

function startStoplicht() {
    intervalId = setInterval(() => {
        stoplichtKleur(currentColor);
        currentColor = (currentColor % 3) + 1; // Cycle through 1, 2, 3
    }, 1000);
}

function stopStoplicht() {
    clearInterval(intervalId);
}

function clearAll() {
    stopStoplicht();
    stoplichtKleur(0);
}