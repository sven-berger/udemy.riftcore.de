"use strict";

let jumbo = document.querySelector(".jumbotron");
let myClasses = jumbo.classList;

// Klasse hinzufügen
myClasses.add("myClass");

// Klasse entfernen
myClasses.remove("jumbotron");

// Klasse ersetzen
myClasses.replace("myClass", "jumbotron");
let myClass = myClasses.replace("myClass", "jumbotron");

// Abfrage ob vorhanden
if (myClasses.contains("jumbotron")) {
  myClasses.remove("jumbotron");
  console.log(`Die gewünschte Klasse wurde erfolgreich entfernt.`);
} else {
  console.log('Keine Klasse "jumbotron" gefunden.');
}
