//============================================================【程序信息及版权宣告】====
//ExoBUD MP(II) v4.1tc+ [Traditional Chinese Version] - HTML5 兼容版
//Copyright(Pe) 1999-2003 Jinwoong Yu[ExoBUD], Kendrick Wong[kiddiken.net].yune_lee[liyu.net]
//HTML5 适配修改
//======================================================================================

// 使用HTML5 Audio替代WMP
var audioPlayer = null;
var objMmInfo = null;
var intMmCnt = 0;
var intSelMmCnt = 0;
var intActMmCnt = 0;
var cActIdx = 0;
var cActTit = "nAnT";
var strMmInfo = "ExoBUD 媒体档案信息";
var blnfpl = false;
var blnEnabled = false;
var blnEOT = false;
var arrSelMm = null;
var arrActMm = null;
var intExobudStat = 0;
var tidTLab = null;
var tidErr = null;
var tidMsg = null;
var intErrCnt = 0;
var blnRept = false;
var blnAutoProc = true;
var blnElaps = false;
var intDelay = 500;
var isPlaying = false;
var isPaused = false;
var currentDuration = 0;

// 初始化HTML5音频播放器
function initAudioPlayer() {
    if (audioPlayer === null) {
        audioPlayer = new Audio();
        audioPlayer.preload = 'metadata';
    }
    // 移除所有事件监听，重新绑定
    audioPlayer.removeEventListener('ended', onAudioEnded);
    audioPlayer.removeEventListener('timeupdate', onAudioTimeUpdate);
    audioPlayer.removeEventListener('error', onAudioError);
    audioPlayer.removeEventListener('loadedmetadata', onAudioLoadedMetadata);
    audioPlayer.removeEventListener('play', onAudioPlay);
    audioPlayer.removeEventListener('pause', onAudioPause);
    audioPlayer.removeEventListener('waiting', onAudioWaiting);
    audioPlayer.removeEventListener('canplay', onAudioCanPlay);
    
    audioPlayer.addEventListener('ended', onAudioEnded);
    audioPlayer.addEventListener('timeupdate', onAudioTimeUpdate);
    audioPlayer.addEventListener('error', onAudioError);
    audioPlayer.addEventListener('loadedmetadata', onAudioLoadedMetadata);
    audioPlayer.addEventListener('play', onAudioPlay);
    audioPlayer.addEventListener('pause', onAudioPause);
    audioPlayer.addEventListener('waiting', onAudioWaiting);
    audioPlayer.addEventListener('canplay', onAudioCanPlay);
}

// 音频事件处理函数
function onAudioEnded() {
    clearInterval(tidTLab);
    imgChange("playt", 0);
    imgChange("scope", 0);
    setTimeout('playAuto()', intDelay);
}

function onAudioTimeUpdate() {
    if (audioPlayer && !isPaused) {
        showTLab();
    }
}

function onAudioError(e) {
    evtWmpError();
}

function onAudioLoadedMetadata() {
    currentDuration = audioPlayer.duration;
    if (objMmInfo[cActIdx] && objMmInfo[cActIdx].mmTit == "nAnT") {
        // 尝试从URL获取文件名作为标题
        try {
            var url = audioPlayer.src;
            var fileName = url.split('/').pop();
            var title = decodeURIComponent(fileName).replace(/\.[^.]+$/, '');
            if (title) {
                objMmInfo[cActIdx].mmTit = title;
                var trknum = cActIdx + 1;
                cActTit = trknum + ". " + title;
                disp1.innerHTML = cActTit;
                if (blnStatusBar) { window.status = cActTit; }
            }
        } catch(e) {}
    }
    showTLab();
}

function onAudioPlay() {
    isPlaying = true;
    isPaused = false;
    imgChange("pauzt", 0);
    imgChange("playt", 1);
    imgChange("stopt", 0);
    imgChange("scope", 1);
    if (tidTLab) clearInterval(tidTLab);
    tidTLab = setInterval('showTLab()', 500);
}

function onAudioPause() {
    isPaused = true;
    imgChange("pauzt", 1);
    imgChange("playt", 0);
    imgChange("scope", 0);
    clearInterval(tidTLab);
    showTLab();
}

function onAudioWaiting() {
    disp2.innerHTML = "缓冲......";
}

