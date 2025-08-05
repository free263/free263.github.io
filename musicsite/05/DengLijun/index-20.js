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
            mediaPath = 'https://vercel.11.wf/free163person/音乐视听/',
            extension = '',
            tracks = [
			
				{
                "track": 714,
                "name": "邓丽君-六月茉莉（闽南语）0706",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-六月茉莉（闽南语）0706.mp3"
				},
				{
                "track": 713,
                "name": "邓丽君-三声无奈（闽南语）0727",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-三声无奈（闽南语）0727.mp3"
				},
				{
                "track": 712,
                "name": "邓丽君-一颗流星（闽南语）0734",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-一颗流星（闽南语）0734.mp3"
				},
				{
                "track": 711,
                "name": "邓丽君-风霜伴我行（粤语）0687",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-风霜伴我行（粤语）0687.mp3"
				},
				{
                "track": 710,
                "name": "邓丽君-风霜伴我行（粤语-演唱会）0688",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-风霜伴我行（粤语-演唱会）0688.mp3"
				},
				{
                "track": 709,
                "name": "邓丽君-雪中情（粤语）0711",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-雪中情（粤语）0711.mp3"
				},
				{
                "track": 708,
                "name": "邓丽君-雪中情（粤语-演唱会）0712",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-雪中情（粤语-演唱会）0712.mp3"
				},
				{
                "track": 707,
                "name": "邓丽君-雨中追忆（粤语）0716",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-雨中追忆（粤语）0716.mp3"
				},
				{
                "track": 706,
                "name": "邓丽君-遇见旧情人（粤语）0717",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-遇见旧情人（粤语）0717.mp3"
				},
				{
                "track": 705,
                "name": "邓丽君-遇见你（粤语）0718",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-遇见你（粤语）0718.mp3"
				},
				{
                "track": 704,
                "name": "邓丽君-遇见你（粤语-演唱会）0719",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-遇见你（粤语-演唱会）0719.mp3"
				},
				{
                "track": 703,
                "name": "邓丽君-谁在改变（粤语）0695",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-谁在改变（粤语）0695.mp3"
				},
				{
                "track": 702,
                "name": "邓丽君-结识你那一天（粤语）0689",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-结识你那一天（粤语）0689.mp3"
				},
				{
                "track": 701,
                "name": "邓丽君-相思泪（粤语）0699",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-相思泪（粤语）0699.mp3"
				},
				{
                "track": 700,
                "name": "邓丽君-相思泪（粤语-清唱版）0700",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-相思泪（粤语-清唱版）0700.mp3"
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