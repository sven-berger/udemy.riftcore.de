"use strict";

console.log("Die Kreisfläche berechnen");
let circleArea = Number(prompt("Wie groß ist der Kreis?"));

if (Number.isNaN(circleArea)) {
  console.log("Bitte nur Zahlen eingeben!");
} else {
  let a = Math.PI * Math.pow(circleArea, 2);
  let fixedA = a.toFixed(3);
  let newA = parseFloat(fixedA); // You want to use radix 10

  console.log("Die Formel lautet: A = PI * r^2");
  console.log(
    `Die Fläche unseres Kreises mit dem Radius ${circleArea}cm beträgt: ${newA}`,
  );
  let testResult = newA + 100;
  console.log(`${newA} + 100 ergibt: ${testResult}`);
}
