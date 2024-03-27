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
                "track": 36,
                "name": "036.AngelsSpeak",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/036.AngelsSpeak.mp3"
				},
				{
                "track": 35,
                "name": "035.Whist",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/035.Whist.mp3"
				},
				{
                "track": 34,
                "name": "034.Itstimeforthemtorise",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/034.Itstimeforthemtorise.mp3"
				},
				{
                "track": 33,
                "name": "033.Tobeawildflower",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/033.Tobeawildflower.mp3"
				},
				{
                "track": 32,
                "name": "032.Outof",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/032.Outof.mp3"
				},
				{
                "track": 31,
                "name": "031.FindEcstasyinLife",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/031.FindEcstasyinLife.mp3"
				},
				{
                "track": 30,
                "name": "030.Themooninthesilverbag",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/030.Themooninthesilverbag.mp3"
				},
				{
                "track": 29,
                "name": "029.Chaseyourstars",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/029.Chaseyourstars.mp3"
				},
				{
                "track": 28,
                "name": "028.Burn",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/028.Burn.mp3"
				},
				{
                "track": 27,
                "name": "027.Echo",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/027.Echo.mp3"
				},
				{
                "track": 26,
                "name": "026.AsTheMoonlightShines",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/026.AsTheMoonlightShines.mp3"
				},
				{
                "track": 25,
                "name": "025.SquirrelforaDay",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/025.SquirrelforaDay.mp3"
				},
				{
                "track": 24,
                "name": "024.MoonPhases",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/024.MoonPhases.mp3"
				},
				{
                "track": 23,
                "name": "023.TheArrival",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/023.TheArrival.mp3"
				},
				{
                "track": 22,
                "name": "022.ThingWithFeathers",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/022.ThingWithFeathers.mp3"
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