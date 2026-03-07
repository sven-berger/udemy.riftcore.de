"use strict";

let myLink = document.querySelector("a.active");
let myInput = document.querySelector("input[type=text]");
let myForm = document.querySelector("form");

setTimeout(() => myLink.click(), 3000);
setTimeout(() => myInput.focus(), 6000);
setTimeout(() => myInput.blur(), 9000);
setTimeout(() => myForm.reset(), 12000);
setTimeout(() => myForm.submit(), 15000);
