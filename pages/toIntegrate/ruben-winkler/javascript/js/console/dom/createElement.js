"use strict";

// Element erstellen
let myDiv = document.createElement("div");
let mySection = document.createElement("section");

// Attribut erstellen - UMSTÄNDLICH
console.log("Attribut erstellen - UMSTÄNDLICH");
let mySectionId = document.createAttribute("id");
mySectionId.value = "powerID";
mySection.setAttributeNode(mySectionId);

console.log(mySection);

console.log("------");

console.log("// Attribut erstellen - STANDARD UND VERSTÄNDLICH");
myDiv.setAttribute("class", "section");
myDiv.setAttribute("id", "powerID");

console.log(myDiv);

console.log("------");

// Text hinzufügen mit createTextNode
console.log("Text hinzufügen mit createTextNode");
myText = document.createTextNode("Lorem Ipsum dolor sit amet.");

console.log(myDiv);
