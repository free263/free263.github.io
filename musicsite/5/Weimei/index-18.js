// External Files:
// https://api.html5media.info/1.1.8/html5media.min.js (enables <video> and <audio> tags in all major browsers)
// https://cdn.plyr.io/2.0.13/plyr.js


// HTML5 audio player + playlist controls...
// Inspiration: http://jonhall.info/how_to/create_a_playlist_for_html5_audio
// Mythium Archive: https://archive.org/details/mythium/
jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        var index = 0,
            playing = false,
            mediaPath = 'https://pan.11.wf/free163person/音乐视听/',
            extension = '',
            tracks = [
			
				{
                "track": 101,
                "name": "101.Heartstrings 心弦 - 神秘园",
                "length": "4:46",
                "file": "唯美纯音乐/101.Heartstrings 心弦 - 神秘园.mp3"
				},
				{
                "track": 100,
                "name": "100.奥里诺科之梦 - 班得瑞",
                "length": "4:46",
                "file": "唯美纯音乐/100.奥里诺科之梦 - 班得瑞.mp3"
				},
				{
                "track": 99,
                "name": "099.魂断蓝桥主题曲 - 萨克斯",
                "length": "4:46",
                "file": "唯美纯音乐/099.魂断蓝桥主题曲 - 萨克斯.mp3"
				},
				{
                "track": 98,
                "name": "098.一直很安静 伴奏 - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/098.一直很安静 伴奏 - 纯音乐.mp3"
				},
				{
                "track": 97,
                "name": "097.Lotus 莲花 - 神秘园",
                "length": "4:46",
                "file": "唯美纯音乐/097.Lotus 莲花 - 神秘园.mp3"
				},
				{
                "track": 96,
                "name": "096.莫斯科郊外的晚上 - 萨克斯",
                "length": "4:46",
                "file": "唯美纯音乐/096.莫斯科郊外的晚上 - 萨克斯.mp3"
				},
				{
                "track": 95,
                "name": "095.治愈心灵的神曲 - 轻音乐",
                "length": "4:46",
                "file": "唯美纯音乐/095.治愈心灵的神曲 - 轻音乐.mp3"
				},
				{
                "track": 94,
                "name": "094.山不转水转 (萨克斯 )- 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/094.山不转水转 (萨克斯 )- 纯音乐.mp3"
				},
				{
                "track": 93,
                "name": "093.星语心愿 - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/093.星语心愿 - 纯音乐.mp3"
				},
				{
                "track": 92,
                "name": "092.镜中的安娜 - 纯音乐（吉他)",
                "length": "4:46",
                "file": "唯美纯音乐/092.镜中的安娜 - 纯音乐（吉他).mp3"
				},
				{
                "track": 91,
                "name": "091.蒙娜丽莎的眼泪 - 钢琴曲",
                "length": "4:46",
                "file": "唯美纯音乐/091.蒙娜丽莎的眼泪 - 钢琴曲.mp3"
				},
				{
                "track": 90,
                "name": "090.倩女幽魂 - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/090.倩女幽魂 - 纯音乐.mp3"
				},
				{
                "track": 89,
                "name": "089.Sometimes When It Rains (下雨的时候) - 神秘园",
                "length": "4:46",
                "file": "唯美纯音乐/089.Sometimes When It Rains (下雨的时候) - 神秘园.mp3"
				},
				{
                "track": 88,
                "name": "088.童年的味道 (轻快的纯音乐) - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/088.童年的味道 (轻快的纯音乐) - 纯音乐.mp3"
				},
				{
                "track": 87,
                "name": "087.微风小径 (The Winding Path) - Kevin Kern",
                "length": "4:46",
                "file": "唯美纯音乐/087.微风小径 (The Winding Path) - Kevin Kern.mp3"
				},
			],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackLength = value.length;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                } else {
                    trackNumber = '' + trackNumber;
                }
                $('#plList').append('<li><div class="plItem"><div class="plNum">' + trackNumber + '.</div><div class="plTitle">' + trackName + '</div><div class="plLength">' + trackLength + '</div></div></li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').bind('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).bind('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).bind('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').click(function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').click(function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').click(function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType('audio/mpeg') ? '' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    }
});

//initialize plyr
plyr.setup($('#audio1'), {});