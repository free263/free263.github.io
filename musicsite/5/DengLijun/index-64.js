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
                "track": 54,
                "name": "邓丽君-万花筒（国语）0108",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-万花筒（国语）0108.mp3"
				},
				{
                "track": 53,
                "name": "邓丽君-万年红（国语）0109",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-万年红（国语）0109.mp3"
				},
				{
                "track": 52,
                "name": "邓丽君-郊道（国语）0019",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-郊道（国语）0019.mp3"
				},
				{
                "track": 51,
                "name": "邓丽君-遗忘（国语）0056",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-遗忘（国语）0056.mp3"
				},
				{
                "track": 50,
                "name": "邓丽君-追梦（国语）0060",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-追梦（国语）0060.mp3"
				},
				{
                "track": 49,
                "name": "邓丽君-轻风（国语）0032",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-轻风（国语）0032.mp3"
				},
				{
                "track": 48,
                "name": "邓丽君-诗意（国语）0038",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-诗意（国语）0038.mp3"
				},
				{
                "track": 47,
                "name": "邓丽君-良夜（国语）0023",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-良夜（国语）0023.mp3"
				},
				{
                "track": 46,
                "name": "邓丽君-船歌（国语）0007",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-船歌（国语）0007.mp3"
				},
				{
                "track": 45,
                "name": "邓丽君-红豆（国语-舞曲版）0017",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-红豆（国语-舞曲版）0017.mp3"
				},
				{
                "track": 44,
                "name": "邓丽君-红豆（国语-普通版）0016",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-红豆（国语-普通版）0016.mp3"
				},
				{
                "track": 43,
                "name": "邓丽君-竹舞（国语）0059",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-竹舞（国语）0059.mp3"
				},
				{
                "track": 42,
                "name": "邓丽君-窗外（国语）0008",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-窗外（国语）0008.mp3"
				},
				{
                "track": 41,
                "name": "邓丽君-秋光（国语）0036",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-秋光（国语）0036.mp3"
				},
				{
                "track": 40,
                "name": "邓丽君-祈望（国语）0031",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-祈望（国语）0031.mp3"
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