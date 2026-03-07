"use strict";

// function multiply(a, b) {
//   return a * b;
// }

// const multiply = (a, b) => {
//   return a * b;
// };

const multiply = (a, b) => a * b;

console.log(multiply(5, 10));

console.log("------");

function myGreeting1(name) {
  console.log(`Hallo ${name}`);
}

myGreeting1("Sven Oliver Berger");

const myGreeting2 = (name) => `Hallo ${name}`;
console.log(myGreeting2("Max"));

// function meaningOfLife() {
//   return 42;
// }

const meaningOfLife = () => 42;
console.log(meaningOfLife());

let myShoppingList = [
  "Brot",
  "Käse",
  "Tomaten",
  "Butter",
  "Eier",
  "Orangensaft",
];

myShoppingList.forEach((element) => console.log(element));
