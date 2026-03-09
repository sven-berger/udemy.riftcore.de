                </div>
                </div>
                <div class="col-2 d-none d-lg-flex">
                    <aside class="me-lg-3 flex-grow-1">
                        <?php require_once __DIR__ . '/sidebarRight.php'; ?>
                    </aside>
                </div>
                </div>
                </main>

                <div class="offcanvas offcanvas-start" tabindex="-1" id="leftSidebarOffcanvas"
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

                <div class="offcanvas offcanvas-end" tabindex="-1" id="rightSidebarOffcanvas"
                    aria-labelledby="rightSidebarOffcanvasLabel">
                    <div class="offcanvas-header offcanvas-sidebar-header">
                        <h5 class="offcanvas-title" id="rightSidebarOffcanvasLabel">Angemeldet als <?= $user; ?></h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body offcanvas-sidebar-body text-white">
                        <?php require_once __DIR__ . '/sidebarRight.php'; ?>
                    </div>
                </div>


                <script src="/assets/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script type="module" src="/assets/stimulus-bootstrap.js"></script>



                <script src="/assets/highlight/highlight.min.js"></script>

                <script>
hljs.highlightAll();
                </script>

                </body>

                </html>