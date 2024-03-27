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
                "track": 654,
                "name": "邓丽君-快走到我的面前来（国语）0642",
                "length": "4:46",
                "file": "邓丽君1000首/07-邓丽君影音珍藏（8字国语）/邓丽君-快走到我的面前来（国语）0642.mp3"
				},
				{
                "track": 653,
                "name": "邓丽君-妈妈送我一个吉他（国语）0646",
                "length": "4:46",
                "file": "邓丽君1000首/07-邓丽君影音珍藏（8字国语）/邓丽君-妈妈送我一个吉他（国语）0646.mp3"
				},
				{
                "track": 652,
                "name": "邓丽君-妈妈我是个好娃娃（国语）0647",
                "length": "4:46",
                "file": "邓丽君1000首/07-邓丽君影音珍藏（8字国语）/邓丽君-妈妈我是个好娃娃（国语）0647.mp3"
				},
				{
                "track": 651,
                "name": "邓丽君-如果你喜欢这首歌（国语）0648",
                "length": "4:46",
                "file": "邓丽君1000首/07-邓丽君影音珍藏（8字国语）/邓丽君-如果你喜欢这首歌（国语）0648.mp3"
				},
				{
                "track": 650,
                "name": "邓丽君-为什么你会有烦恼（国语）0649",
                "length": "4:46",
                "file": "邓丽君1000首/07-邓丽君影音珍藏（8字国语）/邓丽君-为什么你会有烦恼（国语）0649.mp3"
				},
				{
                "track": 649,
                "name": "邓丽君-青山绿水我和你（国语）0600",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-青山绿水我和你（国语）0600.mp3"
				},
				{
                "track": 648,
                "name": "邓丽君-雨中的点点滴滴（国语）0653",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-雨中的点点滴滴（国语）0653.mp3"
				},
				{
                "track": 647,
                "name": "邓丽君-难忘的初恋情人（演唱会）0594",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-难忘的初恋情人（演唱会）0594.mp3"
				},
				{
                "track": 646,
                "name": "邓丽君-难忘的初恋情人（国语）0593",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-难忘的初恋情人（国语）0593.mp3"
				},
				{
                "track": 645,
                "name": "邓丽君-问世间情是何物（国语）0618",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-问世间情是何物（国语）0618.mp3"
				},
				{
                "track": 644,
                "name": "邓丽君-那天晚上遇见你（国语）0592",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-那天晚上遇见你（国语）0592.mp3"
				},
				{
                "track": 643,
                "name": "邓丽君-这里只有我们俩（国语）0658",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-这里只有我们俩（国语）0658.mp3"
				},
				{
                "track": 642,
                "name": "邓丽君-走遍天下无忧愁（国语）0660",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-走遍天下无忧愁（国语）0660.mp3"
				},
				{
                "track": 641,
                "name": "邓丽君-谢谢你常记得我（演唱会）0631",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-谢谢你常记得我（演唱会）0631.mp3"
				},
				{
                "track": 640,
                "name": "邓丽君-谢谢你常记得我（国语）0630",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-谢谢你常记得我（国语）0630.mp3"
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