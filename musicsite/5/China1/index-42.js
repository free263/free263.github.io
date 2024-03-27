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
                "track": 497,
                "name": "任贤齐-心太软",
                "length": "4:46",
                "file": "精选/任贤齐-心太软.mp3"
				},
				{
                "track": 496,
                "name": "任贤齐-小雪",
                "length": "4:46",
                "file": "精选/任贤齐-小雪.mp3"
				},
				{
                "track": 495,
                "name": "任贤齐-我是一只鱼",
                "length": "4:46",
                "file": "精选/任贤齐-我是一只鱼.mp3"
				},
				{
                "track": 494,
                "name": "任贤齐-伤心太平洋",
                "length": "4:46",
                "file": "精选/任贤齐-伤心太平洋.mp3"
				},
				{
                "track": 493,
                "name": "任贤齐-流着泪的你的脸",
                "length": "4:46",
                "file": "精选/任贤齐-流着泪的你的脸.mp3"
				},
				{
                "track": 492,
                "name": "任贤齐-沧海一声笑",
                "length": "4:46",
                "file": "精选/任贤齐-沧海一声笑.mp3"
				},
				{
                "track": 491,
                "name": "任妙音-风筝",
                "length": "4:46",
                "file": "精选/任妙音-风筝.mp3"
				},
				{
                "track": 490,
                "name": "饶天亮-做你的爱人",
                "length": "4:46",
                "file": "精选/饶天亮-做你的爱人.mp3"
				},
				{
                "track": 489,
                "name": "群星-夜空中最闪亮的星",
                "length": "4:46",
                "file": "精选/群星-夜空中最闪亮的星.mp3"
				},
				{
                "track": 488,
                "name": "曲婉婷-我的歌声里",
                "length": "4:46",
                "file": "精选/曲婉婷-我的歌声里.mp3"
				},
				{
                "track": 487,
                "name": "裘海正-九千九百九十九滴眼泪",
                "length": "4:46",
                "file": "精选/裘海正-九千九百九十九滴眼泪.mp3"
				},
				{
                "track": 486,
                "name": "裘海正-爱我的人和我爱的人",
                "length": "4:46",
                "file": "精选/裘海正-爱我的人和我爱的人.mp3"
				},
				{
                "track": 485,
                "name": "邱永传-十一年",
                "length": "4:46",
                "file": "精选/邱永传-十一年.mp3"
				},
				{
                "track": 484,
                "name": "千百惠-走过咖啡屋",
                "length": "4:46",
                "file": "精选/千百惠-走过咖啡屋.mp3"
				},
				{
                "track": 483,
                "name": "祁隆、乐凡-等你等了那么久",
                "length": "4:46",
                "file": "精选/祁隆、乐凡-等你等了那么久.mp3"
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