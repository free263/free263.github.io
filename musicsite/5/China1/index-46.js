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
            mediaPath = 'https://vercel.11.wf/free163person/音乐视听/',
            extension = '',
            tracks = [
			
				{
                "track": 437,
                "name": "孟庭苇-情人节快乐",
                "length": "4:46",
                "file": "精选/孟庭苇-情人节快乐.mp3"
				},
				{
                "track": 436,
                "name": "孟庭苇-你看你看月亮的脸",
                "length": "4:46",
                "file": "精选/孟庭苇-你看你看月亮的脸.mp3"
				},
				{
                "track": 435,
                "name": "孟庭苇-你究竟有几个好妹妹",
                "length": "4:46",
                "file": "精选/孟庭苇-你究竟有几个好妹妹.mp3"
				},
				{
                "track": 434,
                "name": "孟庭苇-没有情人的情人节",
                "length": "4:46",
                "file": "精选/孟庭苇-没有情人的情人节.mp3"
				},
				{
                "track": 433,
                "name": "孟庭苇-风中有朵雨做的云",
                "length": "4:46",
                "file": "精选/孟庭苇-风中有朵雨做的云.mp3"
				},
				{
                "track": 432,
                "name": "孟庭苇-冬季到台北来看雨",
                "length": "4:46",
                "file": "精选/孟庭苇-冬季到台北来看雨.mp3"
				},
				{
                "track": 431,
                "name": "萌萌哒天团-帝都",
                "length": "4:46",
                "file": "精选/萌萌哒天团-帝都.mp3"
				},
				{
                "track": 430,
                "name": "梅艳芳-女人花",
                "length": "4:46",
                "file": "精选/梅艳芳-女人花.mp3"
				},
				{
                "track": 429,
                "name": "毛宁-涛声依旧",
                "length": "4:46",
                "file": "精选/毛宁-涛声依旧.mp3"
				},
				{
                "track": 428,
                "name": "毛宁-蓝蓝的夜蓝蓝的梦",
                "length": "4:46",
                "file": "精选/毛宁-蓝蓝的夜蓝蓝的梦.mp3"
				},
				{
                "track": 427,
                "name": "毛不易-消愁",
                "length": "4:46",
                "file": "精选/毛不易-消愁.mp3"
				},
				{
                "track": 426,
                "name": "满文军-望乡",
                "length": "4:46",
                "file": "精选/满文军-望乡.mp3"
				},
				{
                "track": 425,
                "name": "满文军-懂你",
                "length": "4:46",
                "file": "精选/满文军-懂你.mp3"
				},
				{
                "track": 424,
                "name": "马郁-一天死去一点",
                "length": "4:46",
                "file": "精选/马郁-一天死去一点.mp3"
				},
				{
                "track": 423,
                "name": "马郁-下辈子如果我还记得你",
                "length": "4:46",
                "file": "精选/马郁-下辈子如果我还记得你.mp3"
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