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
                "track": 249,
                "name": "邓丽君-百鸟朝凤（国语）0153",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-百鸟朝凤（国语）0153.mp3"
				},
				{
                "track": 248,
                "name": "邓丽君-畅饮一杯（国语）0160",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-畅饮一杯（国语）0160.mp3"
				},
				{
                "track": 247,
                "name": "邓丽君-玫瑰姑娘（国语）0190",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-玫瑰姑娘（国语）0190.mp3"
				},
				{
                "track": 246,
                "name": "邓丽君-玉女之歌（国语-老唱片珍藏）0265",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-玉女之歌（国语-老唱片珍藏）0265.mp3"
				},
				{
                "track": 245,
                "name": "邓丽君-独上西楼（国语）0163",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-独上西楼（国语）0163.mp3"
				},
				{
                "track": 244,
                "name": "邓丽君-爱的箴言（国语）0151",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-爱的箴言（国语）0151.mp3"
				},
				{
                "track": 243,
                "name": "邓丽君-爱的秘密（混音版）0148",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-爱的秘密（混音版）0148.mp3"
				},
				{
                "track": 242,
                "name": "邓丽君-爱的秘密（国语）0147",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-爱的秘密（国语）0147.mp3"
				},
				{
                "track": 241,
                "name": "邓丽君-爱的理想（国语）0146",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-爱的理想（国语）0146.mp3"
				},
				{
                "track": 240,
                "name": "邓丽君-爱的歌声（国语）0142",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-爱的歌声（国语）0142.mp3"
				},
				{
                "track": 239,
                "name": "邓丽君-爱的播种（国语）0141",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-爱的播种（国语）0141.mp3"
				},
				{
                "track": 238,
                "name": "邓丽君-爱的开始（国语）0145",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-爱的开始（国语）0145.mp3"
				},
				{
                "track": 237,
                "name": "邓丽君-爱的寂寞（国语）0144",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-爱的寂寞（国语）0144.mp3"
				},
				{
                "track": 236,
                "name": "邓丽君-爱的季节（国语）0143",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-爱的季节（国语）0143.mp3"
				},
				{
                "track": 235,
                "name": "邓丽君-爱的使者（国语）0149",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-爱的使者（国语）0149.mp3"
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