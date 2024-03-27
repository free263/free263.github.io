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
                "track": 72,
                "name": "李佳薇-煎熬",
                "length": "4:46",
                "file": "简选/国语/李佳薇-煎熬.mp3"
				},
				{
                "track": 71,
                "name": "李常超（Lao乾妈）-盗墓笔记·十年人间",
                "length": "4:46",
                "file": "简选/国语/李常超（Lao乾妈）-盗墓笔记·十年人间.mp3"
				},
				{
                "track": 70,
                "name": "雷佳-人世间",
                "length": "4:46",
                "file": "简选/国语/雷佳-人世间.mp3"
				},
				{
                "track": 69,
                "name": "蒋雪儿-莫问归期",
                "length": "4:46",
                "file": "简选/国语/蒋雪儿-莫问归期.mp3"
				},
				{
                "track": 68,
                "name": "姜育恒-梅花三弄",
                "length": "4:46",
                "file": "简选/国语/姜育恒-梅花三弄.mp3"
				},
				{
                "track": 67,
                "name": "火箭少女101-卡路里",
                "length": "4:46",
                "file": "简选/国语/火箭少女101-卡路里.mp3"
				},
				{
                "track": 66,
                "name": "黄小琥-重来",
                "length": "4:46",
                "file": "简选/国语/黄小琥-重来.mp3"
				},
				{
                "track": 65,
                "name": "黄小琥-顺其自然",
                "length": "4:46",
                "file": "简选/国语/黄小琥-顺其自然.mp3"
				},
				{
                "track": 64,
                "name": "黄小琥-没那么简单",
                "length": "4:46",
                "file": "简选/国语/黄小琥-没那么简单.mp3"
				},
				{
                "track": 63,
                "name": "黄小琥-伴",
                "length": "4:46",
                "file": "简选/国语/黄小琥-伴.mp3"
				},
				{
                "track": 62,
                "name": "黄龄、Tang Duy Tan-叹",
                "length": "4:46",
                "file": "简选/国语/黄龄、Tang Duy Tan-叹.mp3"
				},
				{
                "track": 61,
                "name": "胡夏、郁可唯-知否知否",
                "length": "4:46",
                "file": "简选/国语/胡夏、郁可唯-知否知否.mp3"
				},
				{
                "track": 60,
                "name": "黑豹乐队-无地自容",
                "length": "4:46",
                "file": "简选/国语/黑豹乐队-无地自容.mp3"
				},
				{
                "track": 59,
                "name": "韩雪-想起",
                "length": "4:46",
                "file": "简选/国语/韩雪-想起.mp3"
				},
				{
                "track": 58,
                "name": "韩雪-飘雪",
                "length": "4:46",
                "file": "简选/国语/韩雪-飘雪.mp3"
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