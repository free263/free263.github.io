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
                "track": 699,
                "name": "邓丽君-爱人女神（粤语-邓丽君-谭咏麟）0681",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-爱人女神（粤语-邓丽君-谭咏麟）0681.mp3"
				},
				{
                "track": 698,
                "name": "邓丽君-漫步人生路（粤语）0692",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-漫步人生路（粤语）0692.mp3"
				},
				{
                "track": 697,
                "name": "邓丽君-漫步人生路（粤语-演唱会）0693",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-漫步人生路（粤语-演唱会）0693.mp3"
				},
				{
                "track": 696,
                "name": "邓丽君-浪子心声（粤语）0691",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-浪子心声（粤语）0691.mp3"
				},
				{
                "track": 695,
                "name": "邓丽君-槟城艳（粤语）0682",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-槟城艳（粤语）0682.mp3"
				},
				{
                "track": 694,
                "name": "邓丽君-有谁知我此时情（粤语）0715",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-有谁知我此时情（粤语）0715.mp3"
				},
				{
                "track": 693,
                "name": "邓丽君-我要你（粤语）0709",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-我要你（粤语）0709.mp3"
				},
				{
                "track": 692,
                "name": "邓丽君-我心里边（粤语）0698",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-我心里边（粤语）0698.mp3"
				},
				{
                "track": 691,
                "name": "邓丽君-情话（粤语）0694",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-情话（粤语）0694.mp3"
				},
				{
                "track": 690,
                "name": "邓丽君-怎么开始（粤语）0720",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-怎么开始（粤语）0720.mp3"
				},
				{
                "track": 689,
                "name": "邓丽君-忘记他（粤语）0696",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-忘记他（粤语）0696.mp3"
				},
				{
                "track": 688,
                "name": "邓丽君-忘记他（粤语-演唱会）0697",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-忘记他（粤语-演唱会）0697.mp3"
				},
				{
                "track": 687,
                "name": "邓丽君-帝女花（粤语-演唱会）0684",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-帝女花（粤语-演唱会）0684.mp3"
				},
				{
                "track": 686,
                "name": "邓丽君-向日葵（粤语）0710",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-向日葵（粤语）0710.mp3"
				},
				{
                "track": 685,
                "name": "邓丽君-可否多见一眼（粤语）0690",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-可否多见一眼（粤语）0690.mp3"
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