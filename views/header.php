<?php
    ob_start();
    $user = "Sven Berger";
?>

<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <link style="text/css" href="/ressources/css/app.css" rel="stylesheet">
</head>

<body class="d-flex flex-column min-vh-100">
    <header>
        <?php require_once __DIR__ . '/navbar.php'; ?>
    </header>
    <main class="d-flex flex-column flex-grow-1 mb-3">
        <div class="d-lg-none px-3">
            <button class="rounded-5 btn w-100 py-3 mb-3 left-sidebar-toggle-btn" type="button"
                data-bs-toggle="offcanvas" data-bs-target="#leftSidebarOffcanvas" aria-controls="leftSidebarOffcanvas">
                Linke Seitenleiste öffnen
            </button>
        </div>
        <div class="row flex-grow-1 w-100">
            <div class="col-3 d-none d-lg-flex">
                <aside class="ms-lg-3 flex-grow-1">
                    <?php require_once __DIR__ . '/sidebarLeft.php'; ?>
                </aside>
            </div>
            <div class="col-12 col-lg-9 d-flex">
                <div class="content p-4 rounded-5 ms-3 ms-lg-0 me-lg-0 flex-grow-1">