<?php

// -----------------------------------------------------------
// 脚本功能：
// 读取 Config.json 中的加密配置，并更新 ximi.js 文件中的默认配置。
// -----------------------------------------------------------

// 定义文件路径，假设都在同一目录下
const CONFIG_JSON_PATH = '../src/Config.json';
const XIMI_JS_PATH = '../src/ximi.js';

// 禁用错误显示以保持输出干净
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(E_ALL);

echo "<h1>更新 ximi.js 默认配置</h1>";

try {
    // 1. 读取并解析 Config.json
    if (!file_exists(CONFIG_JSON_PATH)) {
        throw new Exception("错误：未找到文件 '" . CONFIG_JSON_PATH . "'。");
    }
    $configJsonContent = file_get_contents(CONFIG_JSON_PATH);
    $configData = json_decode($configJsonContent, true);

    if ($configData === null || json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception("错误：解析 '" . CONFIG_JSON_PATH . "' 失败。请检查文件格式。");
    }

    // 检查是否存在所需的配置项
    if (!isset($configData['totalPageCount'], $configData['largePageWidth'], $configData['largePageHeight'])) {
        throw new Exception("错误：'" . CONFIG_JSON_PATH . "' 中缺少必要的配置项。");
    }

    // 提取配置值
    $totalPageCount = $configData['totalPageCount'];
    $largePageWidth = $configData['largePageWidth'];
    $largePageHeight = $configData['largePageHeight'];
    
    echo "<p>成功读取 '" . CONFIG_JSON_PATH . "' 文件。</p>";
    echo "<ul>";
    echo "<li>totalPageCount: **{$totalPageCount}**</li>";
    echo "<li>largePageWidth: **{$largePageWidth}**</li>";
    echo "<li>largePageHeight: **{$largePageHeight}**</li>";
    echo "</ul>";

    // 2. 读取 ximi.js
    if (!file_exists(XIMI_JS_PATH)) {
        throw new Exception("错误：未找到文件 '" . XIMI_JS_PATH . "'。");
    }
    $ximiJsContent = file_get_contents(XIMI_JS_PATH);

    // 3. 使用更健壮的正则表达式进行替换
    // 这个正则表达式会找到 totalPageCount, largePageWidth 和 largePageHeight 这三个键，并只替换它们的值。
    $patterns = [
        '/(["\']totalPageCount["\']\s*:\s*)["\'][^"\']+["\']/',
        '/(["\']largePageWidth["\']\s*:\s*)["\'][^"\']+["\']/',
        '/(["\']largePageHeight["\']\s*:\s*)["\'][^"\']+["\']/'
    ];

    $replacements = [
        '$1"' . $totalPageCount . '"',
        '$1"' . $largePageWidth . '"',
        '$1"' . $largePageHeight . '"'
    ];
    
    $newXimiJsContent = $ximiJsContent;
    $count = 0;

    // 逐个替换
    for ($i = 0; $i < count($patterns); $i++) {
        $newXimiJsContent = preg_replace($patterns[$i], $replacements[$i], $newXimiJsContent, 1, $currentCount);
        $count += $currentCount;
    }
    
    if ($count === 0) {
        throw new Exception("错误：未在 '" . XIMI_JS_PATH . "' 中找到任何需要更新的配置项。请检查键名是否匹配。");
    }

    // 4. 将修改后的内容写回文件
    if (file_put_contents(XIMI_JS_PATH, $newXimiJsContent) === false) {
        throw new Exception("错误：无法写入 '" . XIMI_JS_PATH . "'。请检查文件权限。");
    }

    echo "<p style='color: green; font-weight: bold;'>成功更新 '" . XIMI_JS_PATH . "' 中的 'bookConfigDefault' 配置！</p>";

} catch (Exception $e) {
    echo "<p style='color: red; font-weight: bold;'>发生错误：" . htmlspecialchars($e->getMessage()) . "</p>";
}

?>