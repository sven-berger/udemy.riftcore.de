"use strict";

const menuItems = [
  { text: "Startseite", href: "index.html", active: true },
  { text: "HTML", href: "html.html" },
  { text: "CSS", href: "css.html" },
  { text: "JavaScript", href: "js.html" },
];

const myContent = document.getElementById("content");

const mySection = document.createElement("div");
const myUList = document.createElement("ul");

menuItems.forEach((item) => {
  const li = document.createElement("li");
  const link = document.createElement("a");

  link.textContent = item.text;
  link.href = item.href;

  if (item.active) {
    li.classList.add("active");
  }

  li.appendChild(link);
  myUList.appendChild(li);
});

mySection.appendChild(myUList);
myContent.appendChild(mySection);
