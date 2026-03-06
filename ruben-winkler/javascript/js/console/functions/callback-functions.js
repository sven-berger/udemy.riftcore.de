"use strict";

// let calc1 = function () {
//   console.log("Funktion #1");
// };

// let calc2 = function (f) {
//   console.log("Funktion #2");
// };

// function calc1() {
//   console.log("Funktion #1");
// }

// function calc2() {
//   console.log("Funktion #2");
// }

// calc2(calc1());

let funktion_2 = function (f) {
  console.log("Ich bin Funktion 2!");
  f();
};

funktion_2(function () {
  console.log("Ich bin Funktion 1!");
});

console.log("------");

function getFirstLetter() {
  let firstLetter = Number(prompt("Bitte gib die erste Zahl an:"));
  return firstLetter;
}

function getSecondLetter() {
  let secondLetter = Number(prompt("Bitte gib die zweite Zahl an:"));
  return secondLetter;
}

function getResult(f, s) {
  const first = f(); // Callback-Aufruf
  const second = s(); // Callback-Aufruf

  if (
    !Number.isNaN(first) &&
    !Number.isNaN(second) &&
    first > 0 &&
    second > 0
  ) {
    const result = first + second;
    console.log(
      `Das Ergebnis der Rechnung ${first} + ${second} ergibt: ${result}`
    );
  } else {
    alert("Bitte nur Zahlen größer als 0 eingeben!");
    return getResult(getFirstLetter, getSecondLetter);
  }
}

getResult(getFirstLetter, getSecondLetter);
