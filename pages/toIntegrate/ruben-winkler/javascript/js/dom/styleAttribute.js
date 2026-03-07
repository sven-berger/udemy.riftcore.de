"use strict";

let jumbo = document.querySelector(".jumbotron");
// jumbo.style.backgroundColor = "pink";
// jumbo.style.borderRadius = "32px";
// jumbo.style.width = "90%";
// jumbo.style.height = "500px";
// // Falls man es sehr unnötig kompliziert machen möchte.
// jumbo.style.fontSize = 10 + "px";

let pimpMyArticle = {
  backgroundColor: "pink",
  borderRadius: "32px",
  width: "90%",
  height: "500px",
  fontSize: "10px",
};

Object.assign(jumbo.style, pimpMyArticle);
