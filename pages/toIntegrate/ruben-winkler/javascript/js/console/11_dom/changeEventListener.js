"use strict";

const myCheckboxes = document.querySelectorAll('input[type="checkbox"]');
myCheckboxes.forEach((element) => {
  element.addEventListener("change", (event) => {
    let yourChoose = event.target.value;
    console.log(`${yourChoose} als Auswahl ist in Ordnung.`);
  });
});

const myRadiobuttons = document.querySelectorAll('input[type="radio"]');
myRadiobuttons.forEach((element) => {
  element.addEventListener("change", (event) => {
    let yourChoose = event.target.value;
    console.log(`${yourChoose} als Auswahl ist in Ordnung.`);
  });
});
