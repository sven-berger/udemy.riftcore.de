"use strict";

// Attribut hinzufügen
let myList = document.querySelector("#navigation > ul");
myList.setAttribute("class", "navigationList");

// Falls allen Artikeln das Attribut hinzugefügt werden soll
let jumbo = document.querySelectorAll(".jumbotron");
jumbo.forEach((element) => {
  element.setAttribute("lang", "de");
});

// Attribut entfernen
let myMeta = document.querySelector("head > meta:nth-of-type(3)");
myMeta.removeAttribute("content");

// Attrbute aulesen
let myHTML = document.querySelector("html");
console.log(myHTML.getAttribute("lang"));

// Atribute abfragen (BOOLEAN)
let myHeader = document.querySelector("head > link");
console.log(myHeader.hasAttribute("href"));
console.log(myHeader.hasAttribute("test"));
