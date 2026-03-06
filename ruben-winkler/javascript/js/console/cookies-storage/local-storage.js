"use strict";

localStorage.setItem("myName", "Sven Oliver Berger");
localStorage.setItem("myAge", 35);

let getName = localStorage.getItem("myName");
console.log(getName);

let deleteItem = localStorage.removeItem("mynName");
console.log(localStorage);

localStorage.clear();
console.log(localStorage);
