"use strict";

let attribute = "Artikel (Variable)";

let myArticle = document.querySelector(".jumbotron");
myArticle.innerHTML += `<p style="color: red;">Hallo, das ist mein erster ${attribute}</p>`;
