"use strict";

const persons = ["Sebastian", "Marcel", "Anna", "Dennis", "Mia"];
const animlas = ["Katze", "Maus", "Hund", "Pferd", "Gorilla"];

// Verkettung aller Elemenete mit join()
console.log("Verkettung aller Elemenete mit join(' -- ')");
console.log(persons.join(" -- "));

console.log("------");

// Sortierung des Arrays
console.log("Sortierung eines Arrays mit sort()");
console.log(persons.sort());

console.log("------");

// Arrays miteinander verbinden
console.log("Arrays miteinander verbinden mit .concat");
const all = persons.concat(animlas);
console.log(all);

console.log("------");

// Teile eines Arrays kopieren
console.log("Teile eines Arrays kopieren mit .slice");
console.log("Gesamtes Array lul");
const completeArray = persons.slice(0, 5);
console.log(completeArray);
console.log("Die ersten beide Elemente aus dem Array");
const firstTwo = persons.slice(0, 2);
console.log(firstTwo);
