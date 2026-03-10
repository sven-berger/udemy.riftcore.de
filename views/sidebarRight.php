<?php
$sidebarFile = __DIR__ . '/../assets/json/sidebarRight.json';
$sidebarData = [];

if (is_file($sidebarFile)) {
    $jsonContent = file_get_contents($sidebarFile);
    if ($jsonContent !== false) {
        $decoded = json_decode($jsonContent, true);
        if (is_array($decoded)) {
            $sidebarData = $decoded;
        }
    }
}

$lecturers = [];

if (isset($sidebarData['lecturers']) && is_array($sidebarData['lecturers'])) {
    $lecturers = $sidebarData['lecturers'];
} elseif (isset($sidebarData['intro']) || isset($sidebarData['sections'])) {
    // Backward compatibility for old single-lecturer JSON format.
    $lecturers = [$sidebarData];
}
?>

<?php foreach ($lecturers as $lecturer): ?>
<?php
$introTitle = trim((string)($lecturer['intro']['title'] ?? ''));
$introText = trim((string)($lecturer['intro']['text'] ?? ''));
$sections = $lecturer['sections'] ?? [];
?>
<div class="sidebar-shell d-flex flex-column h-100 mt-2">
    <div class="sidebar-topbar d-flex justify-content-center align-items-center rounded-top-3 p-3 fw-bold bg-danger">
        <h2 class="p-0 m-0 text-light"><?= htmlspecialchars($introTitle, ENT_QUOTES, 'UTF-8') ?></h2>
    </div>
    <div class="sidebar-panel border rounded-bottom-3 d-flex flex-column justify-content-start bg-light">
        <?php if ($introText !== ''): ?>
        <div class="mt-3 text-black fw-normal d-block d-md-flex flex-column p-3">
            <p><?= htmlspecialchars($introText, ENT_QUOTES, 'UTF-8') ?></p>
        </div>
        <?php endif; ?>

        <?php foreach ($sections as $section): ?>
        <?php $title = trim((string)($section['title'] ?? '')); ?>
        <section class="sidebar-section bg-light">
            <?php if ($title !== ''): ?>
            <div
                class="sidebar-section-title d-flex justify-content-center align-items-center p-3 mb-3 bg-white border-top border-bottom">
                <h3 class="p-0 m-0 text-black">
                    <?= htmlspecialchars($section['title'] ?? '', ENT_QUOTES, 'UTF-8') ?>
                </h3>
            </div>
            <?php endif; ?>

            <?php foreach (($section['groups'] ?? []) as $group): ?>
            <h4 class="content-title"><?= htmlspecialchars($group['title'] ?? '', ENT_QUOTES, 'UTF-8') ?></h4>
            <nav class="sidebar-nav p-3 rounded-bottom-3">
                <ul class="list-disc d-grid gap-2 gap-md-2 gap-lg-2 mb-0">
                    <?php foreach (($group['links'] ?? []) as $link): ?>
                    <li>
                        <a href="<?= htmlspecialchars($link['href'] ?? '#', ENT_QUOTES, 'UTF-8') ?>"
                            class="text-danger fw-bold text-decoration-none">
                            <?= htmlspecialchars($link['label'] ?? '', ENT_QUOTES, 'UTF-8') ?>
                        </a>
                    </li>
                    <?php endforeach; ?>
                </ul>
            </nav>
            <?php endforeach; ?>
        </section>
        <?php endforeach; ?>
    </div>
</div>
<?php endforeach; ?>