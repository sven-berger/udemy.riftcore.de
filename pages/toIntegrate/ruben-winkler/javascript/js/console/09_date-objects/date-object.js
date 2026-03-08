"use strict";

console.log("Aktuelles Datum und Uhrzeit von Server mit new Date()");
let myDate = new Date();
console.log(myDate);

console.log("------");

console.log("Aktuelle UNIX-Zeit mit Date.now()");
let unixDate = Date.now();
console.log(unixDate);

console.log("------");

console.log("Mein Geburtsdatum");
let myBirthday = new Date("01-21-1991 00:07");
console.log(myBirthday);

console.log("------");

console.log("Lovedays Geburtsdatum");
let lovedaysBirthday = new Date(2000, 6, 26, 13, 14);
console.log(lovedaysBirthday);
