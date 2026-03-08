"use strict";

let lorem = " Lorem ipsum dolir sit amet ipsum. ";

let loremLength = lorem.length;
console.log(loremLength);

console.log("------");

let searchIndex = lorem.indexOf("ipsum");
console.log(searchIndex);

console.log("------");

let searchIndex2 = lorem.indexOf("ipsum", 20);
console.log(searchIndex2);

console.log("------");

let searchLastIndex = lorem.lastIndexOf("ipsum");
console.log(searchLastIndex);

console.log("------");

let searchLastIndex2 = lorem.lastIndexOf("ipsum", 20);
console.log(searchLastIndex2);

console.log("------");

let includesIndex = lorem.includes("sit");
console.log(includesIndex);

console.log("------");

let includesIndex2 = lorem.includes("sit", 28);
console.log(includesIndex2);

console.log("------");

let lowerLorem = lorem.toLowerCase();
console.log(lowerLorem);

console.log("------");

let upperLorem = lorem.toUpperCase();
console.log(upperLorem);

console.log("------");

console.log("Eine der wichtigsten Methoden: trim()");
let trimLorem = lorem.trim();
console.log(trimLorem);

console.log("------");

console.log("Vermutlich sinnlos, aber lustig mit repeat();");
console.log(lorem.repeat(5));
