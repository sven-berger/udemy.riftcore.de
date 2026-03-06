"use strict";

let day = new Date();

let yourName = prompt("Wie ist dein Name?");

function greeting() {
  console.log("Hallo Welt!");
}

function unpersonalDepature() {
  console.log("Bis bald!");
}

greeting();

// Einfach nur die Funktion nach 3 Sekunden aufrufen lassen
setTimeout(unpersonalDepature, 2000);

function departure(yourName) {
  console.log(yourName);
}

// Für weitere Funktion und Möglichkeiten, if-Abfragen zum Beispiel
setTimeout(() => {
  departure(`Bis bald, ${yourName}!`);
}, 3000);
