"use strict";

import { Loveday, Sven } from "./utils/settings.js";
import * as Konten from "./classes/Konten.js";

let button = document.querySelector("button");
button.addEventListener("click", async () => {
  import("./utils/helper.js").then((Utils) => {
    Utils.showObject(
      new Konten.Konto("DE6206752564419854", Sven.name, Sven.balance),
    );

    Utils.showObject(
      new Konten.ChildAccount(
        "DE6206752564419740",
        Loveday.name,
        Loveday.balance,
        500,
      ),
    );
  });
});
