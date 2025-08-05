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
                "track": 182,
                "name": "范玮琪-最重要的决定",
                "length": "4:46",
                "file": "精选/范玮琪-最重要的决定.mp3"
				},
				{
                "track": 181,
                "name": "范玮琪-最初的梦想",
                "length": "4:46",
                "file": "精选/范玮琪-最初的梦想.mp3"
				},
				{
                "track": 180,
                "name": "范玮琪-一个像夏天一个像秋天",
                "length": "4:46",
                "file": "精选/范玮琪-一个像夏天一个像秋天.mp3"
				},
				{
                "track": 179,
                "name": "樊凡-燃烧翅膀",
                "length": "4:46",
                "file": "精选/樊凡-燃烧翅膀.mp3"
				},
				{
                "track": 178,
                "name": "樊凡-等不到的爱",
                "length": "4:46",
                "file": "精选/樊凡-等不到的爱.mp3"
				},
				{
                "track": 177,
                "name": "杜德伟-情人",
                "length": "4:46",
                "file": "精选/杜德伟-情人.mp3"
				},
				{
                "track": 176,
                "name": "动力火车-忠孝东路走九遍",
                "length": "4:46",
                "file": "精选/动力火车-忠孝东路走九遍.mp3"
				},
				{
                "track": 175,
                "name": "动力火车-无情的情书",
                "length": "4:46",
                "file": "精选/动力火车-无情的情书.mp3"
				},
				{
                "track": 174,
                "name": "动力火车-明天的明天的明天",
                "length": "4:46",
                "file": "精选/动力火车-明天的明天的明天.mp3"
				},
				{
                "track": 173,
                "name": "动力火车-第一滴泪",
                "length": "4:46",
                "file": "精选/动力火车-第一滴泪.mp3"
				},
				{
                "track": 172,
                "name": "动力火车-当",
                "length": "4:46",
                "file": "精选/动力火车-当.mp3"
				},
				{
                "track": 171,
                "name": "动力火车-背叛情歌",
                "length": "4:46",
                "file": "精选/动力火车-背叛情歌.mp3"
				},
				{
                "track": 170,
                "name": "冬季恋歌-从开始到现在",
                "length": "4:46",
                "file": "精选/冬季恋歌-从开始到现在.mp3"
				},
				{
                "track": 169,
                "name": "丁当-手掌心",
                "length": "4:46",
                "file": "精选/丁当-手掌心.mp3"
				},
				{
                "track": 168,
                "name": "丁当-猜不透",
                "length": "4:46",
                "file": "精选/丁当-猜不透.mp3"
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