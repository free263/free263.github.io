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
                "track": 84,
                "name": "邓丽君-小木马（国语）0124",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-小木马（国语）0124.mp3"
				},
				{
                "track": 83,
                "name": "邓丽君-小放牛（国语）0121",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-小放牛（国语）0121.mp3"
				},
				{
                "track": 82,
                "name": "邓丽君-小乖乖（国语）0122",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-小乖乖（国语）0122.mp3"
				},
				{
                "track": 81,
                "name": "邓丽君-寻梦园（国语）0129",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-寻梦园（国语）0129.mp3"
				},
				{
                "track": 80,
                "name": "邓丽君-孤雏泪（国语）0066",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-孤雏泪（国语）0066.mp3"
				},
				{
                "track": 79,
                "name": "邓丽君-孤儿泪（国语）0067",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-孤儿泪（国语）0067.mp3"
				},
				{
                "track": 78,
                "name": "邓丽君-妈妈好（国语）0080",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-妈妈好（国语）0080.mp3"
				},
				{
                "track": 77,
                "name": "邓丽君-好预兆（国语）0069",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-好预兆（国语）0069.mp3"
				},
				{
                "track": 76,
                "name": "邓丽君-女儿圈（国语）0086",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-女儿圈（国语）0086.mp3"
				},
				{
                "track": 75,
                "name": "邓丽君-夜来香（演唱会）0132",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-夜来香（演唱会）0132.mp3"
				},
				{
                "track": 74,
                "name": "邓丽君-夜来香（国语）0131",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-夜来香（国语）0131.mp3"
				},
				{
                "track": 73,
                "name": "邓丽君-多甜蜜（国语）0064",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-多甜蜜（国语）0064.mp3"
				},
				{
                "track": 72,
                "name": "邓丽君-噢琳达（国语）0087",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-噢琳达（国语）0087.mp3"
				},
				{
                "track": 71,
                "name": "邓丽君-嘿！娃娃（国语）0070",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-嘿！娃娃（国语）0070.mp3"
				},
				{
                "track": 70,
                "name": "邓丽君-向日葵（国语）0120",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-向日葵（国语）0120.mp3"
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