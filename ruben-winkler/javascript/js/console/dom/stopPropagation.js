"use strict";

let stopPropagation = document.querySelector(
  "#navigation > ul > li:nth-of-type(2) > a",
);

let parentElement = stopPropagation.parentElement;

stopPropagation.textContent = "stopPropagation()";
stopPropagation.removeAttribute("class");
stopPropagation.href = "https://google.de";
stopPropagation.target = "blank";

const ul = document.querySelector("#navigation ul");
ul.lastElementChild.remove();
ul.lastElementChild.remove();

stopPropagation.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Event vom Haupt-Element wurde getriggert");
});

parentElement.addEventListener("click", () => {
  console.log("Event vom Parent-Element wurde getriggert");
});
