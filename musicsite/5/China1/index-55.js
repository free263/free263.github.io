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
                "track": 302,
                "name": "李常超（Lao乾妈）-盗墓笔记·十年人间",
                "length": "4:46",
                "file": "精选/李常超（Lao乾妈）-盗墓笔记·十年人间.mp3"
				},
				{
                "track": 301,
                "name": "李彩桦-我爱雨天",
                "length": "4:46",
                "file": "精选/李彩桦-我爱雨天.mp3"
				},
				{
                "track": 300,
                "name": "黎明-深秋的黎明",
                "length": "4:46",
                "file": "精选/黎明-深秋的黎明.mp3"
				},
				{
                "track": 299,
                "name": "冷漠-没有你陪伴我真的好孤单",
                "length": "4:46",
                "file": "精选/冷漠-没有你陪伴我真的好孤单.mp3"
				},
				{
                "track": 298,
                "name": "雷佳-人世间",
                "length": "4:46",
                "file": "精选/雷佳-人世间.mp3"
				},
				{
                "track": 297,
                "name": "雷佳-芦花",
                "length": "4:46",
                "file": "精选/雷佳-芦花.mp3"
				},
				{
                "track": 296,
                "name": "乐凡-你是我心里的宝",
                "length": "4:46",
                "file": "精选/乐凡-你是我心里的宝.mp3"
				},
				{
                "track": 295,
                "name": "老狼-同桌的你",
                "length": "4:46",
                "file": "精选/老狼-同桌的你.mp3"
				},
				{
                "track": 294,
                "name": "老狼-恋恋风尘",
                "length": "4:46",
                "file": "精选/老狼-恋恋风尘.mp3"
				},
				{
                "track": 293,
                "name": "蓝心羽-寂寞烟火",
                "length": "4:46",
                "file": "精选/蓝心羽-寂寞烟火.mp3"
				},
				{
                "track": 292,
                "name": "蓝心湄-一见钟情",
                "length": "4:46",
                "file": "精选/蓝心湄-一见钟情.mp3"
				},
				{
                "track": 291,
                "name": "蓝色生死恋-祈祷",
                "length": "4:46",
                "file": "精选/蓝色生死恋-祈祷.mp3"
				},
				{
                "track": 290,
                "name": "筷子兄弟-小苹果",
                "length": "4:46",
                "file": "精选/筷子兄弟-小苹果.mp3"
				},
				{
                "track": 289,
                "name": "侃侃-滴答",
                "length": "4:46",
                "file": "精选/侃侃-滴答.mp3"
				},
				{
                "track": 288,
                "name": "卡朋特-YesterdayOnceMore",
                "length": "4:46",
                "file": "精选/卡朋特-YesterdayOnceMore.mp3"
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