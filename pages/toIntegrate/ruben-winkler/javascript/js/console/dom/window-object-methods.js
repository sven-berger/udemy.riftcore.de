"use strict";

alert("Hallo");

// confirm("Bist du dir sicher?");
// prompt("Wie geht es dir?");
// alert("Dann halt nicht!");
// print();
// open("https://google.de");
// close();

let sure = confirm("Bist du dir sicher?");
if (sure) {
  let howareyou = prompt("Wie geht es dir?");
  console.log(howareyou);
} else {
  alert("Dann halt nicht!");
  print();
}
