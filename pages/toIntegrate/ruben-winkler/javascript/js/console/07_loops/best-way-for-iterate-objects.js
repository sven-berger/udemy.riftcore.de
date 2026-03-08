"use strict";

const myPerson = {
  name: "Sven Oliver Berger",
  age: 34,
  location: "Bad Camberg",
  job: {
    title: "Fachinformatiker für Anwendungsentwicklung",
    rank: "Prakikant",
  },
};

// Unschön, aber möglich
// console.log("Unschön, aber möglich")
// let information = Object.entries(myPerson);
// for (let detail of information) {
//   for (let e of detail) {
//     console.log(e);
//   }
// }

for (let i of Object.keys(myPerson)) {
  console.log(i);
}

for (let v of Object.values(myPerson)) {
  console.log(v);
}
