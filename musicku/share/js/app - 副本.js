(function() {
    'use strict';

    // ===== DOM 引用 =====
    var categoryContainer = document.getElementById('categoryContainer');
    var songList = document.getElementById('songList');
    var categoryTitle = document.getElementById('categoryTitle');
    var backBtn = document.getElementById('backBtn');
    var currentSongName = document.getElementById('currentSongName');
    var progressFill = document.getElementById('progressFill');
    var progressBar = document.getElementById('progressBar');
    var volumeFill = document.getElementById('volumeFill');
    var volumeBar = document.getElementById('volumeBar');
    var currentTimeEl = document.getElementById('currentTime');
    var durationEl = document.getElementById('duration');
    var playBtn = document.getElementById('playBtn');
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    var audio = document.getElementById('audioPlayer');

    // ===== 状态 =====
    var state = {
        currentCategory: null,
        currentSong: null,
        currentSongIndex: -1,
        isPlaying: false,
        songList: [],
        categoryList: window.getCategoryList()
    };

    // ===== 工具函数 =====
    function formatTime(seconds) {
        if (!seconds || isNaN(seconds)) return '00:00';
        var mins = Math.floor(seconds / 60);
        var secs = Math.floor(seconds % 60);
        return String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
    }

    // ===== 渲染分类菜单 =====
    function renderCategories() {
        var html = '';
        state.categoryList.forEach(function(cat) {
            html += '<div class="category-item" data-category="' + cat.category + '">';
            html += '  <img src="' + cat.cover + '" alt="' + cat.name + '" loading="lazy">';
            html += '  <span class="cat-name">' + cat.name + '</span>';
            html += '</div>';
        });
        categoryContainer.innerHTML = html;

        // 绑定点击事件
        categoryContainer.querySelectorAll('.category-item').forEach(function(el) {
            el.addEventListener('click', function() {
                var categoryId = parseInt(this.dataset.category);
                handleCategoryClick(categoryId);
            });
        });
    }

    // ===== 处理分类点击 =====
    function handleCategoryClick(categoryId) {
        // 更新激活状态
        categoryContainer.querySelectorAll('.category-item').forEach(function(el) {
            el.classList.toggle('active', parseInt(el.dataset.category) === categoryId);
        });

        state.currentCategory = categoryId;
        state.currentSongIndex = -1;
        state.currentSong = null;

        // 显示加载状态
        songList.innerHTML = '<div class="empty-tip">⏳ 加载中...</div>';
        categoryTitle.textContent = '加载中...';
        backBtn.style.display = 'none';

        // 加载分类数据
        window.getCategoryMusics(categoryId, function(musics) {
            if (musics && musics.length > 0) {
                state.songList = musics;
                renderSongList(musics);
                // 找到分类名称
                var cat = state.categoryList.find(function(c) {
                    return c.category === categoryId;
                });
                categoryTitle.textContent = cat ? cat.name : '歌曲列表';
                backBtn.style.display = 'none';
            } else {
                songList.innerHTML = '<div class="empty-tip">😅 该分类暂无歌曲</div>';
                categoryTitle.textContent = '暂无歌曲';
            }
        });
    }

    // ===== 渲染歌曲列表 =====
    function renderSongList(musics) {
        if (!musics || musics.length === 0) {
            songList.innerHTML = '<div class="empty-tip">😅 该分类暂无歌曲</div>';
            return;
        }

        var html = '';
        musics.forEach(function(song, index) {
            var isActive = state.currentSong && state.currentSong.id[1] === song.id[1];
            html += '<div class="song-item' + (isActive ? ' active' : '') + '" data-index="' + index + '">';
            html += '  <span class="index">' + (index + 1) + '</span>';
            html += '  <span class="name">' + song.name + '</span>';
            html += '  <span class="playing-indicator"></span>';
            html += '</div>';
        });
        songList.innerHTML = html;

        // 绑定点击事件
        songList.querySelectorAll('.song-item').forEach(function(el) {
            el.addEventListener('click', function() {
                var index = parseInt(this.dataset.index);
                playSong(index);
            });
        });
    }

    // ===== 播放歌曲 =====
    function playSong(index) {
        if (index < 0 || index >= state.songList.length) return;

        state.currentSongIndex = index;
        state.currentSong = state.songList[index];

        // 更新列表高亮
        songList.querySelectorAll('.song-item').forEach(function(el, i) {
            el.classList.toggle('active', i === index);
        });

        // 更新播放器
        currentSongName.textContent = state.currentSong.name;
        audio.src = state.currentSong.src;
        audio.load();
        audio.play().then(function() {
            state.isPlaying = true;
            updatePlayButton();
        }).catch(function() {
            // 自动播放被阻止
            state.isPlaying = false;
            updatePlayButton();
        });

        // 更新标题
        document.title = state.currentSong.name + ' - 听松阁';
    }

    // ===== 更新播放按钮 =====
    function updatePlayButton() {
        var icon = state.isPlaying ? 'icon-zanting' : 'icon-bofang';
        playBtn.innerHTML = '<i class="iconfont ' + icon + '"></i>';
    }

    // ===== 切换播放/暂停 =====
    function togglePlay() {
        if (!state.currentSong) {
            // 如果没有选歌，默认播放第一首
            if (state.songList.length > 0) {
                playSong(0);
            }
            return;
        }

        if (state.isPlaying) {
            audio.pause();
        } else {
            audio.play().catch(function() {});
        }
        state.isPlaying = !state.isPlaying;
        updatePlayButton();
    }

    // ===== 上一首/下一首 =====
    function prevSong() {
        if (state.songList.length === 0) return;
        var index = state.currentSongIndex - 1;
        if (index < 0) index = state.songList.length - 1;
        playSong(index);
    }

    function nextSong() {
        if (state.songList.length === 0) return;
        var index = state.currentSongIndex + 1;
        if (index >= state.songList.length) index = 0;
        playSong(index);
    }

    // ===== 进度控制 =====
    function updateProgress() {
        if (!audio.duration) return;
        var percent = (audio.currentTime / audio.duration) * 100;
        progressFill.style.width = percent + '%';
        currentTimeEl.textContent = formatTime(audio.currentTime);
        durationEl.textContent = formatTime(audio.duration);
    }

    function handleProgressClick(e) {
        var rect = progressBar.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width;
        var percent = Math.max(0, Math.min(1, x));
        audio.currentTime = percent * audio.duration;
    }

    // ===== 音量控制 =====
    function handleVolumeClick(e) {
        var rect = volumeBar.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width;
        var percent = Math.max(0, Math.min(1, x));
        audio.volume = percent;
        volumeFill.style.width = (percent * 100) + '%';
    }

    // ===== 键盘快捷键 =====
    function handleKeyboard(e) {
        // 空格键：播放/暂停
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        if (e.code === 'Space') {
            e.preventDefault();
            togglePlay();
        } else if (e.code === 'ArrowRight') {
            e.preventDefault();
            audio.currentTime = Math.min(audio.currentTime + 5, audio.duration);
        } else if (e.code === 'ArrowLeft') {
            e.preventDefault();
            audio.currentTime = Math.max(audio.currentTime - 5, 0);
        }
    }

    // ===== 初始化 =====
    function init() {
        // 渲染分类
        renderCategories();

        // 默认选中第一个分类并加载
        if (state.categoryList.length > 0) {
            var firstCategory = state.categoryList[0];
            // 自动点击第一个分类
            var firstEl = categoryContainer.querySelector('.category-item');
            if (firstEl) {
                firstEl.click();
            }
        }

        // ===== 事件绑定 =====
        // 播放控制
        playBtn.addEventListener('click', togglePlay);
        prevBtn.addEventListener('click', prevSong);
        nextBtn.addEventListener('click', nextSong);
        backBtn.addEventListener('click', function() {
            // 返回分类选择
            categoryContainer.querySelectorAll('.category-item').forEach(function(el) {
                el.classList.remove('active');
            });
            songList.innerHTML = '<div class="empty-tip">点击上方分类查看歌曲</div>';
            categoryTitle.textContent = '选择分类';
            backBtn.style.display = 'none';
            state.currentCategory = null;
            state.currentSong = null;
            state.currentSongIndex = -1;
            state.songList = [];
        });

        // 音频事件
        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('loadedmetadata', updateProgress);
        audio.addEventListener('ended', nextSong);
        audio.addEventListener('play', function() {
            state.isPlaying = true;
            updatePlayButton();
        });
        audio.addEventListener('pause', function() {
            state.isPlaying = false;
            updatePlayButton();
        });
        audio.addEventListener('error', function(e) {
            console.error('播放错误:', e);
            // 自动播放下一个
            if (state.songList.length > 1) {
                setTimeout(nextSong, 1000);
            }
        });

        // 进度条点击
        progressBar.addEventListener('click', handleProgressClick);

        // 音量条点击
        volumeBar.addEventListener('click', handleVolumeClick);

        // 键盘快捷键
        document.addEventListener('keydown', handleKeyboard);

        console.log('🎵 听松阁已启动！');
        console.log('📀 共 ' + state.categoryList.length + ' 个分类');
        console.log('💡 快捷键：空格=播放/暂停，←/→=快退/快进5秒');
    }

    // ===== 页面加载完成后初始化 =====
    if (document.readyState === 'complete') {
        init();
    } else {
        window.addEventListener('load', init);
    }

})();