(function() {
    'use strict';

    // ===== DOM 引用 =====
    var categoryContainer = document.getElementById('categoryContainer');
    var songList = document.getElementById('songList');
    var categoryTitle = document.getElementById('categoryTitle');
    var songCount = document.getElementById('songCount');
    var backBtn = document.getElementById('backBtn');
    var currentSongName = document.getElementById('currentSongName');
    var coverImg = document.getElementById('coverImg');
    var progressFill = document.getElementById('progressFill');
    var progressDot = document.getElementById('progressDot');
    var progressBar = document.getElementById('progressBar');
    var volumeFill = document.getElementById('volumeFill');
    var volumeBar = document.getElementById('volumeBar');
    var currentTimeEl = document.getElementById('currentTime');
    var durationEl = document.getElementById('duration');
    var playBtn = document.getElementById('playBtn');
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    var shuffleBtn = document.getElementById('shuffleBtn');
    var repeatBtn = document.getElementById('repeatBtn');
    var volumeBtn = document.getElementById('volumeBtn');
    var audio = document.getElementById('audioPlayer');

    // ===== 播放模式 =====
    var PlayMode = {
        SEQUENTIAL: 0,  // 顺序播放
        SHUFFLE: 1,     // 随机播放
        REPEAT_ONE: 2   // 单曲循环
    };

    // ===== 状态 =====
    var state = {
        currentCategory: null,
        currentSong: null,
        currentSongIndex: -1,
        isPlaying: false,
        songList: [],
        categoryList: window.getCategoryList(),
        playMode: PlayMode.SEQUENTIAL,
        shuffleList: [],
        shuffleIndex: -1,
        isShuffling: false,
        isMuted: false,
        previousVolume: 1
    };

    // ===== 工具函数 =====
    function formatTime(seconds) {
        if (!seconds || isNaN(seconds)) return '00:00';
        var mins = Math.floor(seconds / 60);
        var secs = Math.floor(seconds % 60);
        return String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
    }

    function shuffleArray(arr) {
        var shuffled = arr.slice();
        for (var i = shuffled.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = shuffled[i];
            shuffled[i] = shuffled[j];
            shuffled[j] = temp;
        }
        return shuffled;
    }

    // ===== 显示提示 =====
    function showTip(text) {
        var tip = document.getElementById('playModeTip');
        if (!tip) {
            tip = document.createElement('div');
            tip.id = 'playModeTip';
            tip.className = 'play-mode-tip';
            document.body.appendChild(tip);
        }
        tip.textContent = text;
        tip.classList.add('show');
        clearTimeout(tip._timer);
        tip._timer = setTimeout(function() {
            tip.classList.remove('show');
        }, 1500);
    }

    // ===== 更新播放模式按钮 =====
    function updatePlayModeButton() {
        var icon = repeatBtn.querySelector('i');
        switch (state.playMode) {
            case PlayMode.SEQUENTIAL:
                icon.className = 'fas fa-redo';
                repeatBtn.title = '顺序播放';
                repeatBtn.classList.remove('active');
                break;
            case PlayMode.SHUFFLE:
                icon.className = 'fas fa-random';
                shuffleBtn.classList.add('active');
                repeatBtn.title = '随机播放';
                repeatBtn.classList.remove('active');
                break;
            case PlayMode.REPEAT_ONE:
                icon.className = 'fas fa-repeat';
                repeatBtn.title = '单曲循环';
                repeatBtn.classList.add('active');
                break;
        }
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

        categoryContainer.querySelectorAll('.category-item').forEach(function(el) {
            el.addEventListener('click', function() {
                var categoryId = parseInt(this.dataset.category);
                handleCategoryClick(categoryId);
            });
        });
    }

    // ===== 处理分类点击 =====
    function handleCategoryClick(categoryId) {
        categoryContainer.querySelectorAll('.category-item').forEach(function(el) {
            el.classList.toggle('active', parseInt(el.dataset.category) === categoryId);
        });

        state.currentCategory = categoryId;
        state.currentSongIndex = -1;
        state.currentSong = null;
        state.isShuffling = false;
        state.shuffleList = [];

        songList.innerHTML = '<div class="empty-state"><i class="fas fa-spinner fa-spin"></i><p>加载中...</p></div>';
        categoryTitle.textContent = '加载中...';
        backBtn.style.display = 'none';
        songCount.textContent = '';

        window.getCategoryMusics(categoryId, function(musics) {
            if (musics && musics.length > 0) {
                state.songList = musics;
                renderSongList(musics);
                var cat = state.categoryList.find(function(c) {
                    return c.category === categoryId;
                });
                categoryTitle.textContent = cat ? cat.name : '歌曲列表';
                songCount.textContent = musics.length + ' 首';
                backBtn.style.display = 'none';
            } else {
                songList.innerHTML = '<div class="empty-state"><i class="fas fa-music"></i><p>该分类暂无歌曲</p></div>';
                categoryTitle.textContent = '暂无歌曲';
                songCount.textContent = '';
            }
        });
    }

    // ===== 渲染歌曲列表 =====
    function renderSongList(musics) {
        if (!musics || musics.length === 0) {
            songList.innerHTML = '<div class="empty-state"><i class="fas fa-music"></i><p>该分类暂无歌曲</p></div>';
            return;
        }

        var html = '';
        musics.forEach(function(song, index) {
            var isActive = state.currentSong && state.currentSong.id[1] === song.id[1];
            var duration = song.duration || '';
            html += '<div class="song-item' + (isActive ? ' active' : '') + '" data-index="' + index + '">';
            html += '  <span class="index">' + (index + 1) + '</span>';
            html += '  <span class="song-name">' + song.name + '</span>';
            if (isActive && state.isPlaying) {
                html += '  <span class="playing-icon"><i class="fas fa-volume-up"></i></span>';
            }
            if (duration) {
                html += '  <span class="duration-tag">' + duration + '</span>';
            }
            html += '</div>';
        });
        songList.innerHTML = html;

        songList.querySelectorAll('.song-item').forEach(function(el) {
            el.addEventListener('click', function() {
                var index = parseInt(this.dataset.index);
                playSong(index);
            });
        });
    }

    // ===== 更新列表高亮 =====
    function updateSongListHighlight() {
        var items = songList.querySelectorAll('.song-item');
        items.forEach(function(el, i) {
            var isActive = state.currentSong && state.currentSong.id[1] === state.songList[i]?.id[1];
            el.classList.toggle('active', isActive);
            // 更新播放图标
            var icon = el.querySelector('.playing-icon');
            if (isActive && state.isPlaying) {
                if (!icon) {
                    icon = document.createElement('span');
                    icon.className = 'playing-icon';
                    icon.innerHTML = '<i class="fas fa-volume-up"></i>';
                    el.appendChild(icon);
                }
                icon.style.display = 'flex';
            } else if (icon) {
                icon.style.display = 'none';
            }
        });
    }

    // ===== 播放歌曲 =====
    function playSong(index) {
        if (index < 0 || index >= state.songList.length) return;

        state.currentSongIndex = index;
        state.currentSong = state.songList[index];

        // 如果当前是随机模式，更新随机列表索引
        if (state.playMode === PlayMode.SHUFFLE) {
            state.shuffleIndex = state.shuffleList.indexOf(index);
            if (state.shuffleIndex === -1) {
                state.shuffleList = shuffleArray(state.songList.map(function(_, i) { return i; }));
                state.shuffleIndex = state.shuffleList.indexOf(index);
            }
        }

        // 更新列表
        renderSongList(state.songList);

        // 更新封面
        var cat = state.categoryList.find(function(c) {
            return c.category === state.currentCategory;
        });
        coverImg.src = cat ? cat.cover : './music/default.jpg';

        // 更新播放器
        currentSongName.textContent = state.currentSong.name;
        audio.src = state.currentSong.src;
        audio.load();
        audio.play().then(function() {
            state.isPlaying = true;
            updatePlayButton();
        }).catch(function() {
            state.isPlaying = false;
            updatePlayButton();
        });

        document.title = state.currentSong.name + ' - 听松阁';
    }

    // ===== 更新播放按钮 =====
    function updatePlayButton() {
        var icon = state.isPlaying ? 'fa-pause' : 'fa-play';
        playBtn.innerHTML = '<i class="fas ' + icon + '"></i>';
    }

    // ===== 切换播放/暂停 =====
    function togglePlay() {
        if (!state.currentSong) {
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
        updateSongListHighlight();
    }

    // ===== 获取下一个播放索引 =====
    function getNextIndex() {
        if (state.playMode === PlayMode.SHUFFLE) {
            if (state.shuffleList.length === 0) {
                state.shuffleList = shuffleArray(state.songList.map(function(_, i) { return i; }));
                state.shuffleIndex = -1;
            }
            state.shuffleIndex = (state.shuffleIndex + 1) % state.shuffleList.length;
            return state.shuffleList[state.shuffleIndex];
        }
        return (state.currentSongIndex + 1) % state.songList.length;
    }

    // ===== 获取上一个播放索引 =====
    function getPrevIndex() {
        if (state.playMode === PlayMode.SHUFFLE) {
            if (state.shuffleList.length === 0) {
                state.shuffleList = shuffleArray(state.songList.map(function(_, i) { return i; }));
                state.shuffleIndex = 0;
            }
            state.shuffleIndex = (state.shuffleIndex - 1 + state.shuffleList.length) % state.shuffleList.length;
            return state.shuffleList[state.shuffleIndex];
        }
        return (state.currentSongIndex - 1 + state.songList.length) % state.songList.length;
    }

    // ===== 上一首 =====
    function prevSong() {
        if (state.songList.length === 0) return;
        var index = getPrevIndex();
        playSong(index);
    }

    // ===== 下一首 =====
    function nextSong() {
        if (state.songList.length === 0) return;
        
        // 单曲循环
        if (state.playMode === PlayMode.REPEAT_ONE) {
            if (state.currentSong) {
                audio.currentTime = 0;
                audio.play().catch(function() {});
                return;
            }
        }

        var index = getNextIndex();
        playSong(index);
    }

    // ===== 切换播放模式 =====
    function togglePlayMode() {
        // 顺序 -> 随机 -> 单曲循环 -> 顺序
        state.playMode = (state.playMode + 1) % 3;
        
        if (state.playMode === PlayMode.SHUFFLE) {
            // 生成随机列表
            state.shuffleList = shuffleArray(state.songList.map(function(_, i) { return i; }));
            state.shuffleIndex = -1;
            // 找到当前歌曲在随机列表中的位置
            if (state.currentSongIndex !== -1) {
                state.shuffleIndex = state.shuffleList.indexOf(state.currentSongIndex);
            }
            showTip('🔀 随机播放');
        } else if (state.playMode === PlayMode.REPEAT_ONE) {
            showTip('🔁 单曲循环');
        } else {
            showTip('▶️ 顺序播放');
        }
        
        updatePlayModeButton();
    }

    // ===== 切换随机播放 =====
    function toggleShuffle() {
        if (state.playMode === PlayMode.SHUFFLE) {
            // 切换到顺序播放
            state.playMode = PlayMode.SEQUENTIAL;
            showTip('▶️ 顺序播放');
        } else {
            state.playMode = PlayMode.SHUFFLE;
            state.shuffleList = shuffleArray(state.songList.map(function(_, i) { return i; }));
            state.shuffleIndex = -1;
            if (state.currentSongIndex !== -1) {
                state.shuffleIndex = state.shuffleList.indexOf(state.currentSongIndex);
            }
            showTip('🔀 随机播放');
        }
        updatePlayModeButton();
    }

    // ===== 进度控制 =====
    function updateProgress() {
        if (!audio.duration) return;
        var percent = (audio.currentTime / audio.duration) * 100;
        progressFill.style.width = percent + '%';
        progressDot.style.left = percent + '%';
        currentTimeEl.textContent = formatTime(audio.currentTime);
        durationEl.textContent = formatTime(audio.duration);
    }

    function handleProgressClick(e) {
        var rect = progressBar.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width;
        var percent = Math.max(0, Math.min(1, x));
        audio.currentTime = percent * audio.duration;
    }

    function handleProgressDrag(e) {
        if (e.buttons === 1) {
            var rect = progressBar.getBoundingClientRect();
            var x = (e.clientX - rect.left) / rect.width;
            var percent = Math.max(0, Math.min(1, x));
            audio.currentTime = percent * audio.duration;
        }
    }

    // ===== 音量控制 =====
    function handleVolumeClick(e) {
        var rect = volumeBar.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width;
        var percent = Math.max(0, Math.min(1, x));
        audio.volume = percent;
        volumeFill.style.width = (percent * 100) + '%';
        state.isMuted = percent === 0;
        updateVolumeIcon();
    }

    function toggleMute() {
        if (state.isMuted) {
            audio.volume = state.previousVolume || 1;
            volumeFill.style.width = (audio.volume * 100) + '%';
            state.isMuted = false;
        } else {
            state.previousVolume = audio.volume;
            audio.volume = 0;
            volumeFill.style.width = '0%';
            state.isMuted = true;
        }
        updateVolumeIcon();
    }

    function updateVolumeIcon() {
        var icon = volumeBtn.querySelector('i');
        if (state.isMuted || audio.volume === 0) {
            icon.className = 'fas fa-volume-mute';
        } else if (audio.volume < 0.5) {
            icon.className = 'fas fa-volume-down';
        } else {
            icon.className = 'fas fa-volume-up';
        }
    }

    // ===== 键盘快捷键 =====
    function handleKeyboard(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        switch (e.code) {
            case 'Space':
                e.preventDefault();
                togglePlay();
                break;
            case 'ArrowRight':
                e.preventDefault();
                audio.currentTime = Math.min(audio.currentTime + 5, audio.duration);
                break;
            case 'ArrowLeft':
                e.preventDefault();
                audio.currentTime = Math.max(audio.currentTime - 5, 0);
                break;
            case 'ArrowUp':
                e.preventDefault();
                audio.volume = Math.min(1, audio.volume + 0.1);
                volumeFill.style.width = (audio.volume * 100) + '%';
                updateVolumeIcon();
                break;
            case 'ArrowDown':
                e.preventDefault();
                audio.volume = Math.max(0, audio.volume - 0.1);
                volumeFill.style.width = (audio.volume * 100) + '%';
                updateVolumeIcon();
                break;
        }
    }

    // ===== 初始化 =====
    function init() {
        renderCategories();

        // 默认选中第一个分类
        if (state.categoryList.length > 0) {
            var firstEl = categoryContainer.querySelector('.category-item');
            if (firstEl) {
                firstEl.click();
            }
        }

        // 更新播放模式按钮
        updatePlayModeButton();

        // ===== 事件绑定 =====
        playBtn.addEventListener('click', togglePlay);
        prevBtn.addEventListener('click', prevSong);
        nextBtn.addEventListener('click', nextSong);
        shuffleBtn.addEventListener('click', toggleShuffle);
        repeatBtn.addEventListener('click', togglePlayMode);
        volumeBtn.addEventListener('click', toggleMute);

        progressBar.addEventListener('click', handleProgressClick);
        progressBar.addEventListener('mousemove', handleProgressDrag);

        volumeBar.addEventListener('click', handleVolumeClick);

        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('loadedmetadata', updateProgress);
        audio.addEventListener('ended', nextSong);
        audio.addEventListener('play', function() {
            state.isPlaying = true;
            updatePlayButton();
            updateSongListHighlight();
        });
        audio.addEventListener('pause', function() {
            state.isPlaying = false;
            updatePlayButton();
        });
        audio.addEventListener('volumechange', updateVolumeIcon);
        audio.addEventListener('error', function() {
            if (state.songList.length > 1) {
                setTimeout(nextSong, 1000);
            }
        });

        document.addEventListener('keydown', handleKeyboard);

        console.log('🎵 听松阁已启动！');
        console.log('📀 共 ' + state.categoryList.length + ' 个分类');
        console.log('💡 快捷键：');
        console.log('   空格 = 播放/暂停');
        console.log('   ←/→ = 快退/快进 5秒');
        console.log('   ↑/↓ = 音量 +/-');
    }

    if (document.readyState === 'complete') {
        init();
    } else {
        window.addEventListener('load', init);
    }

})();