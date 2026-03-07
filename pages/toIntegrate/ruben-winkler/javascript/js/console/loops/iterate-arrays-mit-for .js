"use stricts";

const persons = ["Sebastian", "Marcel", "Anna", "Dennis", "Mia"];

for (let i = 0; i < 5; i++) {
  console.log(`Hallo ${persons[i]}`);
}

console.log("------");

const animals = [
  "Katze",
  "Maus",
  "Hund",
  "Pferd",
  "Gorilla",
  "Nilpferd",
  "Leopard",
  "Eichhörnchen",
];

for (let j = 0; j < animals.length; j++) {
  console.log(`Hallo ${animals[j]}`);
}

console.log("------");

for (let j = animals.length - 1; j >= 0; j--) {
  console.log(`Tschüss ${animals[j]}`);
}
