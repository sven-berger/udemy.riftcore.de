"use strict";

let myNavigation = document.querySelector("#navigation");
let myListinNavigation = document.querySelector("#navigation > ul");

// Alle Kinderelemente inklusive Text- und Kommentarknoten
console.log("Alle Kinderelemente inklusive Text- und Kommentarknoten");
let myChildNodes = myNavigation.childNodes;
console.log(myChildNodes);

console.log("------");

// Alle Kinderlemente, ohne Text- und Kommentarknoten
console.log("Alle Kinderlemente, ohne Text- und Kommentarknoten");
let myChildren = myNavigation.children;
console.log(myChildren);

console.log("------");

// Das erste Kindelement inklusive Text- und Kommentarknoten
console.log("// Das erste Kindelement inklusive Text- und Kommentarknoten");
let myFirstChild = myNavigation.firstChild;
console.log(myFirstChild);

// Das letzte Kindelement inklusive Text- und Kommentarknoten
console.log("// Das letzte Kindelement inklusive Text- und Kommentarknoten");
let myLastChild = myNavigation.lastChild;
console.log(myLastChild);

console.log("------");

// Das erste Kindelement, ohne Text- und Kommentarknoten
console.log("Das erste Kindelement, ohne Text- und Kommentarknoten");
let myFristElementChild = myListinNavigation.firstElementChild;
console.log(myFristElementChild);

// Das letzte Kindelement, ohne Text- und Kommentarknoten
console.log("Das letzte Kindelement, ohne Text- und Kommentarknoten");
let myLastElementChild = myListinNavigation.lastElementChild;
console.log(myLastElementChild);

console.log("------");

// Nächstes Geschwistelement inklusive Text- und Kommentarknoten
console.log("Nächstes Geschwistelement inklusive Text- und Kommentarknoten");
let nextSibling = myListinNavigation.nextSibling;
console.log(nextSibling);

// Vorrangehendes Geschwistelement inklusive Text- und Kommentarknoten
console.log(
  "Vorrangehendes Geschwistelement inklusive Text- und Kommentarknoten",
);
let previousSibling = myListinNavigation.previousSibling;
console.log(previousSibling);

// Nächstes Geschwistelement, ohne Text- und Kommentarknoten
console.log("Nächstes Geschwistelement, ohne Text- und Kommentarknoten");
let nextElementSibling =
  myListinNavigation.firstElementChild.nextElementSibling;
console.log(nextElementSibling);

// Vorrangehendes Geschwistelement, ohne Text- und Kommentarknoten
console.log("Vorrangehendes Geschwistelement, ohne Text- und Kommentarknoten");
let previousElementSibling =
  myListinNavigation.lastElementChild.previousElementSibling;
console.log(previousElementSibling);

// Elternelement
console.log("Elternelement");
let myParents = myListinNavigation.parentElement;
console.log(myParents);
