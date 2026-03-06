"use strict";

const myDepartment = document.querySelector("form > select");

function callOffice() {
  const select = document.createElement("select");
  select.id = "office";
  select.name = "office";

  const optionBeverages = document.createElement("option");
  optionBeverages.id = "optionBeverages";
  optionBeverages.textContent = "Getränkeabteilung";

  const optionChilledProducts = document.createElement("option");
  optionChilledProducts.id = "optionChilledProducts";
  optionChilledProducts.textContent = "Kühlprodukte";

  const optionDryGoods = document.createElement("option");
  optionDryGoods.id = "optionDryGoods";
  optionDryGoods.textContent = "Trockensortiment";

  select.appendChild(optionBeverages);
  select.appendChild(optionChilledProducts);
  select.appendChild(optionDryGoods);

  return select;
}

myDepartment.addEventListener("change", (event) => {
  const department = event.target.value;

  // Jedes Mal frisch holen (wichtig, weil es dynamisch sein kann)
  let office = document.getElementById("office");

  if (department === "Geschäftsstelle") {
    console.log("Du arbeitest in der Geschäftsstelle");

    // Falls es noch nicht existiert: erstellen und direkt nach dem Department-Select einfügen
    if (!office) {
      myDepartment.insertAdjacentElement("afterend", callOffice());
      office = document.getElementById("office"); // danach neu holen
    }

    // Falls es existiert (oder gerade erstellt wurde): anzeigen
    office.style.display = "";
  } else {
    console.log("Du arbeitest also in der Verwaltung");

    // Wenn es existiert: ausblenden UND zurücksetzen
    if (office) {
      office.style.display = "none";

      // Reset: wieder auf erste Option setzen
      office.selectedIndex = 0;
    }
  }
});
