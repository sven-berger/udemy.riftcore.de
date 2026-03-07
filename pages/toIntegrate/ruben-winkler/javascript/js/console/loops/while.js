"use strict";

let letter = 0;

while (letter < 10) {
  letter++;
  console.log(`while: ${letter}`);

  if (letter === 5) {
    console.log(`Aktuell befinden wir uns bei der Zahl: ${letter}`);
    console.log(
      "Verarbeiten wir die Zahlen und machen von daher erstmal was anderes."
    );
    continue;
  }

  while (letter > 5 && letter < 10) {
    letter++;
    console.log(`while: ${letter}`);

    if (letter === 10) {
      console.log(
        "Die restlichen Daten wurden verarbeitet - Vorgang abgeschlossen"
      );
    }
  }
}
