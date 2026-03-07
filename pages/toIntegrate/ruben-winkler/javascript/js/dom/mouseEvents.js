"use strict";

let pimpMyArticle = {
  backgroundColor: "pink",
  borderRadius: "32px",
  width: "90%",
  height: "500px",
  fontSize: "10px",
};

let jumbo = document.querySelector(".jumbotron");

let myCounter = 0;

const counterP = document.createElement("p");
counterP.textContent = "Klicks: 0";
jumbo.append(counterP);

jumbo.addEventListener("click", () => {
  myCounter++;
  counterP.textContent = `Klicks: ${myCounter}`;
  Object.assign(jumbo.style, pimpMyArticle);
});

let myArticle = document.querySelectorAll(".article");
myArticle.forEach((element) => {
  element.addEventListener("click", () => {
    console.log("Hallo Welt");
  });
});

myArticle.forEach((element) => {
  element.addEventListener("dblclick", (event) => {
    event.currentTarget.remove();
  });
});
