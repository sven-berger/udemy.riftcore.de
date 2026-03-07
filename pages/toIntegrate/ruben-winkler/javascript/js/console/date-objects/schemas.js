"use strict";

let myDate = new Date();
console.log(myDate);

console.log("------");

let de_DE = myDate.toLocaleString();
console.log(de_DE);

console.log("------");

let en_US = myDate.toLocaleString("en-US");
console.log(en_US);

console.log("------");

let justDateDE = myDate.toLocaleDateString();
console.log(justDateDE);

console.log("------");

let justTimeDE = myDate.toLocaleTimeString();
console.log(justTimeDE);

let options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
};

console.log("------");

let germanTime = myDate.toLocaleString("de-DE", options);
console.log(germanTime);

console.log("------");

let usTime = myDate.toLocaleString("en-US", options);
console.log(usTime);
