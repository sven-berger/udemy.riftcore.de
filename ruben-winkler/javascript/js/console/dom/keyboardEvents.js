"use strict";

// Feuert ab, bis man die Taste loslässt
document.addEventListener("keydown", (event) => {
  if (event.key === "@") {
    console.log("Das @-Zeichen wurde gedrückt (KeyDown-Event)");
  }
});

// Feuert nur einmal - Zur Wiederholung, muss man erneut drücken
// Empfohlen wird also keyup
document.addEventListener("keyup", (event) => {
  if (event.key === "€") {
    alert("Das €-Zeichen wurde gedrückt (KeyUp-Event)");
  }
});

// Veraltet //
// document.addEventListener("keypress", (event) => {
//   if (event.key === ":") {
//     console.log("Das :-Zeichen wurde gedrückt");
//   }
// });
