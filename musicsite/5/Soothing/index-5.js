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
                "track": 996,
                "name": "939.Numinous",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/939.Numinous.mp3"
				},
				{
                "track": 995,
                "name": "938.Ariana",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/938.Ariana.mp3"
				},
				{
                "track": 994,
                "name": "937.ForgottenSong",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/937.ForgottenSong.mp3"
				},
				{
                "track": 993,
                "name": "936.Petaloutha",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/936.Petaloutha.mp3"
				},
				{
                "track": 992,
                "name": "935.Mythos",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/935.Mythos.mp3"
				},
				{
                "track": 991,
                "name": "934.CirculiodeAmor",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/934.CirculiodeAmor.mp3"
				},
				{
                "track": 990,
                "name": "933.TheCalling",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/933.TheCalling.mp3"
				},
				{
                "track": 989,
                "name": "932.Psiliamo",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/932.Psiliamo.mp3"
				},
				{
                "track": 988,
                "name": "931.Eternia",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/931.Eternia.mp3"
				},
				{
                "track": 987,
                "name": "930.IntotheSea",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/930.IntotheSea.mp3"
				},
				{
                "track": 986,
                "name": "929.FlickerofaFlame",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/929.FlickerofaFlame.mp3"
				},
				{
                "track": 985,
                "name": "928.BlueNight",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/928.BlueNight.mp3"
				},
				{
                "track": 984,
                "name": "927.Angelos",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/927.Angelos.mp3"
				},
				{
                "track": 983,
                "name": "926.Illuminati",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/926.Illuminati.mp3"
				},
				{
                "track": 982,
                "name": "925.Spiritus",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/925.Spiritus.mp3"
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