function onAudioCanPlay() {
    if (isPaused) {
        // 恢复播放
        audioPlayer.play().catch(function(e) {});
    }
}

// wmpInit() 替代 - 初始化播放器
function wmpInit() {
    initAudioPlayer();
    Exobud.enabled = true;
    if (blnAutoStart) {
        setTimeout(function() { startExobud(); }, 500);
    }
}

// mkMmPath() 函式: 准备建立 Multi-object 的数组
function mkMmPath(u, t, f, s) {
    this.mmUrl = u;
    this.mmTit = t;
    this.mmDur = 0;
    this.selMm = f;
    this.actMm = f;
    if (blnUseSmi) { this.mmSmi = s; }
}

// mkList() 函式: 建立 Multi-object 的数组 - 支持中文文件名
function mkList(u, t, s, f) {
    var cu = u;
    var ct = t;
    var cs = s;
    var cf = f;
    var idx = 0;
    if (objMmInfo == null) { objMmInfo = new Array(); idx = 0; } else { idx = objMmInfo.length; }
    if (u == "" || u == null) { cu = ""; }
    if (t == "" || t == null) { ct = "nAnT"; }
    if (f == "f" || f == "F") { cf = "f"; } else { cf = "t";
        intSelMmCnt++; }
    // 对URL进行编码，支持中文文件名
    try {
        var urlParts = cu.split('/');
        var fileName = urlParts[urlParts.length - 1];
        // 检查是否包含中文且未编码
        if (fileName && fileName.indexOf('%') == -1 && /[\u4e00-\u9fa5]/.test(fileName)) {
            var encodedParts = [];
            for (var p = 0; p < urlParts.length - 1; p++) {
                encodedParts.push(urlParts[p]);
            }
            encodedParts.push(encodeURIComponent(fileName));
            cu = encodedParts.join('/');
        }
    } catch (e) {}
    if (blnUseSmi) {
        objMmInfo[idx] = new mkMmPath(cu, ct, cf, cs);
    } else {
        objMmInfo[idx] = new mkMmPath(cu, ct, cf);
    }
    intActMmCnt = intSelMmCnt;
    intMmCnt = objMmInfo.length;
}

// mkSel() 函式: 建立已选取播放项目(Selected Media)的数组
function mkSel() {
    arrSelMm = null;
    intSelMmCnt = 0;
    var selidx = 0;
    if (intMmCnt <= 0) { intExobudStat = 1;
        blnEnabled = false; return; }
    arrSelMm = new Array();
    for (var i = 0; i < intMmCnt; i++) {
        if (objMmInfo[i].selMm == "t") { arrSelMm[selidx] = i;
            selidx++; }
    }
    intSelMmCnt = arrSelMm.length;
    if (intSelMmCnt <= 0) { blnEnabled = false;
        intExobudStat = 2;
        arrSelMm = null; return; } else { blnEnabled = true;
        mkAct(); }
}

// mkAct() 函式: 建立已启用播放项目(Activated Media)的数组
function mkAct() {
    arrActMm = null;
    intActMmCnt = 0;
    var selidx = 0;
    var actidx = 0;
    if (blnEnabled) {
        arrActMm = new Array();
        for (var i = 0; i < intSelMmCnt; i++) {
            selidx = arrSelMm[i];
            if (objMmInfo[selidx].actMm == "t") { arrActMm[actidx] = selidx;
                actidx++; }
        }
        intActMmCnt = arrActMm.length;
    } else { return; }
    if (intActMmCnt <= 0) { blnEOT = true;
        arrActMm = null; } else { blnEOT = false; }
}

// chkAllSel() 函式: 全部选取所有的播放清单项目
function chkAllSel() {
    for (var i = 0; i < intMmCnt; i++) {
        objMmInfo[i].selMm = "t";
        objMmInfo[i].actMm = "t";
    }
    mkSel();
}

// chkAllDesel() 函式: 不选取所有的播放清单项目
function chkAllDesel() {
    for (var i = 0; i < intMmCnt; i++) {
        objMmInfo[i].selMm = "f";
        objMmInfo[i].actMm = "f";
    }
    mkSel();
}

