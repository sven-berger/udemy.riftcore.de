"use strict";

let yourName = prompt("Wie ist dein Name?");
let counter = 0;

function unPersonalgreeting() {
  console.log("Hallo Welt!");
}

function greeting(name) {
  console.log(`Hallo ${name}!`);
}

// Alle 2 Sekunden eine unpersönliche Begrüßung
// setInterval(unPersonalgreeting, 2000);

// Alle 2 Sekunden "Hallo Sven!", bis "Counter" 5 erreicht hat
let interval = setInterval(() => {
  counter++;
  greeting(yourName);
  if (counter === 5) {
    clearInterval(interval);
    console.log("Interval beendet.");
  }
}, 2000);
