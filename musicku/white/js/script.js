// Designed by:  Mauricio Bucardo
// Original image: https://dribbble.com/shots/6957353-Music-Player-Widget

"use strict";

// ============================================================
//  播放模式
// ============================================================
const PlayMode = {
    ORDER: 'order',   // 顺序播放
    SHUFFLE: 'shuffle' // 随机播放
};

// ============================================================
//  从 MUSIC_DATA 生成歌单
// ============================================================
function buildPlaylist() {
    const playlist = document.getElementById('playlist');
    const sliderContent = document.querySelector('.slider__content');
    
    playlist.innerHTML = '';
    sliderContent.innerHTML = '';
    
    const songs = typeof MUSIC_DATA !== 'undefined' ? MUSIC_DATA : [];
    
    if (songs.length === 0) {
        const li = document.createElement('li');
        li.className = 'player__song';
        li.innerHTML = `
            <p class="player__context" style="text-align:center;width:100%;">
                <b class="player__song-name">暂无歌曲数据</b>
                <span class="flex">
                    <span class="player__title">请检查 music.js</span>
                </span>
            </p>
        `;
        playlist.appendChild(li);
        return;
    }
    
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.className = 'player__song';
        li.dataset.index = index;
        li.dataset.src = song.src;
        li.dataset.title = song.title;
        li.dataset.artist = song.artist;
        
        const imgNum = (index % 7) + 1;
        li.innerHTML = `
            <img class="player__img img" src="img/${imgNum}.jpg" alt="cover">
            <p class="player__context">
                <b class="player__song-name">${song.title}</b>
                <span class="flex">
                    <span class="player__title">${song.artist}</span>
                    <span class="player__song-time"></span>
                </span>
            </p>
            <audio class="audio" data-src="${song.src}"></audio>
        `;
        playlist.appendChild(li);
        
        const img = document.createElement('img');
        img.className = 'img slider__img';
        img.src = `img/${imgNum}.jpg`;
        img.alt = `cover`;
        sliderContent.appendChild(img);
    });
}

buildPlaylist();

// ============================================================
//  DOM 元素
// ============================================================
const bgBody = ["#e5e7e9", "#ff4545", "#f8ded3", "#ffc382", "#f5eda6", "#ffcbdc", "#dcf3f3"];
const body = document.body;
const player = document.querySelector(".player");
const playerHeader = player.querySelector(".player__header");
const playerControls = player.querySelector(".player__controls");
const playerPlayList = document.querySelectorAll(".player__song");
const playlistContainer = document.getElementById('playlist');
const playButton = player.querySelector(".play");
const nextButton = player.querySelector(".next");
const backButton = player.querySelector(".back");
const playlistButton = player.querySelector(".playlist");
const slider = player.querySelector(".slider");
const sliderContext = player.querySelector(".slider__context");
const sliderName = sliderContext.querySelector(".slider__name");
const sliderTitle = sliderContext.querySelector(".slider__title");
const sliderContent = slider.querySelector(".slider__content");
const modeToggle = document.getElementById('modeToggle');
const progres = player.querySelector(".progres");
const progresFilled = progres.querySelector(".progres__filled");

const sliderContentLength = playerPlayList.length - 1;
const sliderWidth = 100;
let left = 0;
let count = 0;
let currentAudio = null;
let isPlay = false;
let isMove = false;
let playMode = PlayMode.ORDER; // 当前播放模式
let shuffledQueue = []; // 随机播放队列
let shuffleIndex = 0; // 随机播放队列中的索引

const pauseIcon = playButton.querySelector("img[alt = 'pause-icon']");
const playIcon = playButton.querySelector("img[alt = 'play-icon']");

// ============================================================
//  播放模式相关函数
// ============================================================

// 切换播放模式
function togglePlayMode() {
    if (playMode === PlayMode.ORDER) {
        playMode = PlayMode.SHUFFLE;
        generateShuffleQueue();
        updateModeButton();
        showModeToast('🔀 随机播放');
    } else {
        playMode = PlayMode.ORDER;
        updateModeButton();
        showModeToast('➡️ 顺序播放');
    }
}