// chkItemSel() 函式: 选取或不选取播放清单项目
function chkItemSel(idx) {
    if (objMmInfo[idx].selMm == "t") {
        objMmInfo[idx].selMm = "f";
        objMmInfo[idx].actMm = "f";
    } else {
        objMmInfo[idx].selMm = "t";
        objMmInfo[idx].actMm = "t";
    }
    mkSel();
}

// chkItemAct() 函式: 将某个已启用播放项目(Activated Media)冻结
function chkItemAct(idx) {
    objMmInfo[idx].actMm = "f";
    mkAct();
}

// mkSelAct() 函式: 将已选取播放项目(Selected Media)加入到已启用播放项目(Activated Media)
function mkSelAct() {
    var idx = 0;
    for (var i = 0; i < intSelMmCnt; i++) {
        idx = arrSelMm[i];
        objMmInfo[idx].actMm = "t";
    }
    mkAct();
}

// initExobud() 函式: 初始化 ExoBUD MP(II) 媒体播放程序
function initExobud() {
    wmpInit();
    mkSel();
    blnfpl = false;
    if (!blnShowVolCtrl) {
        document.images['vmute'].style.display = "none";
        document.images['vdn'].style.display = "none";
        document.images['vup'].style.display = "none";
    }
    if (!blnShowPlist) { document.images['plist'].style.display = "none"; }
    if (blnRept) { imgChange('rept', 1); } else { imgChange('rept', 0); }
    if (blnRndPlay) { imgChange('pmode', 1); } else { imgChange('pmode', 0); }
    showTLab();
    disp1.innerHTML = "ExoBUD MP(II) v4.1tc+ 网站媒体播放程序";
    if (blnStatusBar) { window.status = ('ExoBUD MP(II) v4.1tc+ 网站媒体播放程序'); }
    if (blnAutoStart) { startExobud(); }
}

// startExobud() 函式: 开始播放曲目
function startExobud() {
    if (audioPlayer && isPlaying && !isPaused) {
        // 如果正在播放，不做任何事
        return;
    }
    if (audioPlayer && isPaused) {
        audioPlayer.play().catch(function(e) {});
        return;
    }
    blnfpl = false;
    if (!blnEnabled) { waitMsg(); return; }
    if (blnEOT) { mkSelAct(); }
    if (intErrCnt > 0) { intErrCnt = 0;
        tidErr = setTimeout('retryPlay(),1000'); return; }
    if (blnRndPlay) { rndPlay(); } else { cActIdx = arrActMm[0];
        selMmPlay(cActIdx); }
}

// selMmPlay() 函式: 处理媒体标题
function selMmPlay(idx) {
    clearTimeout(tidErr);
    cActIdx = idx;
    var trknum = idx + 1;
    var ctit = objMmInfo[idx].mmTit;
    if (ctit == "nAnT") { ctit = "加载中..."; }
    if (blnUseSmi) { Exobud.ClosedCaption.SAMIFileName = objMmInfo[idx].mmSmi; }
    // 设置音频源
    if (audioPlayer) {
        audioPlayer.src = objMmInfo[idx].mmUrl;
        audioPlayer.load();
        audioPlayer.play().catch(function(e) {
            // 自动播放被阻止或加载失败
            console.log('Playback error:', e);
            disp1.innerHTML = "点击播放按钮开始播放";
            imgChange("playt", 0);
        });
    }
    cActTit = trknum + ". " + ctit;
    disp1.innerHTML = cActTit;
    if (blnStatusBar) { window.status = (cActTit); }
    chkItemAct(cActIdx);
}

// wmpPlay() - HTML5播放
function wmpPlay() {
    if (audioPlayer) {
        audioPlayer.play().catch(function(e) {});
    }
}

// wmpStop() - HTML5停止
function wmpStop() {
    intErrCnt = 0;
    clearTimeout(tidErr);
    clearInterval(tidTLab);
    imgChange("stopt", 1);
    imgChange("pauzt", 0);
    imgChange("scope", 0);
    showTLab();
    mkSelAct();
    if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }
    isPlaying = false;
    isPaused = false;
    disp1.innerHTML = "...............播放器就绪................";
    if (blnStatusBar) { window.status = ('...............播放器就绪................'); return true; }
}

