"use strict";

sessionStorage.setItem("myName", "Sven Oliver Berger");
sessionStorage.setItem("myAge", 35);

let getName = sessionStorage.getItem("myName");
console.log(getName);

let deleteItem = sessionStorage.removeItem("mynName");
console.log(sessionStorage);

sessionStorage.clear();
console.log(sessionStorage);
