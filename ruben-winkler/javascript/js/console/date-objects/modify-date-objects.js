"use strict";

let myDate = new Date();
console.log(myDate);

console.log("------");

console.log(myDate.setFullYear(2000));
console.log(myDate.setMonth(1));
console.log(myDate.setDate(29));

console.log(myDate);

console.log("------");

console.log("Volles, neues Jahr (2000) in UNIX");
console.log(myDate.setFullYear(2000));

console.log("------");

let myBirthday = new Date();

console.log(myBirthday.getFullYear());
console.log(myBirthday.getMonth(0));
console.log(myBirthday.getDate());
console.log(myBirthday.getDay());
console.log(myBirthday);
