"use strict";

let day = new Date();

let weekdayOption = {
  weekday: "long",
};

let weekday = day.toLocaleString("de-DE", weekdayOption);
let isWeekend = "";

let yourName = prompt("Wie ist dein Name?");

function weekend() {
  if (weekday === "Samstag" || weekday === "Sonntag") {
    isWeekend = "Schönes Wochenende!";
    return isWeekend;
  } else {
    isWeekend = "Schöne Arbeitswoche noch,";
    return isWeekend;
  }
}

function greeting() {
  console.log("Hallo Welt!");
}

function unpersonalDepature() {
  console.log("Bis bald!");
}

greeting();

// Einfach nur die Funktion nach 3 Sekunden aufrufen lassen
setTimeout(unpersonalDepature, 3000);

function departure(yourName) {
  console.log(`${yourName}!`);
}

// Für weitere Funktion und Möglichkeiten, if-Abfragen zum Beispiel
setTimeout(() => {
  console.log(weekend());
  departure(yourName);
}, 3000);
