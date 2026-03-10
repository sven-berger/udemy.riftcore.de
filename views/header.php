<?php ob_start(); ?>

<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>udemy.riftcore.de</title>
    <link href="https://utensils.riftcore.de/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://utensils.riftcore.de/highlight/styles/default.min.css">
    <link style="text/css" href="/ressources/css/app.css" rel="stylesheet">

</head>

<body class="d-flex flex-column min-vh-100">
    <header>
        <?php require_once __DIR__ . '/navbar.php'; ?>
    </header>
    <main class=" d-flex flex-column flex-grow-1 mb-3">
        <div class="d-lg-none px-3 mb-3">
            <div class="row g-2">
                <div class="col-12 col-sm-6">
                    <button class="rounded-5 btn w-100 py-3 sidebar-toggle-btn left-sidebar-toggle-btn" type="button"
                        data-bs-toggle="offcanvas" data-bs-target="#leftSidebarOffcanvas"
                        aria-controls="leftSidebarOffcanvas">
                        Linke Seitenleiste öffnen
                    </button>
                </div>
                <div class="col-12 col-sm-6">
                    <button class="rounded-5 btn w-100 py-3 sidebar-toggle-btn right-sidebar-toggle-btn" type="button"
                        data-bs-toggle="offcanvas" data-bs-target="#rightSidebarOffcanvas"
                        aria-controls="rightSidebarOffcanvas">
                        Rechte Seitenleiste öffnen
                    </button>
                </div>
            </div>
        </div>
        <div class="row flex-grow-1 w-100 layout-main-row">
            <div class="col-2 d-none d-lg-flex layout-sidebar-col">
                <aside class="ms-lg-3 flex-grow-1 layout-sidebar-aside">
                    <?php require_once __DIR__ . '/sidebarLeft.php'; ?>
                </aside>
            </div>
            <div class="col-12 col-lg-8 d-flex layout-content-col">
                <div
                    class="content content-panel shadow-sm border rounded-3 p-4 ms-3 mt-2 ms-lg-0 flex-grow-1 h-100 bg-light">