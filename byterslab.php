<?php
require_once __DIR__ . '/views/header.php';

$js = $_GET['js'] ?? ($_GET['javascript'] ?? null);
$php = $_GET['php'] ?? null;
$htmlCss = $_GET['html-css'] ?? null;
$page = 'index';
$basePath = __DIR__ . '/pages/byterslab';

// Optional: klare Fehlermeldung, wenn mehrere Parametertypen gesetzt sind
$selectedTypes = 0;
if ($js !== null) {
    $selectedTypes++;
}
if ($php !== null) {
    $selectedTypes++;
}
if ($htmlCss !== null) {
    $selectedTypes++;
}

if ($selectedTypes > 1) {
    http_response_code(400);
    echo "<h2>Ungueltige Anfrage</h2>";
    require_once __DIR__ . '/views/footer.php';
    exit;
}

if ($js !== null) {
    $page = $js;
    $basePath .= '/javascript';
} elseif ($php !== null) {
    $page = $php;
    $basePath .= '/php';
} elseif ($htmlCss !== null) {
    $page = $htmlCss;
    $basePath .= '/html-css';
}

if (!preg_match('/^[a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)*$/', $page)) {
    http_response_code(400);
    echo "<h2>Ungueltige Anfrage</h2>";
    require_once __DIR__ . '/views/footer.php';
    exit;
}

$candidates = [];
if ($js !== null) {
    $candidates = [
        "$basePath/{$page}.js.php",
        "$basePath/{$page}.page.php",
        "$basePath/{$page}.php",
    ];
} elseif ($php !== null) {
    $candidates = [
        "$basePath/{$page}.php.php",
        "$basePath/{$page}.page.php",
        "$basePath/{$page}.php",
        "$basePath/index.php.php", // Fallback, weil aktuell nur index.php.php existiert
    ];
} elseif ($htmlCss !== null) {
    $candidates = [
        "$basePath/{$page}.html.php",
        "$basePath/{$page}.page.php",
        "$basePath/{$page}.php",
    ];
} else {
    $candidates = [
        "$basePath/index.page.php",
        "$basePath/index.php",
    ];
}

$filePath = null;
foreach ($candidates as $candidate) {
    if (is_file($candidate)) {
        $filePath = $candidate;
        break;
    }
}

if ($filePath !== null) {
    require $filePath;
} else {
    http_response_code(404);
    echo "<h2>404 - Seite nicht gefunden</h2>";
}

require_once __DIR__ . '/views/footer.php';