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
                "track": 936,
                "name": "879.DoedensEvigeKall",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/879.DoedensEvigeKall.mp3"
				},
				{
                "track": 935,
                "name": "878.ThroughtheArbor",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/878.ThroughtheArbor.mp3"
				},
				{
                "track": 934,
                "name": "877.SundialDreams",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/877.SundialDreams.mp3"
				},
				{
                "track": 933,
                "name": "876.TheEnchantedGarden",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/876.TheEnchantedGarden.mp3"
				},
				{
                "track": 932,
                "name": "875.Butterfly",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/875.Butterfly.mp3"
				},
				{
                "track": 931,
                "name": "874.StrawHats-KevinKern",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/874.StrawHats-KevinKern.mp3"
				},
				{
                "track": 930,
                "name": "873.AnotherRealm",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/873.AnotherRealm.mp3"
				},
				{
                "track": 929,
                "name": "872.WaterLilies",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/872.WaterLilies.mp3"
				},
				{
                "track": 928,
                "name": "871.FairyWings",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/871.FairyWings.mp3"
				},
				{
                "track": 927,
                "name": "870.PaperClouds",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/870.PaperClouds.mp3"
				},
				{
                "track": 926,
                "name": "869.AftertheRain",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/869.AftertheRain.mp3"
				},
				{
                "track": 925,
                "name": "868.WeAllFallinLoveSometime",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/868.WeAllFallinLoveSometime.mp3"
				},
				{
                "track": 924,
                "name": "867.LovesFirstSmile",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/867.LovesFirstSmile.mp3"
				},
				{
                "track": 923,
                "name": "866.TomorrowsPromise",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/866.TomorrowsPromise.mp3"
				},
				{
                "track": 922,
                "name": "865.ToSleeponAngelsWings",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/865.ToSleeponAngelsWings.mp3"
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