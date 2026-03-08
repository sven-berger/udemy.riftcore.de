"use strict";

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

const continueLetter = 5;

for (let letter = 0; letter <= 200; letter++) {
  if (letter === continueLetter) {
    console.log(`Die ${continueLetter} überspringen wir mal..`);
    continue;
  } else if (letter === 20) {
    console.log("So, jetzt reicht es aber!");
    break;
  }
  console.log(letter);
}
