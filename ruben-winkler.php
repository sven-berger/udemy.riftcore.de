<?php
  require_once __DIR__ . '/views/header.php';

  // Standardseite setzen
    $page = $_GET['js'] ?? '';

    // Falls keine Seite gesetzt ist, auf index.php?page=index umleiten
    if ($page === '') {
        header("Location: ruben-winkler.php?js=index");
        exit();
    }

    // Pfad zur Datei
    $filePath = (string) "pages/ruben-winkler/" . $page . ".php";

    // Datei einbinden, wenn sie existiert
    if (file_exists($filePath)) {
        include $filePath;
    } else {
        echo "Die angeforderte Seite wurde nicht gefunden.";
    }
  
  require_once __DIR__ . '/views/footer.php';
  
?>