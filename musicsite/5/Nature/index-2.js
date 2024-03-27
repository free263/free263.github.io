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
                "track": 207,
                "name": "207.为你撑伞",
                "length": "4:46",
                "file": "自然之声/207.为你撑伞.mp3"
				},
				{
                "track": 206,
                "name": "206.下雨天",
                "length": "4:46",
                "file": "自然之声/206.下雨天.mp3"
				},
				{
                "track": 205,
                "name": "205.雨季",
                "length": "4:46",
                "file": "自然之声/205.雨季.mp3"
				},
				{
                "track": 204,
                "name": "204.兜风",
                "length": "4:46",
                "file": "自然之声/204.兜风.mp3"
				},
				{
                "track": 203,
                "name": "203.躲雨",
                "length": "4:46",
                "file": "自然之声/203.躲雨.mp3"
				},
				{
                "track": 202,
                "name": "202.小晴",
                "length": "4:46",
                "file": "自然之声/202.小晴.mp3"
				},
				{
                "track": 201,
                "name": "201.闲逛",
                "length": "4:46",
                "file": "自然之声/201.闲逛.mp3"
				},
				{
                "track": 200,
                "name": "200.阵雨",
                "length": "4:46",
                "file": "自然之声/200.阵雨.mp3"
				},
				{
                "track": 199,
                "name": "199.等你",
                "length": "4:46",
                "file": "自然之声/199.等你.mp3"
				},
				{
                "track": 198,
                "name": "198.直到春天过去",
                "length": "4:46",
                "file": "自然之声/198.直到春天过去.mp3"
				},
				{
                "track": 197,
                "name": "197.仲夏夜之梦",
                "length": "4:46",
                "file": "自然之声/197.仲夏夜之梦.mp3"
				},
				{
                "track": 196,
                "name": "196.在水一方",
                "length": "4:46",
                "file": "自然之声/196.在水一方.mp3"
				},
				{
                "track": 195,
                "name": "195.雨城",
                "length": "4:46",
                "file": "自然之声/195.雨城.mp3"
				},
				{
                "track": 194,
                "name": "194.老电影",
                "length": "4:46",
                "file": "自然之声/194.老电影.mp3"
				},
				{
                "track": 193,
                "name": "193.寻找自我之旅",
                "length": "4:46",
                "file": "自然之声/193.寻找自我之旅.mp3"
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