// 生成随机播放队列
function generateShuffleQueue() {
    const total = playerPlayList.length;
    if (total === 0) return;
    
    // 创建索引数组 [0, 1, 2, ...]
    const indices = Array.from({length: total}, (_, i) => i);
    
    // Fisher-Yates 洗牌算法
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    
    shuffledQueue = indices;
    // 找到当前歌曲在随机队列中的位置
    shuffleIndex = shuffledQueue.indexOf(count);
    if (shuffleIndex === -1) {
        // 如果当前歌曲不在队列中（理论上不会发生），重新生成
        generateShuffleQueue();
    }
}

// 获取随机播放模式下的下一首索引
function getNextShuffle() {
    if (shuffledQueue.length === 0) {
        generateShuffleQueue();
    }
    shuffleIndex = (shuffleIndex + 1) % shuffledQueue.length;
    return shuffledQueue[shuffleIndex];
}

// 获取随机播放模式下的上一首索引
function getPrevShuffle() {
    if (shuffledQueue.length === 0) {
        generateShuffleQueue();
    }
    shuffleIndex = (shuffleIndex - 1 + shuffledQueue.length) % shuffledQueue.length;
    return shuffledQueue[shuffleIndex];
}

// 更新模式按钮图标
function updateModeButton() {
    const orderIcons = modeToggle.querySelectorAll('.mode-icon-order');
    const randomIcons = modeToggle.querySelectorAll('.mode-icon-random');
    
    if (playMode === PlayMode.ORDER) {
        orderIcons.forEach(el => el.style.display = '');
        randomIcons.forEach(el => el.style.display = 'none');
        modeToggle.classList.remove('active');
        modeToggle.title = '顺序播放（点击切换为随机）';
    } else {
        orderIcons.forEach(el => el.style.display = 'none');
        randomIcons.forEach(el => el.style.display = '');
        modeToggle.classList.add('active');
        modeToggle.title = '随机播放（点击切换为顺序）';
    }
}

// 显示模式切换提示
function showModeToast(text) {
    // 移除已有提示
    const oldToast = document.querySelector('.mode-toast');
    if (oldToast) oldToast.remove();
    
    const toast = document.createElement('div');
    toast.className = 'mode-toast';
    toast.textContent = text;
    Object.assign(toast.style, {
        position: 'fixed',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(0,0,0,0.75)',
        color: '#fff',
        padding: '10px 24px',
        borderRadius: '12px',
        fontSize: '1.1em',
        fontWeight: 'bold',
        zIndex: '999',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        opacity: '0',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        transform: 'translateX(-50%) translateY(-10px)',
        pointerEvents: 'none'
    });
    document.body.appendChild(toast);
    
    // 触发淡入
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
    });
    
    // 2秒后淡出移除
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(-10px)';
        setTimeout(() => toast.remove(), 300);
    }, 1500);
}

// ============================================================
//  核心播放函数
// ============================================================

function getAudioElement(index) {
    const songItem = playerPlayList[index];
    if (!songItem) return null;
    let audio = songItem.querySelector('.audio');
    if (!audio) return null;
    return audio;
}

function loadSong(index) {
    const songItem = playerPlayList[index];
    if (!songItem) return null;
    
    let audio = songItem.querySelector('.audio');
    if (!audio) return null;
    
    if (audio.src && audio.src !== '') {
        return audio;
    }
    
    const src = audio.dataset.src || songItem.dataset.src;
    if (src) {
        audio.src = src;
        delete audio.dataset.src;
    }
    
    return audio;
}

function preloadNextSong() {
    let nextIndex;
    if (playMode === PlayMode.SHUFFLE) {
        const tempIdx = shuffleIndex;
        const next = (tempIdx + 1) % shuffledQueue.length;
        nextIndex = shuffledQueue[next];
    } else {
        nextIndex = count + 1;
    }
    if (nextIndex <= sliderContentLength && nextIndex >= 0) {
        loadSong(nextIndex);
    }
}

function preloadPrevSong() {
    let prevIndex;
    if (playMode === PlayMode.SHUFFLE) {
        const tempIdx = shuffleIndex;
        const prev = (tempIdx - 1 + shuffledQueue.length) % shuffledQueue.length;
        prevIndex = shuffledQueue[prev];
    } else {
        prevIndex = count - 1;
    }
    if (prevIndex >= 0 && prevIndex <= sliderContentLength) {
        loadSong(prevIndex);
    }
}

function openPlayer() {
    playerHeader.classList.add("open-header");
    playerControls.classList.add("move");
    slider.classList.add("open-slider");
}

