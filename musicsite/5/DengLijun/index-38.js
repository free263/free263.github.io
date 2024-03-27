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
                "track": 444,
                "name": "邓丽君-爱情与同情（国语）0289",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-爱情与同情（国语）0289.mp3"
				},
				{
                "track": 443,
                "name": "邓丽君-爱情123（国语）0283",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-爱情123（国语）0283.mp3"
				},
				{
                "track": 442,
                "name": "邓丽君-爱在我心中（国语）0293",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-爱在我心中（国语）0293.mp3"
				},
				{
                "track": 441,
                "name": "邓丽君-爱像一首歌（国语）0291",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-爱像一首歌（国语）0291.mp3"
				},
				{
                "track": 440,
                "name": "邓丽君-爱像一首歌（国语-演唱会）0292",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-爱像一首歌（国语-演唱会）0292.mp3"
				},
				{
                "track": 439,
                "name": "邓丽君-爱你爱到老（国语）0281",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-爱你爱到老（国语）0281.mp3"
				},
				{
                "track": 438,
                "name": "邓丽君-爱你一万倍（国语）0282",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-爱你一万倍（国语）0282.mp3"
				},
				{
                "track": 437,
                "name": "邓丽君-爱人就是我（国语）0290",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-爱人就是我（国语）0290.mp3"
				},
				{
                "track": 436,
                "name": "邓丽君-热情的花朵（国语）0397",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-热情的花朵（国语）0397.mp3"
				},
				{
                "track": 435,
                "name": "邓丽君-热情的月亮（国语）0398",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-热情的月亮（国语）0398.mp3"
				},
				{
                "track": 434,
                "name": "邓丽君-温情满人间（国语）0436",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-温情满人间（国语）0436.mp3"
				},
				{
                "track": 433,
                "name": "邓丽君-没良心的人（国语）0367",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-没良心的人（国语）0367.mp3"
				},
				{
                "track": 432,
                "name": "邓丽君-梦向何处寻（国语）0370",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-梦向何处寻（国语）0370.mp3"
				},
				{
                "track": 431,
                "name": "邓丽君-来电是有缘（国语）0362",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-来电是有缘（国语）0362.mp3"
				},
				{
                "track": 430,
                "name": "邓丽君-有谁知道我（国语）0475",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-有谁知道我（国语）0475.mp3"
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