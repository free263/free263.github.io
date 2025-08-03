<?php 
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(E_ALL);

// 定义上传路径
const MOBILE_DIR = '../files/mobile/';
const THUMB_DIR = '../files/thumb/';

// 定义上传限制
const MAX_FILE_COUNT = 50;
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ALLOWED_EXT = ['jpg', 'jpeg']; // 允许的文件扩展名
const THUMB_MAX_WIDTH = 250;

// 定义 JSON 配置文件的路径 (用于更新配置功能)
const CONFIG_FILE_PATH = '../src/Config.json';

// 认证密码
const AUTH_PASSWORD = '123456'; // 请根据需要修改您的密码

// --- 认证处理 ---
session_start();
$loggedIn = false;
if (isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true) {
    $loggedIn = true;
}

if (isset($_POST['password_submit'])) {
    if ($_POST['password'] === AUTH_PASSWORD) {
        $_SESSION['logged_in'] = true;
        $loggedIn = true;
        header('Location: ' . $_SERVER['PHP_SELF']);
        exit();
    } else {
        $loginError = "密码错误，请重试。";
    }
}

if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: ' . $_SERVER['PHP_SELF']);
    exit();
}

// 如果未登录，只显示登录表单
if (!$loggedIn) {
    ?>
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>图片上传 - 登录</title>
        <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f4; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
            .login-container { background-color: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); text-align: center; }
            input[type="password"], input[type="submit"] { padding: 10px; margin-top: 15px; border-radius: 4px; border: 1px solid #ccc; width: 100%; box-sizing: border-box; }
            input[type="submit"] { background-color: #007bff; color: white; cursor: pointer; border: none; }
            input[type="submit"]:hover { background-color: #0056b3; }
            .error { color: red; margin-bottom: 15px; }
        </style>
    </head>
    <body>
        <div class="login-container">
            <h2 style="margin-bottom: 10px;">请输入密码</h2>
            <?php if (isset($loginError)) showMessage($loginError, 'error'); ?>
            <form method="POST" style="width: 300px;">
                <input type="password" name="password" placeholder="密码" required>
                <input type="submit" name="password_submit" value="登录">
            </form>
        </div>
    </body>
    </html>
    <?php
    exit();
}
?>

<?php

// --- 辅助函数：显示消息 ---
function showMessage($message, $type = 'info') {
    echo "<div class='message $type'>$message</div>";
}

// --- 辅助函数：创建目录 ---
function createDirIfNotExist($dir) {
    if (!is_dir($dir)) {
        if (!mkdir($dir, 0755, true)) {
            die("错误：无法创建目录 '$dir'。请检查文件权限。<br>");
        }
    }
}

// --- 辅助函数：生成缩略图 ---
function generateThumbnail($sourcePath, $thumbPath, $maxWidth) {
    $imageType = exif_imagetype($sourcePath);
    if ($imageType !== IMAGETYPE_JPEG) {
        return false;
    }

    list($width, $height) = getimagesize($sourcePath);

    $sourceImage = imagecreatefromjpeg($sourcePath);
    
    if ($sourceImage === false) {
        return false;
    }

    $newWidth = $width;
    $newHeight = $height;

    if ($newWidth > $maxWidth) {
        $ratio = $maxWidth / $newWidth;
        $newWidth = $maxWidth;
        $newHeight = $height * $ratio;
    }

    $thumbImage = imagecreatetruecolor($newWidth, $newHeight);
    imagealphablending($thumbImage, false);
    imagesavealpha($thumbImage, true);

    imagecopyresampled($thumbImage, $sourceImage, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);
    imagejpeg($thumbImage, $thumbPath, 90);

    imagedestroy($sourceImage);
    imagedestroy($thumbImage);
    return true;
}

// --- 辅助函数：获取当前目录下最大的数字文件名 ---
function getMaxNumericFilename($directory) {
    $maxNum = 0;
    if (is_dir($directory)) {
        $files = scandir($directory);
        foreach ($files as $file) {
            if ($file === '.' || $file === '..') {
                continue;
            }
            if (preg_match('/^(\d+)\.(jpg|jpeg)$/i', $file, $matches)) {
                $num = (int)$matches[1];
                if ($num > $maxNum) {
                    $maxNum = $num;
                }
            }
        }
    }
    return $maxNum;
}

// --- 读取配置的函数 (用于Config.json) ---
// 此函数已修改，只读取文件内容，不再进行本地解码
function readConfig($path) {
    if (!file_exists($path)) {
        error_log("错误：配置文件 '$path' 不存在。");
        return [];
    }
    $jsonContent = file_get_contents($path);
    if ($jsonContent === false) {
        error_log("错误：无法读取配置文件 '$path'。请检查文件权限。");
        return [];
    }
    $config = json_decode($jsonContent, true);
    if ($config === null && json_last_error() !== JSON_ERROR_NONE) {
        error_log("错误：JSON 解析失败：" . json_last_error_msg());
        return [];
    }
    return $config; // 直接返回 JSON 解析后的数据
}

// --- 写入配置的函数 (用于Config.json) ---
// 此函数已修改，直接将数据写入文件，不再进行本地编码
function writeConfig($path, $data) {
    $jsonContent = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    if ($jsonContent === false) {
        error_log("错误：JSON 编码失败：" . json_last_error_msg());
        return false;
    }
    if (file_put_contents($path, $jsonContent) === false) {
        error_log("错误：无法写入配置文件 '$path'。请检查文件权限。");
        return false;
    }
    return true;
}

// --- 上传处理 ---
$uploadMessage = '';
$uploadMessageType = '';

// 确保上传目录存在
createDirIfNotExist(MOBILE_DIR);
createDirIfNotExist(THUMB_DIR);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['upload_normal']) || isset($_POST['upload_overwrite'])) {
        $isRenameChecked = isset($_POST['rename_option']);
        $isOverwriteUpload = isset($_POST['upload_overwrite']);

        if (empty($_FILES['images']['name'][0])) {
            $uploadMessage = "请选择要上传的图片。";
            $uploadMessageType = "error";
        } else {
            $totalUploaded = 0;
            $errors = [];
            $successes = [];

            $filesToProcess = [];
            foreach ($_FILES['images']['name'] as $key => $name) {
                if ($_FILES['images']['error'][$key] === UPLOAD_ERR_OK) {
                    $filesToProcess[] = [
                        'name' => $name,
                        'type' => $_FILES['images']['type'][$key],
                        'tmp_name' => $_FILES['images']['tmp_name'][$key],
                        'error' => $_FILES['images']['error'][$key],
                        'size' => $_FILES['images']['size'][$key],
                    ];
                } else {
                    $errors[] = "文件 '{$name}' 上传失败：错误码 " . $_FILES['images']['error'][$key];
                }
            }

            if (count($filesToProcess) > MAX_FILE_COUNT) {
                $errors[] = "单次上传图片数量不能超过 " . MAX_FILE_COUNT . " 张。";
                $filesToProcess = array_slice($filesToProcess, 0, MAX_FILE_COUNT);
            }

            if (!$isOverwriteUpload && !$isRenameChecked) {
                $existingFiles = array_filter(scandir(MOBILE_DIR), function($file) {
                    return !is_dir(MOBILE_DIR . $file);
                });
                if (!empty($existingFiles)) {
                    $errors[] = "普通上传模式下，目标相册已存在图片。请勾选“重命名”选项或使用“覆盖上传”按钮。";
                    $filesToProcess = [];
                }
            }

            $nextId = 0;
            if (!$isOverwriteUpload && $isRenameChecked) {
                $maxExistingNum = getMaxNumericFilename(MOBILE_DIR);
                $nextId = $maxExistingNum + 1;

                usort($filesToProcess, function($a, $b) {
                    return strnatcasecmp($a['name'], $b['name']);
                });
            }

            foreach ($filesToProcess as $file) {
                $originalFileName = $file['name'];
                $fileExt = strtolower(pathinfo($originalFileName, PATHINFO_EXTENSION));
                $fileNameWithoutExt = pathinfo($originalFileName, PATHINFO_FILENAME);

                if (!in_array($fileExt, ALLOWED_EXT)) {
                    $errors[] = "文件 '{$originalFileName}' 类型不被允许。仅支持 JPG/JPEG 格式。";
                    continue;
                }
                if ($file['size'] > MAX_FILE_SIZE) {
                    $errors[] = "文件 '{$originalFileName}' 大小超过限制 (" . (MAX_FILE_SIZE / (1024 * 1024)) . "MB)。";
                    continue;
                }

                $imageType = exif_imagetype($file['tmp_name']);
                if ($imageType === false || $imageType !== IMAGETYPE_JPEG) {
                    $errors[] = "文件 '{$originalFileName}' 不是有效的 JPG/JPEG 图像或可能包含有害内容。";
                    continue;
                }

                $targetFileName = $originalFileName;

                if ($isOverwriteUpload) {
                    if (!preg_match('/^[1-9]\d*\.(jpg|jpeg)$/i', $originalFileName)) {
                        $errors[] = "文件 '{$originalFileName}' 不符合覆盖上传的命名规则（必须是纯数字且不以0开头，例如 1.jpg, 123.jpg）。";
                        continue;
                    }
                } elseif ($isRenameChecked) {
                    $targetFileName = $nextId . '.' . $fileExt;
                    $nextId++;
                } else {
                    if (file_exists(MOBILE_DIR . $originalFileName)) {
                        $errors[] = "文件 '{$originalFileName}' 已存在，请勾选“重命名”或使用“覆盖上传”按钮。";
                        continue;
                    }
                }

                $targetMobilePath = MOBILE_DIR . $targetFileName;
                $targetThumbPath = THUMB_DIR . $targetFileName;

                if (move_uploaded_file($file['tmp_name'], $targetMobilePath)) {
                    if (generateThumbnail($targetMobilePath, $targetThumbPath, THUMB_MAX_WIDTH)) {
                        $successes[] = "文件 '{$originalFileName}' 已成功上传并处理为 '{$targetFileName}'。";
                        $totalUploaded++;
                    } else {
                        $errors[] = "文件 '{$originalFileName}' 上传成功，但缩略图生成失败（可能不是有效的JPEG）。";
                        unlink($targetMobilePath);
                    }
                } else {
                    $errors[] = "文件 '{$originalFileName}' 移动失败。";
                }
            }

            if (!empty($successes)) {
                $uploadMessage .= implode("<br>", $successes);
                $uploadMessageType = "success";
            }
            if (!empty($errors)) {
                $uploadMessage .= (!empty($uploadMessage) ? "<br><br>" : "") . "以下文件处理失败：<br>" . implode("<br>", $errors);
                $uploadMessageType = ($uploadMessageType === "success") ? "warning" : "error";
            }
            if ($totalUploaded === 0 && empty($errors)) {
                $uploadMessage = "没有文件被上传或处理。";
                $uploadMessageType = "info";
            }
        }
    
    } elseif (isset($_POST['update_config'])) {
        try {
            // 获取当前图片信息
            $imageCount = 0;
            $imageWidth = 0;
            $imageHeight = 0;

            if (is_dir(MOBILE_DIR)) {
                $files = scandir(MOBILE_DIR);
                foreach ($files as $file) {
                    if ($file !== '.' && $file !== '..') {
                        $filePath = MOBILE_DIR . $file;
                        if (is_file($filePath) && in_array(strtolower(pathinfo($filePath, PATHINFO_EXTENSION)), ALLOWED_EXT)) {
                            $imageCount++;
                        }
                    }
                }
            }

            $firstImagePath = MOBILE_DIR . '1.jpg';
            if (file_exists($firstImagePath) && is_file($firstImagePath)) {
                $imageSize = getimagesize($firstImagePath);
                if ($imageSize !== false) {
                    $imageWidth = $imageSize[0];
                    $imageHeight = $imageSize[1];
                }
            }
            
            // 构建 API 请求 URL。你的地址是正确的。
            $apiUrl = 'https://www.ximi.me/usr/api/encrypt.php?' . http_build_query([
                'PageCount' => $imageCount,
                'w' => $imageWidth,
                'h' => $imageHeight
            ]);
            
            // 调用外部加密 API
            $apiResponse = @file_get_contents($apiUrl);
            
            if ($apiResponse === false) {
                throw new Exception("调用加密 API 失败。请检查 'encrypt.php' 文件是否存在或可访问。");
            }
            
            $apiData = json_decode($apiResponse, true);
            
            if ($apiData === null || $apiData['status'] !== 'success') {
                throw new Exception("加密 API 返回错误：" . ($apiData['message'] ?? '未知错误'));
            }
            
            // 读取现有配置
            $currentConfig = readConfig(CONFIG_FILE_PATH);

            // 用 API 返回的加密数据更新配置
            $currentConfig['totalPageCount'] = $apiData['data']['totalPageCount'];
            $currentConfig['largePageWidth'] = $apiData['data']['largePageWidth'];
            $currentConfig['largePageHeight'] = $apiData['data']['largePageHeight'];

            // 将更新后的配置写入文件
            if (writeConfig(CONFIG_FILE_PATH, $currentConfig) === false) {
                throw new Exception("无法写入配置文件。请检查文件权限。");
            }
            
            $uploadMessage = "相册配置更新成功！";
            $uploadMessageType = "success";
            
        } catch (Throwable $e) {
            $uploadMessage = "更新相册配置时发生错误：" . $e->getMessage();
            $uploadMessageType = "error";
        }
    }
}
?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>图片管理系统</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f4f4f4; }
        .container { max-width: 900px; margin: auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        .form-section { margin-bottom: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 5px; }
        .message { padding: 10px; margin-bottom: 15px; border-radius: 5px; }
        .message.info { background-color: #e2f2ff; border-color: #b9e0ff; color: #0069c0; }
        .message.success { background-color: #e3fadc; border-color: #c0f4c0; color: #2e8b57; }
        .message.warning { background-color: #fff8e1; border-color: #ffe082; color: #ff8c00; }
        .message.error { background-color: #fce4e4; border-color: #fcc0c0; color: #d32f2f; }
        h1, h2 { border-bottom: 2px solid #007bff; padding-bottom: 10px; margin-top: 0; }
        input[type="file"], input[type="submit"] { margin-top: 10px; }
        .image-gallery { display: flex; flex-wrap: wrap; gap: 10px; }
        .image-container { position: relative; width: 100px; height: 100px; border: 1px solid #ccc; overflow: hidden; }
        .image-container img { width: 100%; height: 100%; object-fit: cover; }
        .image-container .delete-button { position: absolute; top: 2px; right: 2px; background: rgba(255, 0, 0, 0.7); color: white; border: none; font-size: 12px; cursor: pointer; padding: 2px 5px; border-radius: 3px; }
        .delete-form { display: inline; }
        .upload-options { margin-top: 10px; }
        .upload-options label { margin-right: 20px; }
                     button, input[type="submit"], .button-link {
        background-color: #28a745;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        margin-right: 10px;
        margin-top: 10px;
        text-decoration: none; /* 移除链接下划线 */
        display: inline-block; /* 使链接像按钮一样 */
        text-align: center;
    }
    button:hover, input[type="submit"]:hover, .button-link:hover {
        background-color: #218838;
    }
    </style>
</head>
<body>
    <div class="container">
        <h1>图片管理系统</h1>
        <p>欢迎, 您已登录！<a href="?logout">退出登录</a></p>
        <?php if (!empty($uploadMessage)) showMessage($uploadMessage, $uploadMessageType); ?>

        <div class="form-section">
            <h2>上传图片</h2>
            <form method="POST" enctype="multipart/form-data">
                <input type="file" name="images[]" multiple required>
                <div class="upload-options">
                    <input type="checkbox" id="rename_option" name="rename_option">
                    <label for="rename_option">上传时自动按数字重命名（例：1.jpg, 2.jpg...）</label>
                </div>
                <input type="submit" name="upload_normal" value="普通上传">
                <input type="submit" name="upload_overwrite" value="覆盖上传 (需上传文件名为纯数字)">
                 <p>普通上传模式下，若相册已存在图片，请务必勾选"重命名"选项。</p>
                <p>覆盖上传模式下，请确保上传的图片文件名是纯数字且不以0开头（如 1.jpg, 123.jpg），此模式不支持重命名。</p>
                <p>注意：图片名称 = 页码，覆盖上传时清留意，图片名大于总页数则不显示图片</p>
            </form>
        </div>

        <div class="form-section">
            <h2>更新相册配置</h2>
            <form method="POST">
                <p>点击此按钮将根据 `mobile` 目录中的图片数量和尺寸更新 `Config.json`。</p>
                <p>相册宽度=第一张图片宽、高，页码数量=图片数量</p>
                <p>相册内图片增加后请点击此按钮，否则前台相册页码不会自动更新</p>
                <input type="submit" name="update_config" value="更新配置">
                <button type="button" onclick="window.location.href='?logout=true'">退出登录</button>
 
            </form>
        </div>
        <div class="form-section">
            <h2>修改默认配置</h2>
            <form method="POST">
                <p>点击此按钮将根据 `mobile` 目录中的图片数量和尺寸更新 `ximi.js`。</p>
                <p>一般用不上，仅在需要将相册打包到本地查看时才需要点击</p>
                <p>在线浏览相册使用json配置, 本地流量相册使用默认js</p>
                <a href="./update_js_config.php" target="_blank" class="button-link">更新默认配置</a>
            </form>
        </div>
        <div class="form-section">
            <h2>删除图片</h2>
            <p>点击图片右上角的“X”按钮可以删除图片。</p>
            <p>非末页图片请勿直接删除，误删可覆盖方式上上传补上</p>
            <p>直接删除会导致此页码空白，并且最终生成错误页码数</p>
            <div class="image-gallery">
                <?php
                // 删除文件逻辑
                if (isset($_POST['delete_file'])) {
                    $filename = basename($_POST['delete_file']);
                    $mobileFilePath = MOBILE_DIR . $filename;
                    $thumbFilePath = THUMB_DIR . $filename;

                    $deleted = false;
                    if (file_exists($mobileFilePath) && unlink($mobileFilePath)) {
                        $deleted = true;
                    }
                    if (file_exists($thumbFilePath) && unlink($thumbFilePath)) {
                        $deleted = true;
                    }
                    if ($deleted) {
                        showMessage("文件 '{$filename}' 已成功删除。", 'success');
                    } else {
                        showMessage("删除文件 '{$filename}' 失败，请检查文件权限。", 'error');
                    }
                }

                // 显示图片列表
                $files = array_diff(scandir(THUMB_DIR), ['.', '..']);
                sort($files, SORT_NATURAL); // 按自然数顺序排序

                foreach ($files as $file) {
                    $thumbPath = THUMB_DIR . $file;
                    $mobilePath = MOBILE_DIR . $file;
                    if (is_file($thumbPath) && is_file($mobilePath)) {
                        echo "<div class='image-container'>";
                        echo "<img src='$thumbPath' alt='$file' title='$file'>";
                        echo "<form class='delete-form' method='POST' onsubmit='return confirm(\"确定要删除文件 {$file} 吗？\");'>";
                        echo "<input type='hidden' name='delete_file' value='$file'>";
                        echo "<button type='submit' class='delete-button'>X</button>";
                        echo "</form>";
                        echo "</div>";
                    }
                }
                ?>
            </div>
        </div>
    </div>
</body>
</html>
