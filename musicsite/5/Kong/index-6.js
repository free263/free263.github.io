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
                "track": 97,
                "name": "贝多芬-田园交响曲",
                "length": "4:46",
                "file": "纯音乐/贝多芬-田园交响曲.mp3"
				},
				{
                "track": 96,
                "name": "贝多芬-命运交响乐",
                "length": "4:46",
                "file": "纯音乐/贝多芬-命运交响乐.mp3"
				},
				{
                "track": 95,
                "name": "贝多芬-悲怆奏鸣曲",
                "length": "4:46",
                "file": "纯音乐/贝多芬-悲怆奏鸣曲.mp3"
				},
				{
                "track": 94,
                "name": "班德瑞-巴格达的星星",
                "length": "4:46",
                "file": "纯音乐/班德瑞-巴格达的星星.mp3"
				},
				{
                "track": 93,
                "name": "班得瑞-紫蝴蝶",
                "length": "4:46",
                "file": "纯音乐/班得瑞-紫蝴蝶.mp3"
				},
				{
                "track": 92,
                "name": "班得瑞-追梦人",
                "length": "4:46",
                "file": "纯音乐/班得瑞-追梦人.mp3"
				},
				{
                "track": 91,
                "name": "班得瑞-月光",
                "length": "4:46",
                "file": "纯音乐/班得瑞-月光.mp3"
				},
				{
                "track": 90,
                "name": "班得瑞-月光 ",
                "length": "4:46",
                "file": "纯音乐/班得瑞-月光 .mp3"
				},
				{
                "track": 89,
                "name": "班得瑞-忧郁的爱",
                "length": "4:46",
                "file": "纯音乐/班得瑞-忧郁的爱.mp3"
				},
				{
                "track": 88,
                "name": "班得瑞-依卡路斯的羽翼",
                "length": "4:46",
                "file": "纯音乐/班得瑞-依卡路斯的羽翼.mp3"
				},
				{
                "track": 87,
                "name": "班得瑞-仙境",
                "length": "4:46",
                "file": "纯音乐/班得瑞-仙境.mp3"
				},
				{
                "track": 86,
                "name": "班得瑞-夏日华尔兹",
                "length": "4:46",
                "file": "纯音乐/班得瑞-夏日华尔兹.mp3"
				},
				{
                "track": 85,
                "name": "班得瑞-无止境的见识",
                "length": "4:46",
                "file": "纯音乐/班得瑞-无止境的见识.mp3"
				},
				{
                "track": 84,
                "name": "班得瑞-微风山谷",
                "length": "4:46",
                "file": "纯音乐/班得瑞-微风山谷.mp3"
				},
				{
                "track": 83,
                "name": "班得瑞-天堂之门",
                "length": "4:46",
                "file": "纯音乐/班得瑞-天堂之门.mp3"
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