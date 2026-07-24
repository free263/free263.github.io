/**
 * Created by Nandem on 2015/11/12.
 * Modified to use music.js
 */

var $playBtn;
var $pauseBtn;
var $nextBtn;
var $preBtn;
var $stopBtn;
var $muteBtn;
var $firstBtn;
var $lastBtn;
var $shuffleMode;
var $listMode;
var $loopMode;
var myAudio;
var controllArm;
var $cdCover;
var iStartDeg;
var iEndDeg;
var iIncrement;
var songsListIndex;//the index of song in the songslist
var playMode;//list shuffle loop
var shuffleIndex;
var shuffleIndexCount;

$().ready(function ()
{
    // 从 window.musicList 读取歌曲列表，并转换格式
    var musicData = window.musicList || [];
    songsList = musicData.map(function(item) {
        return {
            "title": item.name || "未知曲目",
            "artist": "",
            "coverURL": "",
            "musicURL": item.url || ""
        };
    });

    if (songsList.length === 0) {
        // 如果没有歌曲，添加一首默认提示歌曲
        songsList = [{
            "title": "暂无音乐",
            "artist": "",
            "coverURL": "",
            "musicURL": ""
        }];
    }

    init();
    myAudio.src = songsList[songsListIndex].musicURL;
    /*^_^------------------some event listeners-------------------^_^*/
    myAudio.addEventListener('ended', function ()
    {
        controllArm.style.transform="rotate(-130deg)"
        if(playMode == "list")
        {
            songsListIndex++;
            if (songsListIndex >= songsList.length)
                songsListIndex = 0;
            myAudio.src = songsList[songsListIndex].musicURL;
            myAudio.load();
        }
        else if(playMode == "shuffle")
        {
            // 从剩余未播放列表中随机取一首
            if (shuffleIndexCount < 0) {
                // 所有歌曲都已播放完，重新洗牌
                initShuffleGenerator();
            }
            var randomPos = getRandom(shuffleIndexCount);
            var selectedIndex = shuffleIndex[randomPos];
            // 将选中的歌曲与最后一位交换，标记为已播放
            shuffleIndex[randomPos] = shuffleIndex[shuffleIndexCount];
            shuffleIndex[shuffleIndexCount] = selectedIndex;
            shuffleIndexCount--;
            
            songsListIndex = selectedIndex;
            myAudio.src = songsList[songsListIndex].musicURL;
            myAudio.load();
        }
        else if(playMode == "loop")
        {
            // 单曲循环：重置播放位置并重新播放
            myAudio.currentTime = 0;
            myAudio.play();
            // 更新显示
            var displayName = songsList[songsListIndex].title;
            if (songsList[songsListIndex].artist) {
                displayName += "-" + songsList[songsListIndex].artist;
            }
            $("#myConsole").text(displayName);
            return;
        }
        iStartDeg = -95;
        iEndDeg = -120;
        myAudio.play();
    }, false);

    myAudio.addEventListener("timeupdate", function ()
    {
        var $myCon = $("#myConsole");
        if (!isNaN(myAudio.duration))
        {
            var progressValue = myAudio.currentTime/myAudio.duration;
            if(myAudio.paused)
                return;//confrim the controllerArm can be rotated immediately
            iStartDeg = -95 - 25 * progressValue;
            controllArm.style.transform = "rotate(" + iStartDeg +"deg)";
            var displayName = songsList[songsListIndex].title;
            if (songsList[songsListIndex].artist) {
                displayName += "-" + songsList[songsListIndex].artist;
            }
            $myCon.text(displayName);
        }
        else
            $myCon.text("加载中...");
    }, false);
});

