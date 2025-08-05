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
                "track": 126,
                "name": "1023.夜桜~yozakura~",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1023.夜桜~yozakura~.mp3"
				},
				{
                "track": 125,
                "name": "1022.LokahSamastaSukhinoBhavantu",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1022.LokahSamastaSukhinoBhavantu.mp3"
				},
				{
                "track": 124,
                "name": "1021.Air",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1021.Air.mp3"
				},
				{
                "track": 123,
                "name": "1020.GoddessRising",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1020.GoddessRising.mp3"
				},
				{
                "track": 122,
                "name": "102.Youaresafehere",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/102.Youaresafehere.mp3"
				},
				{
                "track": 121,
                "name": "1019.ISurrender",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1019.ISurrender.mp3"
				},
				{
                "track": 120,
                "name": "1018.WhenWitchesCry",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1018.WhenWitchesCry.mp3"
				},
				{
                "track": 119,
                "name": "1017.Divine",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1017.Divine.mp3"
				},
				{
                "track": 118,
                "name": "1016.Escape",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1016.Escape.mp3"
				},
				{
                "track": 117,
                "name": "1015.Astral",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1015.Astral.mp3"
				},
				{
                "track": 116,
                "name": "1014.StarSeed",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1014.StarSeed.mp3"
				},
				{
                "track": 115,
                "name": "1013.CastingouttheDarkness",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1013.CastingouttheDarkness.mp3"
				},
				{
                "track": 114,
                "name": "1012.11-11",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1012.11-11.mp3"
				},
				{
                "track": 113,
                "name": "1011.MilesInside",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1011.MilesInside.mp3"
				},
				{
                "track": 112,
                "name": "1010.autumn",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/1010.autumn.mp3"
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