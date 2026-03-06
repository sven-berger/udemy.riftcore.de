"use strict";

const yourName = prompt("Bitte verrate mir deinen Namen:");
const yourAge = Number(prompt("Wie alt bist du?"));

const yourJob = {
  jobTitle: null,
  jobPosition: null,
};

const jobTitle = prompt("Wie lautet dein Beruf?");
yourJob.jobTitle = jobTitle;

const jobPosition = prompt("Wie lautet deine Position im Job?");
yourJob.jobPosition = jobPosition;

let myMap = new Map();
myMap.set("Dein Name", yourName);
myMap.set("Dein Alter", yourAge);
myMap.set("Dein Job", yourJob);

// console.log(myMap);

// console.log("------");

let mySet = new Set();
mySet.add(yourName);
mySet.add(yourAge);
mySet.add(yourJob);

// console.log(mySet);

console.log("------");

myMap.forEach((element) => {
  console.log(element);
});

mySet.forEach((element) => {
  console.log(element.yourJob.jobPosition);
});
