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
                "track": 122,
                "name": "成龙、金喜善-无尽的爱",
                "length": "4:46",
                "file": "精选/成龙、金喜善-无尽的爱.mp3"
				},
				{
                "track": 121,
                "name": "成龙、范晓萱-身不由己",
                "length": "4:46",
                "file": "精选/成龙、范晓萱-身不由己.mp3"
				},
				{
                "track": 120,
                "name": "陈奕迅-十年",
                "length": "4:46",
                "file": "精选/陈奕迅-十年.mp3"
				},
				{
                "track": 119,
                "name": "陈奕迅-好久不见",
                "length": "4:46",
                "file": "精选/陈奕迅-好久不见.mp3"
				},
				{
                "track": 118,
                "name": "陈奕迅-孤勇者",
                "length": "4:46",
                "file": "精选/陈奕迅-孤勇者.mp3"
				},
				{
                "track": 117,
                "name": "陈奕迅-富士山下",
                "length": "4:46",
                "file": "精选/陈奕迅-富士山下.mp3"
				},
				{
                "track": 116,
                "name": "陈奕迅-浮夸",
                "length": "4:46",
                "file": "精选/陈奕迅-浮夸.mp3"
				},
				{
                "track": 115,
                "name": "陈奕迅-爱情转移",
                "length": "4:46",
                "file": "精选/陈奕迅-爱情转移.mp3"
				},
				{
                "track": 114,
                "name": "陈奕迅-K歌之王",
                "length": "4:46",
                "file": "精选/陈奕迅-K歌之王.mp3"
				},
				{
                "track": 113,
                "name": "陈奕迅、王菲-因为爱情",
                "length": "4:46",
                "file": "精选/陈奕迅、王菲-因为爱情.mp3"
				},
				{
                "track": 112,
                "name": "陈雅森-下辈子不一定还能遇见你",
                "length": "4:46",
                "file": "精选/陈雅森-下辈子不一定还能遇见你.mp3"
				},
				{
                "track": 111,
                "name": "陈旭-哥只是个传说",
                "length": "4:46",
                "file": "精选/陈旭-哥只是个传说.mp3"
				},
				{
                "track": 110,
                "name": "陈晓东-比我幸福",
                "length": "4:46",
                "file": "精选/陈晓东-比我幸福.mp3"
				},
				{
                "track": 109,
                "name": "陈伟霆、宝石Gem-野狼Disco",
                "length": "4:46",
                "file": "精选/陈伟霆、宝石Gem-野狼Disco.mp3"
				},
				{
                "track": 108,
                "name": "陈淑桦-笑红尘",
                "length": "4:46",
                "file": "精选/陈淑桦-笑红尘.mp3"
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