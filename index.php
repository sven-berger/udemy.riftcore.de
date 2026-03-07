<?php
  require_once __DIR__ . '/views/header.php';

  // Standardseite setzen
    $page = $_GET['page'] ?? '';

    // Falls keine Seite gesetzt ist, auf index.php?page=index umleiten
    if ($page === '') {
        header("Location: index.php?page=index");
        exit();
    }

    // Pfad zur Datei
    $filePath = "pages/" . $page . ".page.php";

    // Datei einbinden, wenn sie existiert
    if (file_exists($filePath)) {
        include $filePath;
    } else {
      
    }
  
  require_once __DIR__ . '/views/footer.php';
  
?>