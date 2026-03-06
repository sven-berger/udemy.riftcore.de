"use strict";

let myMap = new Map();

// Variable
const question = "Was geht ab?";

// Array
const myArray = ["Hans", "Peter", "Sven"];

// Object
const myObject = {
  brand: "Mercedes-Benz",
  fuelType: "Diesel",
  model: "C 292",
  mileage: 50000,
  facilities: {
    navigationSystem: true,
    airConditioning: true,
    seatHeating: false,
    cruiseControl: true,
    panoramicRoof: false,
  },
  condition: 3.4,
  price: 15499,
};

// Funktion
function calc() {
  return 1 + 2;
}

// // Es ist egal, alles kann zugewiesen werden
myMap.set(myObject, calc());

myMap.set(question, "Es geht aber auch so");

myMap.set(myArray, 11 + 11);

myMap.set(calc(), "Hallo Welt!");

// Eigenschaft ausgeben mit .get()
// console.log.get(Bla Bla);

// Integer und .has() geht nicht
// console.log(myMap.has(11 + 11));
// console.log(myMap.has("11 + 11"));

// Überprüfen ob Wert enthalten ist mit .has()
// console.log(myMap.has("Was geht ab?"));

// Bestimmte Element löschen
myMap.delete(calc());

// Komplette Map leeren
// myMap.clear();

// Anzahl der Elemente herausfinden
console.log(myMap.size);

console.log(myMap);