// wmpPause() - HTML5暂停
function wmpPause() {
    if (audioPlayer) {
        audioPlayer.pause();
        isPaused = true;
    }
}

// wmpPP() - 切换暂停/播放
function wmpPP() {
    clearInterval(tidTLab);
    clearTimeout(tidMsg);
    if (audioPlayer) {
        if (isPaused || !isPlaying) {
            audioPlayer.play().catch(function(e) {});
        } else {
            audioPlayer.pause();
            isPaused = true;
            disp2.innerHTML = "暂停";
            tidMsg = setTimeout('rtnTLab()', 1500);
        }
    }
    return;
}

// rndPlay() 函式: 随机播放
function rndPlay() {
    if (!blnEnabled) { waitMsg(); return; }
    intErrCnt = 0;
    var idx = Math.floor(Math.random() * intActMmCnt);
    cActIdx = arrActMm[idx];
    selMmPlay(cActIdx);
}

// playAuto() 函式: 自动连续播放
function playAuto() {
    if (blnRept) { selMmPlay(cActIdx); return; }
    if (!blnAutoProc) { wmpStop(); return; }
    if (blnfpl) { wmpStop(); return; }
    if (!blnEnabled) { wmpStop(); return; }
    if (blnEOT) {
        if (blnLoopTrk) { startExobud(); } else { wmpStop(); }
    } else {
        if (blnRndPlay) { rndPlay(); } else { cActIdx = arrActMm[0];
            selMmPlay(cActIdx); }
    }
}

// selPlPlay() - 播放选中的单曲
function selPlPlay(idx) {
    blnfpl = true;
    selMmPlay(idx);
}

// playPrev() 函式: 播放上一首
function playPrev() {
    if (audioPlayer) { audioPlayer.pause(); }
    blnfpl = false;
    if (!blnEnabled) { waitMsg(); return; }
    if (blnEOT) { mkSelAct(); }
    intErrCnt = 0;
    if (blnRndPlay) { rndPlay(); } else {
        var idx = cActIdx;
        var blnFind = false;
        for (var i = 0; i < intSelMmCnt; i++) { if (cActIdx == arrSelMm[i]) { idx = i - 1;
                blnFind = true; } }
        if (!blnFind) { startExobud(); return; }
        if (idx < 0) { idx = intSelMmCnt - 1;
            cActIdx = arrSelMm[idx]; } else { cActIdx = arrSelMm[idx]; }
        selMmPlay(cActIdx);
    }
}

// playNext() 函式: 播放下一首
function playNext() {
    if (audioPlayer) { audioPlayer.pause(); }
    blnfpl = false;
    if (!blnEnabled) { waitMsg(); return; }
    if (blnEOT) { mkSelAct(); }
    intErrCnt = 0;
    if (blnRndPlay) { rndPlay(); } else {
        var idx = cActIdx;
        var blnFind = false;
        for (var i = 0; i < intSelMmCnt; i++) { if (cActIdx == arrSelMm[i]) { idx = i + 1;
                blnFind = true; } }
        if (!blnFind) { startExobud(); return; }
        if (idx >= intSelMmCnt) { idx = 0;
            cActIdx = arrSelMm[idx]; } else { cActIdx = arrSelMm[idx]; }
        selMmPlay(cActIdx);
    }
}

// retryPlay() 函式: 重试
function retryPlay() {
    selMmPlay(cActIdx);
}

// chkRept() 函式: 切换重复播放
function chkRept() {
    if (blnRept) {
        blnRept = false;
        imgChange('rept', 0);
        disp2.innerHTML = "不重复播放";
    } else {
        blnRept = true;
        imgChange('rept', 1);
        disp2.innerHTML = "重复播放";
    }
    tidMsg = setTimeout('rtnTLab()', 1000);
}

// chgPMode() 函式: 切换循序/随机
function chgPMode() {
    if (blnRndPlay) {
        blnRndPlay = false;
        imgChange('pmode', 0);
        disp2.innerHTML = "循序播放";
    } else {
        blnRndPlay = true;
        imgChange('pmode', 1);
        disp2.innerHTML = "随机播放";
    }
    tidMsg = setTimeout('rtnTLab()', 1000);
}

