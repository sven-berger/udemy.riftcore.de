import { indentation, TypeOfElement } from "./settings.js";

export function showObject(object) {
  // function showObject(object) {
  let body = document.querySelector("body");
  let pre = document.createElement(TypeOfElement);
  pre.textContent = JSON.stringify(object, null, indentation);
  body.append(pre);
}

// export default showObject;