function closePlayer() {
    playerHeader.classList.remove("open-header");
    playerControls.classList.remove("move");
    slider.classList.remove("open-slider");
}

// 跳转到指定索引的歌曲
function goToSong(index, playAfter = false) {
    if (index < 0 || index > sliderContentLength) return;
    if (index === count && currentAudio) {
        if (playAfter) {
            // 如果已播放则暂停，如果暂停则播放
            if (currentAudio.paused) {
                playSong();
            }
        }
        return;
    }
    
    // 暂停当前歌曲
    if (currentAudio) {
        currentAudio.pause();
    }
    
    count = index;
    left = count * sliderWidth;
    left = Math.min(left, sliderContentLength * sliderWidth);
    sliderContent.style.transform = `translate3d(-${left}%, 0, 0)`;
    
    // 更新随机队列索引
    if (playMode === PlayMode.SHUFFLE) {
        shuffleIndex = shuffledQueue.indexOf(count);
        if (shuffleIndex === -1) {
            // 如果当前歌曲不在队列中，重新生成队列
            generateShuffleQueue();
            shuffleIndex = shuffledQueue.indexOf(count);
        }
    }
    
    changeSliderContext();
    changeBgBody();
    selectSong();
    preloadNextSong();
    preloadPrevSong();
    
    if (playAfter && currentAudio) {
        currentAudio.play().catch(() => {});
        isPlay = true;
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
    }
}

function next() {
    if (playerPlayList.length === 0) return;
    
    if (currentAudio) {
        currentAudio.pause();
    }
    
    let nextIndex;
    if (playMode === PlayMode.SHUFFLE) {
        nextIndex = getNextShuffle();
    } else {
        if (count >= sliderContentLength) {
            // 顺序播放到最后一首，循环到第一首
            nextIndex = 0;
        } else {
            nextIndex = count + 1;
        }
    }
    
    goToSong(nextIndex, isPlay);
}

function back() {
    if (playerPlayList.length === 0) return;
    
    if (currentAudio) {
        currentAudio.pause();
    }
    
    let prevIndex;
    if (playMode === PlayMode.SHUFFLE) {
        prevIndex = getPrevShuffle();
    } else {
        if (count <= 0) {
            // 顺序播放到第一首，循环到最后一首
            prevIndex = sliderContentLength;
        } else {
            prevIndex = count - 1;
        }
    }
    
    goToSong(prevIndex, isPlay);
}

function changeSliderContext() {
    if (playerPlayList.length === 0) {
        sliderName.textContent = '暂无歌曲';
        sliderTitle.textContent = '请添加音乐';
        return;
    }
    
    sliderContext.style.animationName = "opacity";
    
    const currentSong = playerPlayList[count];
    if (!currentSong) return;
    
    const titleEl = currentSong.querySelector(".player__title");
    const nameEl = currentSong.querySelector(".player__song-name");
    
    sliderName.textContent = titleEl ? titleEl.textContent : '';
    sliderTitle.textContent = nameEl ? nameEl.textContent : '';
    
    if (sliderName.textContent.length > 16) {
        const textWrap = document.createElement("span");
        textWrap.className = "text-wrap";
        textWrap.innerHTML = sliderName.textContent + "   " + sliderName.textContent;  
        sliderName.innerHTML = "";
        sliderName.append(textWrap);
    }

    if (sliderTitle.textContent.length >= 18) {
        const textWrap = document.createElement("span");
        textWrap.className = "text-wrap";
        textWrap.innerHTML = sliderTitle.textContent + "    " + sliderTitle.textContent;  
        sliderTitle.innerHTML = "";
        sliderTitle.append(textWrap);
    }
}

function changeBgBody() {
    if (playerPlayList.length > 0) {
        const bgIndex = count % bgBody.length;
        body.style.backgroundColor = bgBody[bgIndex];
    }
}

function selectSong() {
    if (playerPlayList.length === 0) return;
    
    const audio = loadSong(count);
    if (!audio) return;
    
    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    
    currentAudio = audio;
    
    if (isPlay) {
        progresFilled.style.width = '0%';
        audio.currentTime = 0;
        audio.play().catch(() => {
            isPlay = false;
            playIcon.style.display = "";
            pauseIcon.style.display = "";
        });
    } else {
        audio.currentTime = 0;
        progresFilled.style.width = '0%';
    }
}

