<?php
  require_once __DIR__ . '/views/header.php';

    // Standardseite setzen
        $page = trim((string)($_GET['javascript'] ?? ''), '/');

    // Falls keine Seite gesetzt ist, auf index.php?page=index umleiten
    if ($page === '') {
        header("Location: ../index.php?page=ruben-winkler");
        exit();
    }

    if (!preg_match('/^[a-zA-Z0-9_\/-]+$/', $page)) {
        http_response_code(400);
        echo "Ungueltige Anfrage.";
        require_once __DIR__ . '/views/footer.php';
        exit();
    }

    // Pfad zur Datei
    $filePath = __DIR__ . "/pages/ruben-winkler/javascript/" . $page . ".php";

    // Datei einbinden, wenn sie existiert
    if (is_file($filePath)) {
        include $filePath;
    } else {
        http_response_code(404);
        echo "Die angeforderte Seite wurde nicht gefunden.";
    }

  require_once __DIR__ . '/views/footer.php';