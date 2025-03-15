<?php
// 定义txt文件的路径
$txtFilePath = 'korea.txt';
 
// 检查是否有link参数在URL中
if (isset($_GET['link'])) {
    $linkParam = $_GET['link']; // 获取link参数值，例如：link1, link2等
    $linkNumber = intval(preg_replace('/[^0-9]/', '', $linkParam)); // 仅获取数字部分作为序号
    $linkNumber--; // 因为我们是从0开始计数的，所以需要减1（如果需要）
 
    // 读取txt文件内容到数组中
    $lines = file($txtFilePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
 
    // 检查序号是否有效
    if ($linkNumber >= 0 && $linkNumber < count($lines)) {
        $url = $lines[$linkNumber]; // 获取对应序号的链接
        echo header("Location: {$url}"); // 输出链接，并使用htmlspecialchars防止XSS攻击
    } else {
        echo "Invalid link number."; // 如果序号无效，则输出错误信息
    }
} else {
    echo "No link parameter provided."; // 如果没有提供link参数，则输出错误信息
}
?>