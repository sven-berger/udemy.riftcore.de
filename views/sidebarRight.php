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

<?php if ($introTitle !== ''): ?>
<div class="sidebar-box rounded-5 p-3 p-md-4 text-danger fw-bold mb-3">
    <div class="d-flex justify-content-center align-items-center">
        <h2 class="p-0 m-0"><?= htmlspecialchars($introTitle, ENT_QUOTES, 'UTF-8') ?></h2>
    </div>
</div>
<?php endif; ?>

<?php if ($introText !== ''): ?>
<div class="sidebar-box rounded-5 ps-3 pt-3 p-md-4 mb-3">
    <div class="d-block d-md-flex flex-column">
        <p><?= htmlspecialchars($introText, ENT_QUOTES, 'UTF-8') ?></p>
    </div>
</div>
<?php endif; ?>

<?php foreach ($sections as $section): ?>
<?php $title = trim((string)($section['title'] ?? '')); ?>
<?php if ($title !== ''): ?>
<div class="sidebar-box rounded-5 p-3 p-md-4 text-success fw-bold mb-3">
    <div class="d-flex justify-content-center align-items-center">
        <h3 class="p-0 m-0"><?= htmlspecialchars($title, ENT_QUOTES, 'UTF-8') ?></h3>
    </div>
</div>
<?php endif; ?>

<div class="sidebar-box rounded-5 ps-3 pt-3 pb-5 pe-3 text-white text-start mb-3">
    <?php foreach (($section['groups'] ?? []) as $group): ?>

    <h4 class="content-title"><?= htmlspecialchars($group['title'] ?? '', ENT_QUOTES, 'UTF-8') ?></h4>
    <nav class="sidebar-nav">
        <ul class="list-disc d-grid gap-2 gap-md-2 gap-lg-2 mb-0">
            <?php foreach (($group['links'] ?? []) as $link): ?>
            <li>
                <a href="<?= htmlspecialchars($link['href'] ?? '#', ENT_QUOTES, 'UTF-8') ?>"
                    class="sidebar-link text-decoration-none">
                    <?= htmlspecialchars($link['label'] ?? '', ENT_QUOTES, 'UTF-8') ?>
                </a>
            </li>
            <?php endforeach; ?>
        </ul>
    </nav>
    <?php endforeach; ?>

</div>
<?php endforeach; ?>
<?php endforeach; ?>