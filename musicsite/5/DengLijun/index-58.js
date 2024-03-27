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
                "track": 144,
                "name": "邓丽君-不着痕迹（国语）0157",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-不着痕迹（国语）0157.mp3"
				},
				{
                "track": 143,
                "name": "邓丽君-一见钟情（国语）0254",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-一见钟情（国语）0254.mp3"
				},
				{
                "track": 142,
                "name": "邓丽君-一片落叶（国语）0255",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-一片落叶（国语）0255.mp3"
				},
				{
                "track": 141,
                "name": "邓丽君-一封情书（国语）0253",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-一封情书（国语）0253.mp3"
				},
				{
                "track": 140,
                "name": "邓丽君-一吻定情（国语）0257",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-一吻定情（国语）0257.mp3"
				},
				{
                "track": 139,
                "name": "邓丽君-黄昏里（国语）0073",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-黄昏里（国语）0073.mp3"
				},
				{
                "track": 138,
                "name": "邓丽君-高山青（国语）0065",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-高山青（国语）0065.mp3"
				},
				{
                "track": 137,
                "name": "邓丽君-静心等（国语）0076",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-静心等（国语）0076.mp3"
				},
				{
                "track": 136,
                "name": "邓丽君-青春乐(国语）0088",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-青春乐(国语）0088.mp3"
				},
				{
                "track": 135,
                "name": "邓丽君-露珠儿（国语）0079",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-露珠儿（国语）0079.mp3"
				},
				{
                "track": 134,
                "name": "邓丽君-雪里红（国语）0127",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-雪里红（国语）0127.mp3"
				},
				{
                "track": 133,
                "name": "邓丽君-雪中莲（国语）0128",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-雪中莲（国语）0128.mp3"
				},
				{
                "track": 132,
                "name": "邓丽君-问自己（国语）0115",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-问自己（国语）0115.mp3"
				},
				{
                "track": 131,
                "name": "邓丽君-问彩霞（国语）0114",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-问彩霞（国语）0114.mp3"
				},
				{
                "track": 130,
                "name": "邓丽君-长城谣（国语）0138",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-长城谣（国语）0138.mp3"
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