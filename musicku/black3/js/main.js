<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8" />
    <meta name="author" content="Script Tutorials" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <title>黑色质感HTML5播放器 - 模式切换</title>
    <link href="css/styles.css" rel="stylesheet" type="text/css" />
    <style>
        /* 保持原有样式不变，仅增加列表高度限制和模式切换按钮样式 */
        .playlist {
            max-height: 400px;
            overflow-y: auto;
            scrollbar-width: thin;
            scrollbar-color: #666 #333;
        }
        .playlist::-webkit-scrollbar {
            width: 6px;
        }
        .playlist::-webkit-scrollbar-track {
            background: #333;
            border-radius: 4px;
        }
        .playlist::-webkit-scrollbar-thumb {
            background: #666;
            border-radius: 4px;
        }

        .mode-switch {
            background: #222;
            border-radius: 4px 4px 0 0;
            padding: 8px 15px 6px 15px;
            margin: 0 2px 0 2px;
            display: flex;
            justify-content: flex-end;
            gap: 12px;
            font-family: Arial, sans-serif;
            font-size: 13px;
            color: #ccc;
            border-bottom: 1px solid #444;
        }
        .mode-switch span {
            cursor: pointer;
            padding: 3px 10px;
            border-radius: 12px;
            background: #2a2a2a;
            transition: all 0.2s;
            user-select: none;
        }
        .mode-switch span.active-mode {
            background: #555;
            color: #fff;
            box-shadow: 0 0 6px rgba(255,255,255,0.1);
        }
        .mode-switch span:hover {
            background: #3a3a3a;
        }
        .mode-switch span.active-mode:hover {
            background: #666;
        }
        .playlist-wrapper {
            margin: -10px 0 0 2px;
            position: relative;
            z-index: 1;
            border-radius: 0 0 5px 5px;
            overflow: hidden;
            background: #333;
            width: 322px;
        }
        .playlist-wrapper .playlist {
            margin: 0;
            border-radius: 0;
            padding-top: 8px;
            background: #333;
        }
        .playlist {
            padding-bottom: 10px;
        }
    </style>
    <script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
    <script type="text/javascript" src="js/jquery-ui-1.8.21.custom.min.js"></script>
</head>
<body>

<div class="example">
    <div class="player">
        <div class="pl"></div>
        <div class="title"></div>
        <div class="artist"></div>
        <div class="cover"></div>
        <div class="controls">
            <div class="play"></div>
            <div class="pause"></div>
            <div class="rew"></div>
            <div class="fwd"></div>
        </div>
        <div class="volume"></div>
        <div class="tracker"></div>
    </div>

    <div class="playlist-wrapper">
        <div class="mode-switch">
            <span id="modeSequential" class="active-mode">顺序播放</span>
            <span id="modeShuffle">随机播放</span>
        </div>
        <ul class="playlist hidden">
            <li audiourl="https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/5566-我难过.mp3" cover="images/1.jpg" artist="5566">5566-我难过</li>
            <li audiourl="https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/ALin-给我一个理由忘记.mp3" cover="images/2.jpg" artist="ALin">ALin-给我一个理由忘记</li>
            <li audiourl="https://cloud.hhhnn.com/d/189Family133/音乐视听/精选/ALin-有一种悲伤.mp3" cover="images/3.jpg" artist="ALin">ALin-有一种悲伤</li>
            <!-- ... 其他歌曲保持不变 ... -->
        </ul>
    </div>
</div>

