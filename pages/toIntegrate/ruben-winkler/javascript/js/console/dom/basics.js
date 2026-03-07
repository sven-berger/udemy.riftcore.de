"use strict";

let lookFor = prompt("Nach welchem Klassennamen suchst du?");

// Elemente nach ID auswählen
console.log("Elemente nach ID auswählen");
let navigation_element = document.getElementById("navigation");
console.log(navigation_element);

console.log("------");

// Elemente nach Klasse auswählen mit Suchfunktion
console.log("Elemente nach Klasse auswählen mit Suchfunktion");
let myNavigation = document.getElementsByClassName(lookFor);
if (myNavigation.length === 0) {
  console.log(`Keine Klasse mit dem Namen "${lookFor}" gefunden.`);
} else {
  console.log(myNavigation);
}

console.log("------");

// Elemente nach Tag (Elemente, Beispiel: section) auswählen
console.log("Elemente nach Tag (Elemente, Beispiel: section) auswählen");
let mySection = document.getElementsByTagName("section");
console.log(mySection);
