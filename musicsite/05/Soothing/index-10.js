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
                "track": 921,
                "name": "864.TouchtheSky",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/864.TouchtheSky.mp3"
				},
				{
                "track": 920,
                "name": "863.Passages",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/863.Passages.mp3"
				},
				{
                "track": 919,
                "name": "862.TwirlinginTime",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/862.TwirlinginTime.mp3"
				},
				{
                "track": 918,
                "name": "861.DanceoftheSearchingSouls",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/861.DanceoftheSearchingSouls.mp3"
				},
				{
                "track": 917,
                "name": "860.EmeraldLegacy",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/860.EmeraldLegacy.mp3"
				},
				{
                "track": 916,
                "name": "859.InMyLife",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/859.InMyLife.mp3"
				},
				{
                "track": 915,
                "name": "858.BeyondtheSundial",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/858.BeyondtheSundial.mp3"
				},
				{
                "track": 914,
                "name": "857.ThreadsofLight",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/857.ThreadsofLight.mp3"
				},
				{
                "track": 913,
                "name": "856.WherePathsMeet",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/856.WherePathsMeet.mp3"
				},
				{
                "track": 912,
                "name": "855.AFlurryofGoldenLeaves",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/855.AFlurryofGoldenLeaves.mp3"
				},
				{
                "track": 911,
                "name": "854.KristensSerenade",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/854.KristensSerenade.mp3"
				},
				{
                "track": 910,
                "name": "853.ATimeRemembered",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/853.ATimeRemembered.mp3"
				},
				{
                "track": 909,
                "name": "852.ADistantShadeofGreen",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/852.ADistantShadeofGreen.mp3"
				},
				{
                "track": 908,
                "name": "851.IntotheRealm",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/851.IntotheRealm.mp3"
				},
				{
                "track": 907,
                "name": "850.SundialAwakening",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/850.SundialAwakening.mp3"
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