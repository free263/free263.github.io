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
                "track": 132,
                "name": "任贤齐-心太软",
                "length": "4:46",
                "file": "简选/国语/任贤齐-心太软.mp3"
				},
				{
                "track": 131,
                "name": "任贤齐-小雪",
                "length": "4:46",
                "file": "简选/国语/任贤齐-小雪.mp3"
				},
				{
                "track": 130,
                "name": "裘海正-九千九百九十九滴眼泪",
                "length": "4:46",
                "file": "简选/国语/裘海正-九千九百九十九滴眼泪.mp3"
				},
				{
                "track": 129,
                "name": "裘海正-爱我的人和我爱的人",
                "length": "4:46",
                "file": "简选/国语/裘海正-爱我的人和我爱的人.mp3"
				},
				{
                "track": 128,
                "name": "邱永传-十一年",
                "length": "4:46",
                "file": "简选/国语/邱永传-十一年.mp3"
				},
				{
                "track": 127,
                "name": "齐豫-橄榄树",
                "length": "4:46",
                "file": "简选/国语/齐豫-橄榄树.mp3"
				},
				{
                "track": 126,
                "name": "齐秦-夜夜夜夜",
                "length": "4:46",
                "file": "简选/国语/齐秦-夜夜夜夜.mp3"
				},
				{
                "track": 125,
                "name": "齐秦-无情的雨无情的你",
                "length": "4:46",
                "file": "简选/国语/齐秦-无情的雨无情的你.mp3"
				},
				{
                "track": 124,
                "name": "齐秦-往事随风",
                "length": "4:46",
                "file": "简选/国语/齐秦-往事随风.mp3"
				},
				{
                "track": 123,
                "name": "齐秦-大约在冬季",
                "length": "4:46",
                "file": "简选/国语/齐秦-大约在冬季.mp3"
				},
				{
                "track": 122,
                "name": "齐秦-不让我的眼泪陪我过夜",
                "length": "4:46",
                "file": "简选/国语/齐秦-不让我的眼泪陪我过夜.mp3"
				},
				{
                "track": 121,
                "name": "平生不晚-难却",
                "length": "4:46",
                "file": "简选/国语/平生不晚-难却.mp3"
				},
				{
                "track": 120,
                "name": "潘越云-我是不是你最疼爱的人",
                "length": "4:46",
                "file": "简选/国语/潘越云-我是不是你最疼爱的人.mp3"
				},
				{
                "track": 119,
                "name": "潘越云-天天天蓝",
                "length": "4:46",
                "file": "简选/国语/潘越云-天天天蓝.mp3"
				},
				{
                "track": 118,
                "name": "潘玮柏-快乐崇拜",
                "length": "4:46",
                "file": "简选/国语/潘玮柏-快乐崇拜.mp3"
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