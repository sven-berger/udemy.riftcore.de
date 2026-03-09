<?php
    $pageTitle = "Variablen in JavaScript";
?>

<?php
 $jsCode = <<<'JS'
"use strict";

const vorname = "Sven";
const zweitname = "Oliver";
const nachname = "Berger";
const gesamterName = vorname + " " + zweitname + " " + nachname;
const alter = 34;
const heimat = "Idstein";

console.log(
  "Hallo, mein Name ist " + gesamterName + ", ich bin " +
  alter + " Jahre alt und wohne in " + heimat
);
JS;
?>

<h2>Variablen in JavaScript</h2>

<pre><code class="language-javascript"><?= htmlspecialchars($jsCode) ?></code></pre>

<div data-controller="variables">
    <form method="post" class="mt-5" data-action="submit->variables#createOutput">
        <div class="mb-3">
            <label for="firstName" class="form-label">Dein Name</label>
            <input type="text" class="form-control" id="firstName" name="firstName" data-variables-target="firstName"
                placeholder="Gib hier deinen Vornamen ein">
        </div>
        <div class="mb-3">
            <label for="middleName" class="form-label">Dein Zweitname</label>
            <input type="text" class="form-control" id="middleName" name="middleName" data-variables-target="middleName"
                placeholder="Gib hier deinen Zweitnamen ein">
        </div>
        <div class="mb-3">
            <label for="lastName" class="form-label">Dein Nachname</label>
            <input type="text" class="form-control" id="lastName" name="lastName" data-variables-target="lastName"
                placeholder="Gib hier deinen Nachnamen ein">
        </div>
        <div class="mb-3">
            <label for="age" class="form-label">Dein Alter</label>
            <input type="number" class="form-control" id="age" name="age" data-variables-target="age"
                placeholder="Gib hier dein Alter ein">
        </div>
        <div class="mb-3">
            <label for="hometown" class="form-label">Deine Heimat</label>
            <input type="text" class="form-control" id="hometown" name="hometown" data-variables-target="hometown"
                placeholder="Gib hier deine Heimat ein">
        </div>
        <button type="submit" class="btn btn-primary">Absenden</button>
    </form>

    <div class="mt-4" data-variables-target="output"></div>
</div>