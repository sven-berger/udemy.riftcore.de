"use strict";

let preventDefault = document.querySelector(
  "#navigation > ul > li:nth-of-type(1) > a",
);

let parentElement = preventDefault.parentElement;

preventDefault.textContent = "preventDefault()";
preventDefault.removeAttribute("class");
preventDefault.href = "https://google.de";
preventDefault.target = "blank";

const ul = document.querySelector("#navigation ul");
ul.lastElementChild.remove();
ul.lastElementChild.remove();

preventDefault.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Event vom Haupt-Element wurde getriggert");
});

parentElement.addEventListener("click", () => {
  console.log("Event vom Parent-Element wurde getriggert");
});
