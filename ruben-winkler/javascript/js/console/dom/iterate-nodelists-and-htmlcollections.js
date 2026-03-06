"use strict";

// Durchlaufen von HTMLCollections
console.log("Durchlaufen von HTMLCollections");
let myArticles = document.getElementsByClassName("jumbotron");
for (let i = 0; i < myArticles.length; i++) {
  console.log(myArticles[i]);
}

let myH2 = document.getElementsByTagName("h2");
for (let titles of myH2) {
  console.log(titles);
}

console.log("------");

// Durchlaufen von NoteLists
console.log("Durchlaufen von NodeLists mit forOf");
let myP = document.querySelectorAll("p");
for (let paragraphs of myP) {
  console.log(paragraphs);
}

console.log("Durchlaufen von NodeLists mit forEach");
myP.forEach((element) => {
  console.log(element);
});
