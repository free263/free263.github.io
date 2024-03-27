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
                "track": 114,
                "name": "邓丽君-真稀奇（国语）0139",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-真稀奇（国语）0139.mp3"
				},
				{
                "track": 113,
                "name": "邓丽君-白沙滩（国语）0042",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-白沙滩（国语）0042.mp3"
				},
				{
                "track": 112,
                "name": "邓丽君-甜蜜蜜（演唱会）0107",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-甜蜜蜜（演唱会）0107.mp3"
				},
				{
                "track": 111,
                "name": "邓丽君-甜蜜蜜（国语）0106",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-甜蜜蜜（国语）0106.mp3"
				},
				{
                "track": 110,
                "name": "邓丽君-珊瑚恋（国语）0094",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-珊瑚恋（国语）0094.mp3"
				},
				{
                "track": 109,
                "name": "邓丽君-爱惜花（国语）0041",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-爱惜花（国语）0041.mp3"
				},
				{
                "track": 108,
                "name": "邓丽君-点秋香（国语）0063",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-点秋香（国语）0063.mp3"
				},
				{
                "track": 107,
                "name": "邓丽君-满天星（国语）0082",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-满天星（国语）0082.mp3"
				},
				{
                "track": 106,
                "name": "邓丽君-浪游曲（国语）0078",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-浪游曲（国语）0078.mp3"
				},
				{
                "track": 105,
                "name": "邓丽君-泥娃娃（国语）0084",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-泥娃娃（国语）0084.mp3"
				},
				{
                "track": 104,
                "name": "邓丽君-水长流（国语）0100",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-水长流（国语）0100.mp3"
				},
				{
                "track": 103,
                "name": "邓丽君-水涟漪（国语）0097",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-水涟漪（国语）0097.mp3"
				},
				{
                "track": 102,
                "name": "邓丽君-水上人（国语）0099",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-水上人（国语）0099.mp3"
				},
				{
                "track": 101,
                "name": "邓丽君-比翼鸟（国语）0044",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-比翼鸟（国语）0044.mp3"
				},
				{
                "track": 100,
                "name": "邓丽君-桃花江（国语）0105",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-桃花江（国语）0105.mp3"
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