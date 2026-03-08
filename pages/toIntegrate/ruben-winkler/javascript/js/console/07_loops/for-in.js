"use strict";

const products = ["Brot", "Milch", "Schokolade", "Chips", "Apfel"];

const account1 = {
  iban: "DE02120300000000202051",
  bic: "BYLADEM1001",
  balance: 3500,
  status: true,
};

for (let index in products) {
  console.log(index);
}

console.log("------");

for (let index in account1) {
  console.log(index);
}