function playSong() {
    if (playerPlayList.length === 0) return;
    
    if (!currentAudio) {
        const audio = loadSong(count);
        if (!audio) return;
        currentAudio = audio;
    }
    
    if (!currentAudio.src || currentAudio.src === '') {
        const audio = loadSong(count);
        if (!audio) return;
        currentAudio = audio;
    }
    
    if (currentAudio.paused) {
        currentAudio.play().catch(() => {
            isPlay = false;
            playIcon.style.display = "";
            pauseIcon.style.display = "";
        });
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
        isPlay = true;
    } else {
        currentAudio.pause();
        isPlay = false;
        playIcon.style.display = "";
        pauseIcon.style.display = "";
    }
}

function progresUpdate() {
    if (!currentAudio) return;
    if (!currentAudio.duration || isNaN(currentAudio.duration)) return;
    
    const progresFilledWidth = (currentAudio.currentTime / currentAudio.duration) * 100 + "%";
    progresFilled.style.width = progresFilledWidth;

    if (currentAudio.duration > 0 && currentAudio.currentTime >= currentAudio.duration - 0.1) {
        // 歌曲播放完毕，自动切换
        next();
    }
}

function scurb(e) {
    if (!currentAudio) return;
    if (!currentAudio.duration || isNaN(currentAudio.duration)) return;
    
    const rect = progres.getBoundingClientRect();
    const currentTime = ((e.clientX - rect.left) / rect.width) * currentAudio.duration;
    if (currentTime >= 0 && currentTime <= currentAudio.duration) {
        currentAudio.currentTime = currentTime;
    }
}

function durationSongs() {
    if (!this.duration || isNaN(this.duration)) return;
    
    let min = parseInt(this.duration / 60);
    if (min < 10) min = "0" + min;

    let sec = parseInt(this.duration % 60);
    if (sec < 10) sec = "0" + sec;
    
    const playerSongTime = `${min}:${sec}`;
    const timeEl = this.closest(".player__song").querySelector(".player__song-time");
    if (timeEl) timeEl.textContent = playerSongTime;
}

// ============================================================
//  初始化
// ============================================================

function initPlayer() {
    if (playerPlayList.length === 0) {
        sliderName.textContent = '暂无歌曲';
        sliderTitle.textContent = '请检查 music.js';
        return;
    }
    
    // 初始化随机队列
    generateShuffleQueue();
    
    const firstAudio = loadSong(0);
    if (firstAudio) {
        currentAudio = firstAudio;
        firstAudio.addEventListener('loadeddata', durationSongs);
        firstAudio.addEventListener('timeupdate', progresUpdate);
    }
    
    changeSliderContext();
    changeBgBody();
    updateModeButton();
    preloadNextSong();
}

function bindSongClickEvents() {
    document.querySelectorAll('.player__song').forEach((item, index) => {
        item.addEventListener('click', function() {
            if (index === count && currentAudio && !currentAudio.paused) return;
            // 点击歌单切换时，保持当前播放状态
            goToSong(index, isPlay);
        });
    });
}

// ============================================================
//  事件绑定
// ============================================================

// 模式切换按钮
modeToggle.addEventListener('click', togglePlayMode);

// 播放控制
sliderContext.addEventListener("click", openPlayer);
sliderContext.addEventListener("animationend", () => sliderContext.style.animationName = '');
playlistButton.addEventListener("click", closePlayer);

nextButton.addEventListener("click", next);
backButton.addEventListener("click", back);
playButton.addEventListener("click", playSong);

// 进度条
progres.addEventListener("mousedown", (e) => {
    scurb(e);
    isMove = true;
    if (currentAudio) currentAudio.muted = true;
});

document.addEventListener("mousemove", (e) => isMove && scurb(e));

document.addEventListener("mouseup", () => {
    isMove = false;
    if (currentAudio) currentAudio.muted = false;
});

document.ondragstart = () => false;

// 页面卸载时暂停
window.addEventListener('beforeunload', function() {
    if (currentAudio) {
        currentAudio.pause();
    }
});

// ============================================================
//  启动
// ============================================================

initPlayer();
bindSongClickEvents();

console.log('🎵 播放器已启动 | 模式:', playMode === PlayMode.ORDER ? '顺序播放' : '随机播放');