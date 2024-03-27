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
                "track": 639,
                "name": "邓丽君-谁能禁止我的爱（国语）0609",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-谁能禁止我的爱（国语）0609.mp3"
				},
				{
                "track": 638,
                "name": "邓丽君-谁有我的情意长（国语）0601",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-谁有我的情意长（国语）0601.mp3"
				},
				{
                "track": 637,
                "name": "邓丽君-让我慢慢告诉你（国语）0603",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-让我慢慢告诉你（国语）0603.mp3"
				},
				{
                "track": 636,
                "name": "邓丽君-要去遥远的地方（国语）0634",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-要去遥远的地方（国语）0634.mp3"
				},
				{
                "track": 635,
                "name": "邓丽君-蔓莉蔓莉我爱你（国语）0590",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-蔓莉蔓莉我爱你（国语）0590.mp3"
				},
				{
                "track": 634,
                "name": "邓丽君-花前月下独徘徊（国语）0579",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-花前月下独徘徊（国语）0579.mp3"
				},
				{
                "track": 633,
                "name": "邓丽君-脸儿微笑梦儿香（国语）0586",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-脸儿微笑梦儿香（国语）0586.mp3"
				},
				{
                "track": 632,
                "name": "邓丽君-爱的你呀何处寻（国语A）0562",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-爱的你呀何处寻（国语A）0562.mp3"
				},
				{
                "track": 631,
                "name": "邓丽君-爱我象爱花一样（国语）0565",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-爱我象爱花一样（国语）0565.mp3"
				},
				{
                "track": 630,
                "name": "邓丽君-爱你永远不恨你（国语）0563",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-爱你永远不恨你（国语）0563.mp3"
				},
				{
                "track": 629,
                "name": "邓丽君-爱人是个多情人（国语）0564",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-爱人是个多情人（国语）0564.mp3"
				},
				{
                "track": 628,
                "name": "邓丽君-江水要比河水长（国语）0581",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-江水要比河水长（国语）0581.mp3"
				},
				{
                "track": 627,
                "name": "邓丽君-江水悠悠泪长流（国语）0582",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-江水悠悠泪长流（国语）0582.mp3"
				},
				{
                "track": 626,
                "name": "邓丽君-永远是个小娃娃（国语）0651",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-永远是个小娃娃（国语）0651.mp3"
				},
				{
                "track": 625,
                "name": "邓丽君-桃花开在春风里（国语）0612",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-桃花开在春风里（国语）0612.mp3"
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