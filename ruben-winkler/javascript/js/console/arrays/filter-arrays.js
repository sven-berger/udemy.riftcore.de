"use strict";

const letter = [12, 23, 34, 77, 2, 32, 9, 55, 43, 11, 1];

// letter.forEach((element) => {
//   if (element > 20) {
//     sortedLetter.push(element);
//   }
// });

// console.log(sortedLetter);

let filteredLetter = letter.filter((element) => {
  if (element <= 20) {
    return true;
  } else {
    return false;
  }
});

let filteredLetterShort = letter.filter((element) => element <= 20);

console.log(filtered);
console.log("------");
console.log(filteredLetterShort);
