"use strict";

let myObject = {
  name: "Sven Oliver Berger",
  age: 34,
  location: "Idstein",

  myMethod() {
    console.log(this);
  },
};

myObject.myMethod();

console.log("------");

let myObject2 = {
  name: "Sven Oliver Berger",
  age: 34,
  location: "Idstein",

  myMethod() {
    function myFunction() {
      console.log(this);
    }
    myFunction();
  },
};

myObject2.myMethod();

console.log("------");

let myObject3 = {
  name: "Sven Oliver Berger",
  age: 34,
  location: "Idstein",

  myMethod() {
    const myFunction = () => console.log(this);
    myFunction();
  },
};

myObject3.myMethod();
