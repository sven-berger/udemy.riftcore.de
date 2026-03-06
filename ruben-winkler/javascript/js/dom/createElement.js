"use strict";

const myArticle = document.querySelector(".jumbotron:nth-of-type(1)");

let article = document.createElement("article");
article.classList = "jumbotron";
article.id = "content";

let articleHeader = document.createElement("header");
articleHeader.innerHTML = `
    <h2>Kunden-Übersicht</h2>
    <p>Raclette tattooed poutine tofu hexagon selvage four dollar toast.</p>
    <hr />
`;

let articleSection = document.createElement("section");
let articleParagraph = document.createElement("p");
articleParagraph.textContent =
  "Scenester edison bulb banh mi deep v ramps tattooed intelligentsia biodiesel aesthetic woke sartorial. Organic church-key austin meh semiotics occupy flannel trust fund pickled hot chicken. Quinoa glossier godard kinfolk sriracha flexitarian literally pabst microdosing disrupt woke. Literally shaman kickstarter, gastropub banh mi keytar gluten-free. Hammock everyday carry venmo live-edge. Flexitarian quinoa cronut cornhole banjo, coloring book fixie echo park offal. Activated charcoal banjo hashtag sriracha.";
articleSection.appendChild(articleParagraph);

article.appendChild(articleHeader);
article.appendChild(articleSection);

myArticle.insertAdjacentElement("beforebegin", article);
