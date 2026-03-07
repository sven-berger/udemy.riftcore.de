"use strict";

let myContent = document.querySelector("article");
myContent.remove();

let myArticle = document.querySelectorAll(".jumbotron");
myArticle.forEach((element) => {
  element.remove();
});
