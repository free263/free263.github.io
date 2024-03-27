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
                "track": 39,
                "name": "邓丽君-盼望（国语）0030",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-盼望（国语）0030.mp3"
				},
				{
                "track": 38,
                "name": "邓丽君-珍惜（国语）0058",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-珍惜（国语）0058.mp3"
				},
				{
                "track": 37,
                "name": "邓丽君-爱雨（国语）0004",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-爱雨（国语）0004.mp3"
				},
				{
                "track": 36,
                "name": "邓丽君-爱慕（国语）0001",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-爱慕（国语）0001.mp3"
				},
				{
                "track": 35,
                "name": "邓丽君-爱情（国语）0002",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-爱情（国语）0002.mp3"
				},
				{
                "track": 34,
                "name": "邓丽君-爱人（国语）0003",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-爱人（国语）0003.mp3"
				},
				{
                "track": 33,
                "name": "邓丽君-海风（国语）0012",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-海风（国语）0012.mp3"
				},
				{
                "track": 32,
                "name": "邓丽君-海韵（国语-B版）0015",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-海韵（国语-B版）0015.mp3"
				},
				{
                "track": 31,
                "name": "邓丽君-海韵（国语-A版）0014",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-海韵（国语-A版）0014.mp3"
				},
				{
                "track": 30,
                "name": "邓丽君-海恋（国语）0013",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-海恋（国语）0013.mp3"
				},
				{
                "track": 29,
                "name": "邓丽君-梅花（国语）0025",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-梅花（国语）0025.mp3"
				},
				{
                "track": 28,
                "name": "邓丽君-晶晶（国语）0021",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-晶晶（国语）0021.mp3"
				},
				{
                "track": 27,
                "name": "邓丽君-是否（国语）0039",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-是否（国语）0039.mp3"
				},
				{
                "track": 26,
                "name": "邓丽君-春雷（国语）0009",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-春雷（国语）0009.mp3"
				},
				{
                "track": 25,
                "name": "邓丽君-无奈（国语）0049",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-无奈（国语）0049.mp3"
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