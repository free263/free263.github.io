// script.js - 磁带播放器视觉控制

// ============================================================
// 1. 获取DOM元素
// ============================================================
var playBtn = document.getElementById('playBtn');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');
var modeBtn = document.getElementById('modeBtn');

// ============================================================
// 2. 磁带动画控制
// ============================================================
function updateCassetteAnimation(isPlaying) {
    var cogImgs = document.querySelectorAll('.cog-img');
    
    if (isPlaying) {
        cogImgs.forEach(function(el) {
            el.classList.add('rotating');
        });
        if (playBtn) {
            playBtn.classList.add('active');
        }
    } else {
        cogImgs.forEach(function(el) {
            el.classList.remove('rotating');
        });
        if (playBtn) {
            playBtn.classList.remove('active');
        }
    }
}

// 全局回调，供 music.js 调用
window.onPlayStateChange = function(isPlaying) {
    updateCassetteAnimation(isPlaying);
};

// ============================================================
// 3. HTML按钮调用的全局函数
// ============================================================

function handlePlay() {
    var player = window.MusicPlayer;
    if (!player || !player.audio) {
        console.warn('MusicPlayer未初始化');
        return;
    }
    player.togglePlay();
    updateCassetteAnimation(player.isPlaying);
}

function handlePrev() {
    var player = window.MusicPlayer;
    if (!player) {
        console.warn('MusicPlayer未初始化');
        return;
    }
    player.prev();
    setTimeout(function() {
        updateCassetteAnimation(player.isPlaying);
    }, 100);
}

function handleNext() {
    var player = window.MusicPlayer;
    if (!player) {
        console.warn('MusicPlayer未初始化');
        return;
    }
    player.next();
    setTimeout(function() {
        updateCassetteAnimation(player.isPlaying);
    }, 100);
}

function handleMode() {
    var player = window.MusicPlayer;
    if (!player) {
        console.warn('MusicPlayer未初始化');
        return;
    }
    // 切换模式
    player.toggleMode();
    // 直接更新按钮文字（使用 player 中的方法）
    if (modeBtn) {
        // 使用 getModeDisplay 方法获取当前模式文字
        modeBtn.textContent = player.getModeDisplay();
    }
}

// ============================================================
// 4. 初始化
// ============================================================

function init() {
    var player = window.MusicPlayer;
    if (player && player.audio) {
        // 初始化模式按钮
        if (modeBtn) {
            modeBtn.textContent = player.getModeDisplay();
        }
        // 初始化播放状态
        updateCassetteAnimation(player.isPlaying);
        console.log('✅ 磁带播放器已启动');
    } else {
        // 等待 music.js 初始化
        setTimeout(init, 100);
    }
}

// 等待DOM加载完成后初始化
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(init, 100);
} else {
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(init, 100);
    });
}

// ============================================================
// 5. 兼容原版
// ============================================================
function bgmPlay() {
    handlePlay();
}

function bgmStop() {
    var player = window.MusicPlayer;
    if (player && player.audio) {
        player.pause();
        player.audio.currentTime = 0;
        updateCassetteAnimation(false);
    }
}

console.log('📼 script.js 加载完成');