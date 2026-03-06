"use strict";

let searchWord = /\bi\w{4}\b/g;

let replaceWord = "Hallo Welt";

let lorem =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

let searchRegex = lorem.search(searchWord);
let regexReplace = lorem.replace(searchWord, replaceWord);

console.log(
  `Das Wort, welches an der ${searchRegex}. Stelle zum ersten m auftaucht, wurde erfolgreich durch "${replaceWord}" ausgetauscht.`,
);
console.log(`Der neue Satz lautet nun: ${regexReplace}`);
