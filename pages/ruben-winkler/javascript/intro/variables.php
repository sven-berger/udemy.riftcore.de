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
const alter = 35;
const heimat = "Idstein";

console.log(
  "Hallo, mein Name ist " + gesamterName + ", ich bin " +
  alter + " Jahre alt und wohne in " + heimat
);
JS;
?>

<h2 class="mb-5">Variablen in JavaScript</h2>

<pre><code class="language-javascript"><?= htmlspecialchars($jsCode) ?></code></pre>

<div data-controller="variables">
    <div class="mt-4" data-variables-target="output"></div>
</div>