"use strict";

const products = ["Brot", "Milch", "Schokolade", "Chips", "Apfel"];

const account1 = {
  iban: "DE02120300000000202051",
  bic: "BYLADEM1001",
  balance: 3500,
  status: true,
};

for (let value of products) {
  console.log(value);
}

console.log("------");

// NUR BEI ARRAYS MÖGLICH, NICHT BEI OBJEKTEN

// for (let value of account1) {
//   console.log(value);
// }
