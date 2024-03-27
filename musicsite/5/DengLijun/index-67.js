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
                "track": 9,
                "name": "邓丽君-夜雾（国语）0055",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-夜雾（国语）0055.mp3"
				},
				{
                "track": 8,
                "name": "邓丽君-喵咪（国语）0026",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-喵咪（国语）0026.mp3"
				},
				{
                "track": 7,
                "name": "邓丽君-别离（国语）0005",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-别离（国语）0005.mp3"
				},
				{
                "track": 6,
                "name": "邓丽君-凝望（国语）0029",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-凝望（国语）0029.mp3"
				},
				{
                "track": 5,
                "name": "邓丽君-偿还（国语）0006",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-偿还（国语）0006.mp3"
				},
				{
                "track": 4,
                "name": "邓丽君-今夜（国语）0020",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-今夜（国语）0020.mp3"
				},
				{
                "track": 3,
                "name": "邓丽君-云河（国语）0057",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-云河（国语）0057.mp3"
				},
				{
                "track": 2,
                "name": "邓丽君-乖乖（国语）0011",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-乖乖（国语）0011.mp3"
				},
				{
                "track": 1,
                "name": "邓丽君-三年（国语）0037",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-三年（国语）0037.mp3"
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