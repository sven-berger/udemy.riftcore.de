                </div>
            </div>
        </div>
    </main>

                <div class="offcanvas offcanvas-start w-100" tabindex="-1" id="leftSidebarOffcanvas"
                    aria-labelledby="leftSidebarOffcanvasLabel">
                    <div class="offcanvas-header offcanvas-sidebar-header">
                        <h5 class="offcanvas-title" id="leftSidebarOffcanvasLabel">Angemeldet als <?= $user; ?></h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
        <div class="offcanvas-body offcanvas-sidebar-body text-white">
            <?php require_once __DIR__ . '/sidebarLeft.php'; ?>
        </div>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
        crossorigin="anonymous"></script>
    <script type="module" src="/assets/stimulus-bootstrap.js"></script>

    </body>

    </html>