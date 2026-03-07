"use strict";

let jumbo = document.querySelector(".jumbotron");
let myClass = jumbo.className;

jumbo.className += " myClass";
jumbo.className = jumbo.className.replace("myClass", "yourClass");
jumbo.className = jumbo.className.replace(" yourClass", "");

document.querySelector("#navigation > ul > li:first-of-type > a").className =
  "";

document.querySelector("#navigation > ul > li:nth-of-type(3) > a").className =
  "active";