function initEventClick()
{
    /*^_^------------------some click events-------------------^_^*/
    $playBtn.click(function ()
    {
        // 如果当前没有歌曲或歌曲加载失败，尝试重新加载
        if (!myAudio.src || myAudio.src === "") {
            if (songsList.length > 0 && songsList[songsListIndex].musicURL) {
                myAudio.src = songsList[songsListIndex].musicURL;
                myAudio.load();
            } else {
                return;
            }
        }
        iIncrement = (iStartDeg - iEndDeg);
        controllArm.style.transform="rotate(" + iStartDeg +"deg)";
        if($cdCover.hasClass("cdPause"))
        {
            $cdCover.removeClass("cdPause");
            $cdCover.removeClass("cdStart");
        }
        if(!$cdCover.hasClass("cdStart"))
            $cdCover.addClass("cdStart");
        myAudio.play();
    });
    $pauseBtn.click(function ()
    {
        controllArm.style.transform="rotate(-130deg)"
        if(!$cdCover.hasClass("cdPause"))
            $cdCover.addClass("cdPause");
        myAudio.pause();
    });
    $nextBtn.click(function ()
    {
        changeSong("next");
    });
    $preBtn.click(function ()
    {
        changeSong("pre");
    });

    $stopBtn.click(stop);
    function stop()
    {
        controllArm.style.transform="rotate(-130deg)"
        $cdCover.removeClass("cdPause");
        $cdCover.removeClass("cdStart");
        myAudio.load();
    }

    $muteBtn.click(function ()
    {
        myAudio.muted = !myAudio.muted;
        if(myAudio.muted)
            $(this).css({"color":'red'});
        else
            $(this).css({"color":'#b1b9c6'});
    });
    $firstBtn.click(function ()
    {
        changeSong("first");
    });
    $lastBtn.click(function ()
    {
        changeSong("last");
    });

    $shuffleMode.click(function ()
    {
        playMode = "shuffle";
        $("#playMode").find("div").css({"color":"#b1b9c6"});
        $(this).css({"color":"#e74d3c"});
        // 重置随机播放索引
        initShuffleGenerator();
        // 将当前歌曲设为已播放
        // 在 shuffleIndex 中找到当前歌曲的索引
        for (var i = 0; i < shuffleIndex.length; i++) {
            if (shuffleIndex[i] === songsListIndex) {
                // 将当前歌曲交换到末尾，标记为已播放
                var temp = shuffleIndex[i];
                shuffleIndex[i] = shuffleIndex[shuffleIndexCount];
                shuffleIndex[shuffleIndexCount] = temp;
                shuffleIndexCount--;
                break;
            }
        }
    });
    $listMode.click(function ()
    {
        playMode = "list";
        $("#playMode").find("div").css({"color":"#b1b9c6"});
        $(this).css({"color":"#e74d3c"});
    });
    $loopMode.click(function ()
    {
        playMode = "loop";
        $("#playMode").find("div").css({"color":"#b1b9c6"});
        $(this).css({"color":"#e74d3c"});
    });

    /*^_^------------------some buttons' hover-------------------^_^*/
    $muteBtn.hover
    (
        function ()
        {
            if(!myAudio.muted)
                $(this).css({"color":'#ffffff'});
        },
        function ()
        {
            $(this).css({"color":'#b1b9c6'});
            if(myAudio.muted)
                $(this).css({"color":'red'});
        }
    );
}

function initComponents()
{
    $playBtn = $("#playBtn");
    $pauseBtn = $("#pauseBtn");
    $nextBtn = $("#nextBtn");
    $preBtn = $("#preBtn");
    $stopBtn = $("#stopBtn");
    $muteBtn = $("#muteBtn");
    $firstBtn = $("#firstBtn");
    $lastBtn = $("#lastBtn");
    $shuffleMode = $("#shuffleMode");
    $listMode = $("#listMode");
    $loopMode = $("#loopMode");
    myAudio = $("#myAudio")[0];
    controllArm = $("#cdControllerArm")[0];
    $cdCover = $("#cdCover");
    iStartDeg = -95;
    iEndDeg = -120;
    iIncrement = 25;
    songsListIndex = 0;//the index of song in the songslist
    playMode = "list";//list shuffle loop
    $("#listMode").css({"color":"#e74d3c"});
    shuffleIndex = [];
    shuffleIndexCount = songsList.length - 1;
    initShuffleGenerator();
}

