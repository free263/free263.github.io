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
                "track": 67,
                "name": "班得瑞-变幻之风",
                "length": "4:46",
                "file": "纯音乐/班得瑞-变幻之风.mp3"
				},
				{
                "track": 66,
                "name": "班得瑞-安妮的仙境",
                "length": "4:46",
                "file": "纯音乐/班得瑞-安妮的仙境.mp3"
				},
				{
                "track": 65,
                "name": "班得瑞-tim's lullaby",
                "length": "4:46",
                "file": "纯音乐/班得瑞-tim's lullaby.mp3"
				},
				{
                "track": 64,
                "name": "班得瑞-the sounds of silence",
                "length": "4:46",
                "file": "纯音乐/班得瑞-the sounds of silence.mp3"
				},
				{
                "track": 63,
                "name": "班得瑞-tenderness",
                "length": "4:46",
                "file": "纯音乐/班得瑞-tenderness.mp3"
				},
				{
                "track": 62,
                "name": "班得瑞-one moment in time",
                "length": "4:46",
                "file": "纯音乐/班得瑞-one moment in time.mp3"
				},
				{
                "track": 61,
                "name": "班得瑞-moment of fantasy",
                "length": "4:46",
                "file": "纯音乐/班得瑞-moment of fantasy.mp3"
				},
				{
                "track": 60,
                "name": "班得瑞-into red velvet",
                "length": "4:46",
                "file": "纯音乐/班得瑞-into red velvet.mp3"
				},
				{
                "track": 59,
                "name": "班得瑞-imagine",
                "length": "4:46",
                "file": "纯音乐/班得瑞-imagine.mp3"
				},
				{
                "track": 58,
                "name": "班得瑞-i_swear",
                "length": "4:46",
                "file": "纯音乐/班得瑞-i_swear.mp3"
				},
				{
                "track": 57,
                "name": "班得瑞-i want to know love is",
                "length": "4:46",
                "file": "纯音乐/班得瑞-i want to know love is.mp3"
				},
				{
                "track": 56,
                "name": "班得瑞-EI condor pasa",
                "length": "4:46",
                "file": "纯音乐/班得瑞-EI condor pasa.mp3"
				},
				{
                "track": 55,
                "name": "班得瑞-diamonds",
                "length": "4:46",
                "file": "纯音乐/班得瑞-diamonds.mp3"
				},
				{
                "track": 54,
                "name": "班得瑞-chariots of fire",
                "length": "4:46",
                "file": "纯音乐/班得瑞-chariots of fire.mp3"
				},
				{
                "track": 53,
                "name": "爱尔兰口哨女皇madden-爱尔兰画眉",
                "length": "4:46",
                "file": "纯音乐/爱尔兰口哨女皇madden-爱尔兰画眉.mp3"
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