"use strict";

let startNumber = 40;
let endNumber = 100;

if (Number.isNaN(startNumber) || Number.isNaN(endNumber)) {
  console.log("Bitte nur Zahlen eingeben!");
} else if (startNumber >= endNumber) {
  console.log("Die Startzahl muss kleiner als die Endzahl sein!");
} else {
  let randomNumber =
    Math.floor(Math.random() * (endNumber - startNumber + 1)) + startNumber;

  console.log(
    `Zufallszahl zwischen ${startNumber} und ${endNumber}: ${randomNumber}`,
  );
}
