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
                "track": 876,
                "name": "819.TheTouchofEmotion",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/819.TheTouchofEmotion.mp3"
				},
				{
                "track": 875,
                "name": "818.StellarWind",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/818.StellarWind.mp3"
				},
				{
                "track": 874,
                "name": "817.TheStream",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/817.TheStream.mp3"
				},
				{
                "track": 873,
                "name": "816.HighAbovetheValley-",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/816.HighAbovetheValley-.mp3"
				},
				{
                "track": 872,
                "name": "815.PlanetGuardian",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/815.PlanetGuardian.mp3"
				},
				{
                "track": 871,
                "name": "814.GoldenEternity",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/814.GoldenEternity.mp3"
				},
				{
                "track": 870,
                "name": "813.BlueSky",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/813.BlueSky.mp3"
				},
				{
                "track": 869,
                "name": "812.Confidante",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/812.Confidante.mp3"
				},
				{
                "track": 868,
                "name": "811.HealingForTheSoul",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/811.HealingForTheSoul.mp3"
				},
				{
                "track": 867,
                "name": "810.Gentlyfalling",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/810.Gentlyfalling.mp3"
				},
				{
                "track": 866,
                "name": "809.TheFondDream",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/809.TheFondDream.mp3"
				},
				{
                "track": 865,
                "name": "808.Lightofthesoul",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/808.Lightofthesoul.mp3"
				},
				{
                "track": 864,
                "name": "807.Twilight",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/807.Twilight.mp3"
				},
				{
                "track": 863,
                "name": "806.Throughthetwilight",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/806.Throughthetwilight.mp3"
				},
				{
                "track": 862,
                "name": "805.SweetMemory",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/805.SweetMemory.mp3"
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