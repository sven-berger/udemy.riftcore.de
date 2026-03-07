"use strict";

let myForm = document.querySelector("form");
myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let username = event.target.elements.username.value;
  console.log(`Hallo ${username}!`);
});

myForm.addEventListener("reset", () => {
  console.log("Formular wurde zurückgesetzt.");
});
