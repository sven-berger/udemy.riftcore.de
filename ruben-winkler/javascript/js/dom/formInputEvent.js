"use strict";

const myInputDesign = {
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  padding: "5px 5px 5px 20px",
  borderRadius: "3px",
  margin: "0 0 1rem 0",
  fontSize: "12px",
  color: " #818181",
  fontFamily: "Verdana, Arial, sans-serif",
};

const myUsername = document.querySelector('input[placeholder="Benutzername"]');
const myPosition = document.querySelector("form > select");

let outputDiv = null; // existiert am Anfang nicht
const outputP = document.createElement("p");

myUsername.addEventListener("input", (event) => {
  const username = event.target.value.trim();

  if (username.length > 1) {
    if (!outputDiv) {
      outputDiv = document.createElement("div");
      outputDiv.id = "myInputOutput";
      Object.assign(outputDiv.style, myInputDesign);
      outputDiv.append(outputP);

      myPosition.insertAdjacentElement("beforebegin", outputDiv);
    }

    outputP.textContent = `Hallo ${username}!`;
    return;
  }

  if (outputDiv) {
    outputDiv.remove();
    outputDiv = null;
  }
});
