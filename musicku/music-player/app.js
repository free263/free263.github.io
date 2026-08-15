/* ============= 音乐播放器交互逻辑 ============= */
(function () {
  'use strict';

  // 优先用外部脚本注入的 MUSIC_DATA（来自 music.js）
  const rawData = (typeof MUSIC_DATA !== 'undefined' && MUSIC_DATA) ? MUSIC_DATA : [];
  // 把数据规范化：name / url
  const songs = rawData.map((it, i) => ({
    id: i,
    name: it.name || it.title || '未知歌曲',
    url: it.url || it.src || ''
  }));

  // ===== DOM =====
  const audio = document.getElementById('audio');
  const songTitle = document.getElementById('songTitle');
  const songList = document.getElementById('songList');
  const playBtn = document.getElementById('playBtn');
  const playIcon = document.getElementById('playIcon');
  const pauseIcon = document.getElementById('pauseIcon');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const loopBtn = document.getElementById('loopBtn');
  const muteBtn = document.getElementById('muteBtn');
  const listBtn = document.getElementById('listBtn');
  const volumeBar = document.getElementById('volume');
  const progress = document.getElementById('progress');
  const progressFill = document.getElementById('progressFill');
  const curTime = document.getElementById('curTime');
  const durTime = document.getElementById('durTime');
  const searchInput = document.getElementById('searchInput');
  const cover = document.querySelector('.cover');

  // ===== 状态 =====
  let currentIndex = 0;        // 当前播放歌曲索引（基于过滤后的列表）
  let isPlaying = false;
  let loopMode = 0;            // 0=列表循环 1=单曲循环 2=随机
  let likedSet = new Set();    // 收藏（仅本地）
  let filterText = '';
  let filteredIndices = [];    // 当前过滤后的索引列表

  // ===== 工具函数 =====
  function fmt(sec) {
    if (!isFinite(sec) || sec < 0) sec = 0;
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ===== 渲染列表 =====
  function renderList() {
    const kw = filterText.trim().toLowerCase();
    filteredIndices = [];
    const html = [];
    for (let i = 0; i < songs.length; i++) {
      const song = songs[i];
      if (kw && song.name.toLowerCase().indexOf(kw) === -1) continue;
      filteredIndices.push(i);
      const isActive = (i === currentIndex);
      const liked = likedSet.has(i);
      html.push(`
        <li class="song-item${isActive ? ' active' : ''}" data-index="${i}">
          <span class="idx">${filteredIndices.length}</span>
          <span class="name">${escapeHtml(song.name)}</span>
          <span class="actions">
            <button class="action-icon like-btn${liked ? ' liked' : ''}" data-index="${i}" title="${liked ? '取消收藏' : '收藏'}">
              <svg viewBox="0 0 24 24"><path fill="${liked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </button>
            <button class="action-icon dl-btn" data-index="${i}" title="下载">
              <span>下载</span>
            </button>
          </span>
        </li>
      `);
    }
    songList.innerHTML = html.length ? html.join('') : '<li class="empty-tip">没有匹配的歌曲</li>';
  }

  // ===== 切歌 =====
  function loadSong(index, autoPlay) {
    if (index < 0 || index >= songs.length) return;
    currentIndex = index;
    const song = songs[index];
    songTitle.textContent = song.name;
    audio.src = song.url;
    audio.load();
    // 重新高亮
    document.querySelectorAll('.song-item').forEach((el) => {
      el.classList.toggle('active', Number(el.dataset.index) === index);
    });
    // 自动滚动到可视区
    const activeEl = songList.querySelector('.song-item.active');
    if (activeEl) {
      const r = activeEl.getBoundingClientRect();
      const lr = songList.getBoundingClientRect();
      if (r.top < lr.top || r.bottom > lr.bottom) {
        activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
    if (autoPlay) play();
  }

  function play() {
    const p = audio.play();
    if (p && p.catch) p.catch(() => { /* 用户未交互前可能拒绝 */ });
    isPlaying = true;
    playIcon.style.display = 'none';
    pauseIcon.style.display = '';
    cover.classList.add('playing');
  }
  function pause() {
    audio.pause();
    isPlaying = false;
    playIcon.style.display = '';
    pauseIcon.style.display = 'none';
    cover.classList.remove('playing');
  }
  function toggle() { isPlaying ? pause() : play(); }

  function next() {
    if (!filteredIndices.length) return;
    const pos = filteredIndices.indexOf(currentIndex);
    if (loopMode === 2) {
      // 随机
      let r;
      do { r = filteredIndices[Math.floor(Math.random() * filteredIndices.length)]; }
      while (r === currentIndex && filteredIndices.length > 1);
      loadSong(r, true);
      return;
    }
    const nextPos = pos + 1;
    if (nextPos >= filteredIndices.length) {
      // 列表循环回到第一首
      loadSong(filteredIndices[0], true);
      return;
    }
    loadSong(filteredIndices[nextPos], true);
  }
  function prev() {
    if (!filteredIndices.length) return;
    const pos = filteredIndices.indexOf(currentIndex);
    const prevPos = pos - 1;
    if (prevPos < 0) {
      loadSong(filteredIndices[filteredIndices.length - 1], true);
      return;
    }
    loadSong(filteredIndices[prevPos], true);
  }

  // ===== 事件绑定 =====
  playBtn.addEventListener('click', toggle);
  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  // 循环模式按钮
  loopBtn.addEventListener('click', () => {
    loopMode = (loopMode + 1) % 3;
    loopBtn.classList.toggle('active', loopMode !== 0);
    loopBtn.title = ['列表循环', '单曲循环', '随机播放'][loopMode];
    // 单曲循环时设置 audio.loop
    audio.loop = (loopMode === 1);
  });

  // 列表按钮（暂无侧边栏，给个简单提示）
  listBtn.addEventListener('click', () => {
    const el = document.querySelector('.playlist');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // 静音
  muteBtn.addEventListener('click', () => {
    audio.muted = !audio.muted;
    muteBtn.classList.toggle('active', audio.muted);
  });

  // 音量
  function updateVolumeUI() {
    const v = audio.muted ? 0 : audio.volume * 100;
    volumeBar.style.setProperty('--vol', v + '%');
  }
  volumeBar.addEventListener('input', () => {
    audio.volume = Number(volumeBar.value) / 100;
    if (audio.muted && audio.volume > 0) {
      audio.muted = false;
      muteBtn.classList.remove('active');
    }
    updateVolumeUI();
  });
  audio.volume = 0.7;
  updateVolumeUI();

  // 进度条
  progress.addEventListener('input', () => {
    if (audio.duration) {
      audio.currentTime = (Number(progress.value) / 100) * audio.duration;
    }
  });
  audio.addEventListener('timeupdate', () => {
    if (!audio.duration) return;
    const pct = (audio.currentTime / audio.duration) * 100;
    progress.value = pct;
    progressFill.style.width = pct + '%';
    curTime.textContent = fmt(audio.currentTime);
  });
  audio.addEventListener('loadedmetadata', () => {
    durTime.textContent = fmt(audio.duration);
    progressFill.style.width = '0%';
    progress.value = 0;
    curTime.textContent = '00:00';
  });
  audio.addEventListener('ended', () => {
    if (loopMode === 1) return; // 单曲循环由 audio.loop 处理
    next();
  });
  audio.addEventListener('play', () => {
    isPlaying = true;
    playIcon.style.display = 'none';
    pauseIcon.style.display = '';
    cover.classList.add('playing');
  });
  audio.addEventListener('pause', () => {
    isPlaying = false;
    playIcon.style.display = '';
    pauseIcon.style.display = 'none';
    cover.classList.remove('playing');
  });

  // 列表点击（用事件委托）
  songList.addEventListener('click', (e) => {
    const likeBtn = e.target.closest('.like-btn');
    if (likeBtn) {
      e.stopPropagation();
      const idx = Number(likeBtn.dataset.index);
      if (likedSet.has(idx)) likedSet.delete(idx);
      else likedSet.add(idx);
      renderList();
      return;
    }
    const delBtn = e.target.closest('.del-btn');
    if (delBtn) {
      e.stopPropagation();
      const idx = Number(delBtn.dataset.index);
      if (!confirm(`确定从列表中移除「${songs[idx].name}」吗？`)) return;
      songs.splice(idx, 1);
      // 调整 currentIndex
      if (idx === currentIndex) {
        currentIndex = Math.min(idx, songs.length - 1);
      } else if (idx < currentIndex) {
        currentIndex -= 1;
      }
      renderList();
      if (songs.length && idx === currentIndex) loadSong(currentIndex, isPlaying);
      return;
    }
    const dlBtn = e.target.closest('.dl-btn');
    if (dlBtn) {
      e.stopPropagation();
      const idx = Number(dlBtn.dataset.index);
      const song = songs[idx];
      if (!song.url) return alert('该歌曲没有可用的链接');
      const a = document.createElement('a');
      a.href = song.url;
      a.download = song.name + '.mp3';
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      return;
    }
    // 点击行 = 播放该首
    const item = e.target.closest('.song-item');
    if (item) {
      const idx = Number(item.dataset.index);
      loadSong(idx, true);
    }
  });

  // 搜索
  searchInput.addEventListener('input', () => {
    filterText = searchInput.value;
    renderList();
  });

  // 键盘快捷键（空格播放/暂停，左右切歌）
  document.addEventListener('keydown', (e) => {
    const t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) return;
    if (e.code === 'Space') { e.preventDefault(); toggle(); }
    else if (e.code === 'ArrowRight') next();
    else if (e.code === 'ArrowLeft') prev();
  });

  // ===== 初始化 =====
  if (songs.length) {
    renderList();
    // 默认选第一首但不自动播放（避免未交互就播放）
    songTitle.textContent = songs[0].name;
    currentIndex = 0;
    document.querySelector('.song-item')?.classList.add('active');
    // 元数据预加载
    audio.src = songs[0].url;
    audio.preload = 'metadata';
  } else {
    songTitle.textContent = '暂无歌曲';
    songList.innerHTML = '<li class="empty-tip">未找到音乐数据，请检查 music.js</li>';
  }
})();