// evtOSChg() 函式: 显示媒体信息 (兼容旧接口)
function evtOSChg(f) {
    // 不再使用WMP的事件，保留空函数以兼容
}

// evtPSChg() 函式: 切换播放程序的动作 (兼容旧接口)
function evtPSChg(f) {
    // 不再使用WMP的事件，保留空函数以兼容
}

// evtWmpBuff() 函式: 缓冲处理
function evtWmpBuff(f) {
    if (f) {
        disp2.innerHTML = "缓冲......";
        var msg = "(缓冲......) " + cActTit;
        disp1.innerHTML = msg;
        if (blnStatusBar) { window.status = (msg); }
    } else {
        disp1.innerHTML = cActTit;
        showTLab();
    }
}

// evtWmpError() 函式: 错误处理
function evtWmpError() {
    intErrCnt++;
    if (intErrCnt <= 1) {
        disp2.innerHTML = "TRY (" + intErrCnt + ")";
        var msg = "(TRY " + intErrCnt + " ) " + cActTit;
        disp1.innerHTML = "<NO...> " + cActTit;
        if (blnStatusBar) { window.status = (msg); }
        tidErr = setTimeout('retryPlay()', 1000);
    } else {
        clearTimeout(tidErr);
        intErrCnt = 0;
        showTLab();
        var msg = "已放弃尝试再联机。现在将会播放下一首曲目。";
        if (blnStatusBar) { window.status = (msg); }
        setTimeout('playAuto()', 1000);
    }
}

// showTLab() 函式: 显示时间长度
function showTLab() {
    if (audioPlayer) {
        if (!isPaused && !audioPlayer.paused) {
            var cp = audioPlayer.currentTime || 0;
            var dur = audioPlayer.duration || 0;
            var cps = formatTime(cp);
            var durs = formatTime(dur);
            if (blnElaps) {
                disp2.innerHTML = cps;
                var msg = cActTit + " (" + cps + " | " + durs + ")";
                if (blnStatusBar) { window.status = (msg); return true; }
            } else {
                var laps = dur - cp;
                var strLaps = formatTime(laps);
                disp2.innerHTML = "- " + strLaps;
                var msg = cActTit + " (" + strLaps + " | " + durs + ")";
                if (blnStatusBar) { window.status = (msg); return true; }
            }
        } else {
            if (audioPlayer.duration && !isNaN(audioPlayer.duration)) {
                var durs = formatTime(audioPlayer.duration);
                if (blnElaps) {
                    disp2.innerHTML = "00:00";
                } else {
                    disp2.innerHTML = "- " + durs;
                }
            } else {
                disp2.innerHTML = "00:00";
            }
        }
    } else {
        disp2.innerHTML = "00:00";
    }
}

// formatTime() 辅助函数: 格式化时间
function formatTime(seconds) {
    if (isNaN(seconds) || !isFinite(seconds) || seconds < 0) {
        return "00:00";
    }
    var hh = Math.floor(seconds / 3600);
    var min = Math.floor(seconds / 60) % 60;
    var sec = Math.floor(seconds % 60);
    var timeLabel = "";
    if (hh > 0) {
        timeLabel = (hh > 9 ? hh.toString() : "0" + hh.toString()) + ":";
    }
    timeLabel += (min > 9 ? min.toString() : "0" + min.toString()) + ":";
    timeLabel += (sec > 9 ? sec.toString() : "0" + sec.toString());
    return timeLabel;
}

// chgTimeFmt() 函式: 变更时间显示方式
function chgTimeFmt() {
    clearInterval(tidTLab);
    if (blnElaps) {
        blnElaps = false;
        disp2.innerHTML = "倒数方式";
    } else {
        blnElaps = true;
        disp2.innerHTML = "正常方式";
    }
    tidMsg = setTimeout('rtnTLab()', 1000);
}

// rtnTLab() 函式: 传回时间长度
function rtnTLab() {
    clearTimeout(tidMsg);
    if (audioPlayer && !audioPlayer.paused && !isPaused) {
        tidTLab = setInterval('showTLab()', 500);
    } else {
        showTLab();
    }
}

// wmpTime() 兼容函数 (已废弃，用formatTime替代)
function wmpTime(dur) {
    return formatTime(dur);
}

// 音量控制函数
var vmax = 100;
var vmin = 0;
var vdep = 10;

