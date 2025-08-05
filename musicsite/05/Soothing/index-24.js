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
                "track": 711,
                "name": "654.Sentimental",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/654.Sentimental.mp3"
				},
				{
                "track": 710,
                "name": "653.Sunnyrainyday",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/653.Sunnyrainyday.mp3"
				},
				{
                "track": 709,
                "name": "652.Thedaytolovesomeone",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/652.Thedaytolovesomeone.mp3"
				},
				{
                "track": 708,
                "name": "651.Square",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/651.Square.mp3"
				},
				{
                "track": 707,
                "name": "650.Behappynomatterwhat",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/650.Behappynomatterwhat.mp3"
				},
				{
                "track": 706,
                "name": "649.Dontstuckon",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/649.Dontstuckon.mp3"
				},
				{
                "track": 705,
                "name": "648.Remind",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/648.Remind.mp3"
				},
				{
                "track": 704,
                "name": "647.Eleven",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/647.Eleven.mp3"
				},
				{
                "track": 703,
                "name": "646.Heartofmagic",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/646.Heartofmagic.mp3"
				},
				{
                "track": 702,
                "name": "645.Likethestar",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/645.Likethestar.mp3"
				},
				{
                "track": 701,
                "name": "644.Passingbylikethewind",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/644.Passingbylikethewind.mp3"
				},
				{
                "track": 700,
                "name": "643.Certainlineofsomething",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/643.Certainlineofsomething.mp3"
				},
				{
                "track": 699,
                "name": "642.Althoughtheworldissick",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/642.Althoughtheworldissick.mp3"
				},
				{
                "track": 698,
                "name": "641.Flussoeriflusso",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/641.Flussoeriflusso.mp3"
				},
				{
                "track": 697,
                "name": "640.Couleur",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/640.Couleur.mp3"
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