function initShuffleGenerator()
{
    // 初始化随机播放索引数组 [0, 1, 2, 3, ...]
    shuffleIndex = [];
    for(var i = 0; i < songsList.length; i++)
    {
        shuffleIndex[i] = i;
    }
    // 重置剩余未播放数量为歌曲总数
    shuffleIndexCount = songsList.length - 1;
    // 打乱数组，使随机播放更自然
    for (var j = songsList.length - 1; j > 0; j--) {
        var randomPos = getRandom(j);
        var temp = shuffleIndex[j];
        shuffleIndex[j] = shuffleIndex[randomPos];
        shuffleIndex[randomPos] = temp;
    }
}

function init()
{
    initComponents();
    initEventClick();
}

/*^_^------------------some core functions-------------------^_^*/
function shuffle()
{
    // 从剩余未播放列表中随机取一首
    if (shuffleIndexCount < 0 || shuffleIndex.length === 0) {
        // 所有歌曲都已播放完，重新洗牌
        initShuffleGenerator();
    }
    var randomPos = getRandom(shuffleIndexCount);
    var selectedIndex = shuffleIndex[randomPos];
    // 将选中的歌曲与最后一位交换，标记为已播放
    shuffleIndex[randomPos] = shuffleIndex[shuffleIndexCount];
    shuffleIndex[shuffleIndexCount] = selectedIndex;
    shuffleIndexCount--;
    
    return selectedIndex;
}

function changeSong(whatDirection)
{
    // 如果歌曲列表为空，不执行任何操作
    if (songsList.length === 0) return;

    // 判断当前是否在播放（用于切换后自动播放）
    var isPlaying = !myAudio.paused && !$cdCover.hasClass("cdPause");

    if(whatDirection == "pre") {
        if (playMode == "shuffle") {
            // 随机模式不支持上一曲，直接重新随机
            songsListIndex = shuffle();
        } else {
            songsListIndex--;
            if (songsListIndex < 0)
                songsListIndex = songsList.length - 1;
        }
    }
    else if (whatDirection == "next") {
        if (playMode == "shuffle") {
            songsListIndex = shuffle();
        } else {
            songsListIndex++;
            if (songsListIndex >= songsList.length)
                songsListIndex = 0;
        }
    }
    else if (whatDirection == "first") {
        songsListIndex = 0;
        if (playMode == "shuffle") {
            // 切换到首曲时，重置随机播放状态，并将当前歌曲标记为已播放
            initShuffleGenerator();
            for (var i = 0; i < shuffleIndex.length; i++) {
                if (shuffleIndex[i] === songsListIndex) {
                    var temp = shuffleIndex[i];
                    shuffleIndex[i] = shuffleIndex[shuffleIndexCount];
                    shuffleIndex[shuffleIndexCount] = temp;
                    shuffleIndexCount--;
                    break;
                }
            }
        }
    }
    else if(whatDirection == "last")
    {
        songsListIndex = songsList.length - 1;
        if (playMode == "shuffle") {
            // 切换到末曲时，重置随机播放状态，并将当前歌曲标记为已播放
            initShuffleGenerator();
            for (var i = 0; i < shuffleIndex.length; i++) {
                if (shuffleIndex[i] === songsListIndex) {
                    var temp = shuffleIndex[i];
                    shuffleIndex[i] = shuffleIndex[shuffleIndexCount];
                    shuffleIndex[shuffleIndexCount] = temp;
                    shuffleIndexCount--;
                    break;
                }
            }
        }
    }

    // 更新歌曲
    if (songsList[songsListIndex] && songsList[songsListIndex].musicURL) {
        myAudio.src = songsList[songsListIndex].musicURL;
        myAudio.load();
        // 如果之前是播放状态，自动播放
        if (isPlaying) {
            myAudio.play();
        }
    }
}

/*^_^------------------some assistant functions-------------------^_^*/
//generate random
function getRandom(n)
{
    if (n <= 0) return 0;
    return Math.floor(Math.random() * (n + 1));
}

//convert float/double to percent
Number.prototype.toPercent = function(n)
{
    n = n || 2;
    return ( Math.round( this * Math.pow( 10, n + 2 ) ) / Math.pow( 10, n ) ).toFixed( n ) + '%';
};

/*^_^-------------------------songs list--------------------------^_^*/
// 由 music.js 提供数据，此处仅为兼容
var songsList = [];