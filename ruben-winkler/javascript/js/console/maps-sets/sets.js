"use strict";

const myVar = "Hallo Welt";
const myLet = 42 + 234.65;
const myArr = ["Ich", "bin", "ein", "Gummibär"];
const myObj = {
  name: "Bazinga",
  newsoftheday:
    "Pustekuchen ist kein Kuchen auf den man pustet - Aber man kann auf Kuchen pusten.",
};

function myFunc() {
  return 11 + 22;
}

let mySet = new Set();

mySet.add(1 + 1 - 52 + 120);
mySet.add(myVar);
mySet.add(myLet);
mySet.add(myArr);
mySet.add(myObj);
mySet.add(myFunc());

console.log(mySet);

console.log("------");

console.log(mySet.has("Hallo Welt"));
console.log(mySet.has(11 + 22));
console.log(mySet.has("22"));

console.log("------");
console.log(mySet.delete("Hallo Welt"));
console.log(mySet.delete(myObj));
console.log(mySet);

console.log("------");

console.log("------");
console.log(mySet.size);

mySet.clear();
console.log(mySet);