function wmpVolUp() {
    clearInterval(tidTLab);
    if (audioPlayer) {
        var vol = (audioPlayer.volume * 100) + vdep;
        if (vol >= vmax) { vol = vmax; }
        audioPlayer.volume = vol / 100;
        disp2.innerHTML = "音量: " + Math.round(vol) + "%";
        if (audioPlayer.muted) {
            audioPlayer.muted = false;
            imgChange('vmute', 0);
        }
    }
    tidMsg = setTimeout('rtnTLab()', 1000);
}

function wmpVolDn() {
    clearInterval(tidTLab);
    if (audioPlayer) {
        var vol = (audioPlayer.volume * 100) - vdep;
        if (vol <= vmin) { vol = vmin; }
        audioPlayer.volume = vol / 100;
        disp2.innerHTML = "音量: " + Math.round(vol) + "%";
        if (audioPlayer.muted) {
            audioPlayer.muted = false;
            imgChange('vmute', 0);
        }
    }
    tidMsg = setTimeout('rtnTLab()', 1000);
}

function wmpMute() {
    clearInterval(tidTLab);
    if (audioPlayer) {
        if (!audioPlayer.muted) {
            audioPlayer.muted = true;
            disp2.innerHTML = "开启静音模式";
            imgChange("vmute", 1);
        } else {
            audioPlayer.muted = false;
            disp2.innerHTML = "关闭静音模式";
            imgChange("vmute", 0);
        }
    }
    tidMsg = setTimeout('rtnTLab()', 1000);
}

// waitMsg() 函式: 显示无法播放的讯息
function waitMsg() {
    if (blnUseSmi) { capText.innerHTML = "ExoBUD MP(II) 字幕显示系统(SMI)"; }
    if (intExobudStat == 1) { disp1.innerHTML = "无法播放 － 播放清单上没有设定任何曲目。"; }
    if (intExobudStat == 2) { disp1.innerHTML = "无法播放 － 您没有选取播放清单上任何一首曲目。"; }
    if (blnStatusBar) {
        if (intExobudStat == 1) { window.status = ('无法播放 － 播放清单上没有设定任何曲目。'); return true; }
        if (intExobudStat == 2) { window.status = ('无法播放 － 您没有选取播放清单上任何一首曲目。'); return true; }
    }
}

// openPlist() 函式: 打开播放清单
function openPlist() {
    window.open("exobudpl.html", "main", "top=0,left=0,width=400,height=480,scrollbars=no,resizable=no,copyhistory=no");
}

// chkWmpState() 兼容函数
function chkWmpState() {
    if (!audioPlayer) return 0;
    if (audioPlayer.paused) return 2;
    if (audioPlayer.ended) return 8;
    if (audioPlayer.playing) return 3;
    return 0;
}

// chkWmpOState() 兼容函数
function chkWmpOState() {
    return 13; // 模拟已开启状态
}

// chkOnline() 兼容函数
function chkOnline() {
    return navigator.onLine;
}

// vizExobud() 兼容函数
function vizExobud() {
    window.open("http://exobud.nayana.org", "vizExobud");
}

// 兼容旧接口 - 模拟Exobud对象
var Exobud = {
    enabled: false,
    settings: {
        autoStart: true,
        balance: 0,
        mute: false,
        playCount: 1,
        rate: 1,
        volume: 70
    },
    controls: {
        play: function() { wmpPlay(); },
        pause: function() { wmpPause(); },
        stop: function() { wmpStop(); }
    },
    currentMedia: {
        getItemInfo: function(key) {
            if (key == "Title") return cActTit || "";
            if (key == "Author") return "";
            if (key == "Copyright") return "";
            if (key == "MediaType") return "audio/mpeg";
            return "";
        },
        durationString: function() {
            if (audioPlayer && audioPlayer.duration) {
                return formatTime(audioPlayer.duration);
            }
            return "00:00";
        },
        duration: function() {
            return audioPlayer ? audioPlayer.duration : 0;
        }
    },
    playState: 0,
    openState: 13,
    isOnline: true,
    URL: "",
    close: function() {},
    Error: {
        clearErrorQueue: function() {}
    },
    ClosedCaption: {
        SAMIFileName: ""
    }
};