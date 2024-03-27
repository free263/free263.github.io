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
                "track": 459,
                "name": "邓丽君-相爱如往昔（国语）0445",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-相爱如往昔（国语）0445.mp3"
				},
				{
                "track": 458,
                "name": "邓丽君-相思在梦里（国语）0448",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-相思在梦里（国语）0448.mp3"
				},
				{
                "track": 457,
                "name": "邓丽君-疯狂的周末（国语）0320",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-疯狂的周末（国语）0320.mp3"
				},
				{
                "track": 456,
                "name": "邓丽君-留下我自己（国语）0365",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-留下我自己（国语）0365.mp3"
				},
				{
                "track": 455,
                "name": "邓丽君-甜蜜的漩涡（国语）0420",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-甜蜜的漩涡（国语）0420.mp3"
				},
				{
                "track": 454,
                "name": "邓丽君-甜蜜的小雨（国语）0419",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-甜蜜的小雨（国语）0419.mp3"
				},
				{
                "track": 453,
                "name": "邓丽君-珍重好年华（国语）0491",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-珍重好年华（国语）0491.mp3"
				},
				{
                "track": 452,
                "name": "邓丽君-玉兰花开时（国语）0480",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-玉兰花开时（国语）0480.mp3"
				},
				{
                "track": 451,
                "name": "邓丽君-猜不透的你（国语）0307",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-猜不透的你（国语）0307.mp3"
				},
				{
                "track": 450,
                "name": "邓丽君-爸爸爱妈妈（国语）0294",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-爸爸爱妈妈（国语）0294.mp3"
				},
				{
                "track": 449,
                "name": "邓丽君-爱情甜如蜜（国语）0287",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-爱情甜如蜜（国语）0287.mp3"
				},
				{
                "track": 448,
                "name": "邓丽君-爱情如风雨（国语）0286",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-爱情如风雨（国语）0286.mp3"
				},
				{
                "track": 447,
                "name": "邓丽君-爱情多美好（国语）0284",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-爱情多美好（国语）0284.mp3"
				},
				{
                "track": 446,
                "name": "邓丽君-爱情哪里来（国语）0285",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-爱情哪里来（国语）0285.mp3"
				},
				{
                "track": 445,
                "name": "邓丽君-爱情像气球（国语）0288",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-爱情像气球（国语）0288.mp3"
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