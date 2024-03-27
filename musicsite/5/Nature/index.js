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
                "track": 222,
                "name": "222.清晨的雨声 大自然的声音 纯音乐［声谷］",
                "length": "4:46",
                "file": "自然之声/222.清晨的雨声 大自然的声音 纯音乐［声谷］.mp3"
				},
				{
                "track": 221,
                "name": "221.云栖竹林听雨 午后禅定 大自然的声音 纯音乐 [声谷]",
                "length": "4:46",
                "file": "自然之声/221.云栖竹林听雨 午后禅定 大自然的声音 纯音乐 [声谷].mp3"
				},
				{
                "track": 220,
                "name": "220.台风来时 大自然的声音 纯音乐［声谷］",
                "length": "4:46",
                "file": "自然之声/220.台风来时 大自然的声音 纯音乐［声谷］.mp3"
				},
				{
                "track": 219,
                "name": "219.亭子下的雨声 大自然的声音 纯音乐［声谷］",
                "length": "4:46",
                "file": "自然之声/219.亭子下的雨声 大自然的声音 纯音乐［声谷］.mp3"
				},
				{
                "track": 218,
                "name": "218.雨声行人鸟儿飞机 舒适自然 大自然的声音 纯音乐",
                "length": "4:46",
                "file": "自然之声/218.雨声行人鸟儿飞机 舒适自然 大自然的声音 纯音乐.mp3"
				},
				{
                "track": 217,
                "name": "217.深夜林中细雨 大自然的声音 纯音乐",
                "length": "4:46",
                "file": "自然之声/217.深夜林中细雨 大自然的声音 纯音乐.mp3"
				},
				{
                "track": 216,
                "name": "216.深夜的雨声 大自然声音",
                "length": "4:46",
                "file": "自然之声/216.深夜的雨声 大自然声音.mp3"
				},
				{
                "track": 215,
                "name": "215.棕叶下的雨 关注声谷 众公号了解自然录音",
                "length": "4:46",
                "file": "自然之声/215.棕叶下的雨 关注声谷 众公号了解自然录音.mp3"
				},
				{
                "track": 214,
                "name": "214.下雨天 - 车里打着转向灯 带耳机效果超赞",
                "length": "4:46",
                "file": "自然之声/214.下雨天 - 车里打着转向灯 带耳机效果超赞.mp3"
				},
				{
                "track": 213,
                "name": "213.下雨天 - 车里无转向灯 带耳机效果超赞",
                "length": "4:46",
                "file": "自然之声/213.下雨天 - 车里无转向灯 带耳机效果超赞.mp3"
				},
				{
                "track": 212,
                "name": "212.雨后-树下的雨滴稀稀疏疏",
                "length": "4:46",
                "file": "自然之声/212.雨后-树下的雨滴稀稀疏疏.mp3"
				},
				{
                "track": 211,
                "name": "211.雨中蛙声 - 雨下大了蛙声也渐渐变小",
                "length": "4:46",
                "file": "自然之声/211.雨中蛙声 - 雨下大了蛙声也渐渐变小.mp3"
				},
				{
                "track": 210,
                "name": "210.在花园里劳作",
                "length": "4:46",
                "file": "自然之声/210.在花园里劳作.mp3"
				},
				{
                "track": 209,
                "name": "209.早安",
                "length": "4:46",
                "file": "自然之声/209.早安.mp3"
				},
				{
                "track": 208,
                "name": "208.我们的时光",
                "length": "4:46",
                "file": "自然之声/208.我们的时光.mp3"
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