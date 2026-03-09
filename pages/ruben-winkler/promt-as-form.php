<?php
    $pageTitle = "Prompt als Formular-Ersatz";
?>

<?php
 $jsCode = <<<'JS'
"use strict";

const firstName = prompt("Wie lautet dein Vorname?");
const middleName = prompt("Hast du einen Zweitnamen? Falls ja: Wie lautet er?");
const lastName = prompt("Wie lautet dein Nachname?");
let yourName = firstName + " " + middleName + " " + lastName;
const birthday = prompt("Wie alt bist du?");

console.log("Hallo " + yourName + " - Du bist " + birthday + " Jahre alt");

JS;
?>

<h2 class="mb-5">Prompt als Formular-Ersatz</h2>

<pre><code class="language-javascript"><?= htmlspecialchars($jsCode) ?></code></pre>

<div data-controller="promptAsForm">
    <form method="POST" data-action="submit->promptAsForm#createOutput" class="mt-4">
        <div class="mb-3">
            <label for="firstName" class="form-label">Vorname</label>
            <input type="text" class="form-control" id="firstName" name="firstName"
                placeholder="Gib hier deinen Vornamen ein" required>
        </div>
        <div class="mb-3">
            <label for="middleName" class="form-label">Zweitname</label>
            <input type="text" class="form-control" id="middleName" name="middleName"
                placeholder="Hast du einen Zweitnamen? Falls ja: Wie lautet er?">
        </div>
        <div class="mb-3">
            <label for="lastName" class="form-label">Nachname</label>
            <input type="text" class="form-control" id="lastName" name="lastName"
                placeholder="Gib hier deinen Nachnamen ein" required>
        </div>
        <div class="mb-3">
            <label for="age" class="form-label">Alter</label>
            <input type="number" class="form-control" id="age" name="age" placeholder="Gib hier dein Alter ein"
                required>
        </div>
        <button type="submit" class="btn btn-primary">Absenden</button>
    </form>
    <div class="mt-4" data-promptAsForm-target="output"></div>
</div>