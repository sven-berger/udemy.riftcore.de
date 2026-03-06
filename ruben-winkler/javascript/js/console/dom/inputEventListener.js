"use strict";

const myRange = document.querySelectorAll('input[type="range"]');
myRange.forEach((element) => {
  element.addEventListener("input", (event) => {
    let yourChoose = event.target.value;
    if (yourChoose === "80") {
      alert("ACHTUNG!");
    }
  });
});
