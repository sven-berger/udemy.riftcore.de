"use strict";

/*
* Für das Sortieren von Zahlen-Arrays sollte eine Vergleichsfunktion genutzt werden.
* Ist der Rückgabewert der Vergleichsfunktion < 0, wird A auf einen niedrigeren Index als B gesetzt.
* Ist der Rückgabewert der Vergleichsfunktion < 0, wird A auf einen höheren Index als B gesetzt.
* Ist der Rückgabewert der Vergleichsfunktion = 0, bleibt alles wie es ist.

* return a - b sortiert in aufsteigender Reihenfolge
* return b - a sortiert in absteigender Reihenfolge
*/

const strings = ["Zahl", "Wahnsinn", "Mangel", "Abspann"];
let sortedStrings = strings.sort();
console.log(sortedStrings);
console.log("------");

const letter = [
  6192, 6193, 6194, 6195, 6196, 8758, 8939, 9961, 9963, 9964, 9965, 9968, 9969,
  9970, 9971, 9972, 9973, 9974, 9975, 9976, 9977, 9978, 9979, 9980, 12997,
  13517, 14902, 25127, 25255, 26525, 26551, 26552, 26602, 31018, 31019, 31020,
  31021, 31291,
];
let sortedLetter = letter.sort(function (a, b) {
  return a - b;
});

console.log(sortedLetter);