<script type="text/javascript" src="js/main.js"></script>
<script>
    (function($) {
        $(document).ready(function() {
            // ---------- 模式切换功能 ----------
            var shuffleMode = false;
            var $playlistItems = $('.playlist li');
            var originalOrder = [];
            $playlistItems.each(function() { originalOrder.push(this); });

            var $seqBtn = $('#modeSequential');
            var $shufBtn = $('#modeShuffle');

            function reorderPlaylist() {
                var $list = $('.playlist');
                var currentActive = $list.find('li.active');
                var activeUrl = currentActive.attr('audiourl');

                if (shuffleMode) {
                    var items = $list.find('li').get();
                    for (var i = items.length - 1; i > 0; i--) {
                        var j = Math.floor(Math.random() * (i + 1));
                        var temp = items[i];
                        items[i] = items[j];
                        items[j] = temp;
                    }
                    $list.empty().append(items);
                } else {
                    $list.empty().append(originalOrder);
                }

                if (activeUrl) {
                    var $newActive = $list.find('li[audiourl="' + activeUrl + '"]');
                    if ($newActive.length) {
                        $list.find('li').removeClass('active');
                        $newActive.addClass('active');
                    } else {
                        $list.find('li:first').addClass('active');
                    }
                } else {
                    $list.find('li:first').addClass('active');
                }
            }

            function setMode(mode) {
                if (mode === 'shuffle') {
                    shuffleMode = true;
                    $seqBtn.removeClass('active-mode');
                    $shufBtn.addClass('active-mode');
                } else {
                    shuffleMode = false;
                    $shufBtn.removeClass('active-mode');
                    $seqBtn.addClass('active-mode');
                }
                reorderPlaylist();
            }

            $seqBtn.click(function() { if (shuffleMode) setMode('sequential'); });
            $shufBtn.click(function() { if (!shuffleMode) setMode('shuffle'); });

            // 获取当前歌曲索引
            function getCurrentIndex() {
                var $list = $('.playlist');
                var $active = $list.find('li.active');
                if ($active.length) {
                    return $list.find('li').index($active);
                }
                return -1;
            }

            // 重写 fwd 和 rew 以支持随机模式
            // 解除原有绑定
            $('.fwd').off('click');
            $('.rew').off('click');

            // 重新绑定下一首
            $('.fwd').click(function(e) {
                e.preventDefault();
                var $list = $('.playlist');
                var $items = $list.find('li');
                var currentIdx = getCurrentIndex();
                var $next;

                if (shuffleMode) {
                    // 随机模式
                    var candidates = [];
                    for (var i = 0; i < $items.length; i++) {
                        if (i !== currentIdx) {
                            candidates.push(i);
                        }
                    }
                    if (candidates.length === 0) {
                        $next = $items.eq(0);
                    } else {
                        var randomIdx = candidates[Math.floor(Math.random() * candidates.length)];
                        $next = $items.eq(randomIdx);
                    }
                } else {
                    // 顺序模式
                    var nextIdx = currentIdx + 1;
                    if (nextIdx >= $items.length) {
                        nextIdx = 0;
                    }
                    $next = $items.eq(nextIdx);
                }

                if ($next && $next.length) {
                    // 调用 main.js 中的函数
                    if (window.stopAudio) window.stopAudio();
                    if (window.initAudio) window.initAudio($next);
                    if (window.playAudio) window.playAudio();
                }
            });

            // 重新绑定上一首
            $('.rew').click(function(e) {
                e.preventDefault();
                var $list = $('.playlist');
                var $items = $list.find('li');
                var currentIdx = getCurrentIndex();
                var $prev;

                if (shuffleMode) {
                    // 随机模式
                    var candidates = [];
                    for (var i = 0; i < $items.length; i++) {
                        if (i !== currentIdx) {
                            candidates.push(i);
                        }
                    }
                    if (candidates.length === 0) {
                        $prev = $items.eq(0);
                    } else {
                        var randomIdx = candidates[Math.floor(Math.random() * candidates.length)];
                        $prev = $items.eq(randomIdx);
                    }
                } else {
                    // 顺序模式
                    var prevIdx = currentIdx - 1;
                    if (prevIdx < 0) {
                        prevIdx = $items.length - 1;
                    }
                    $prev = $items.eq(prevIdx);
                }

                if ($prev && $prev.length) {
                    if (window.stopAudio) window.stopAudio();
                    if (window.initAudio) window.initAudio($prev);
                    if (window.playAudio) window.playAudio();
                }
            });

            // 重写 playlist 点击，不自动播放
            $('.playlist li').off('click').click(function() {
                if (window.stopAudio) window.stopAudio();
                if (window.initAudio) window.initAudio($(this));
                // 不自动播放
            });

            // 确保初始状态：播放按钮显示，暂停按钮隐藏
            $('.play').removeClass('hidden');
            $('.pause').removeClass('visible');
            
            console.log('Player ready - click play to start');
        });
    })(jQuery);
</script>
</body>
</html>