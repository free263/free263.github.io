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
                "track": 951,
                "name": "894.Recuerdoinfantil-BosquesdemiMente",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/894.Recuerdoinfantil-BosquesdemiMente.mp3"
				},
				{
                "track": 950,
                "name": "893.Volandoentutrendejuguete-BosquesdemiMente",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/893.Volandoentutrendejuguete-BosquesdemiMente.mp3"
				},
				{
                "track": 949,
                "name": "892.Tortugasdearena-BosquesdemiMente",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/892.Tortugasdearena-BosquesdemiMente.mp3"
				},
				{
                "track": 948,
                "name": "891.LifeinSlowMotion-CircadianEyes",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/891.LifeinSlowMotion-CircadianEyes.mp3"
				},
				{
                "track": 947,
                "name": "890.MilesAwaySheSleeps-CircadianEyes",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/890.MilesAwaySheSleeps-CircadianEyes.mp3"
				},
				{
                "track": 946,
                "name": "889.Goodbye-CircadianEyes",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/889.Goodbye-CircadianEyes.mp3"
				},
				{
                "track": 945,
                "name": "888.Astronauts-CircadianEyes",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/888.Astronauts-CircadianEyes.mp3"
				},
				{
                "track": 944,
                "name": "887.AllthePeopleYoullNeverKnow",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/887.AllthePeopleYoullNeverKnow.mp3"
				},
				{
                "track": 943,
                "name": "886.WeFeltTimePass",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/886.WeFeltTimePass.mp3"
				},
				{
                "track": 942,
                "name": "885.NaarVindenGraater...",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/885.NaarVindenGraater....mp3"
				},
				{
                "track": 941,
                "name": "884.DyptInneISkogen",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/884.DyptInneISkogen.mp3"
				},
				{
                "track": 940,
                "name": "883.EtEnsomtMinne",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/883.EtEnsomtMinne.mp3"
				},
				{
                "track": 939,
                "name": "882.Lengsel",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/882.Lengsel.mp3"
				},
				{
                "track": 938,
                "name": "881.Sorg",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/881.Sorg.mp3"
				},
				{
                "track": 937,
                "name": "880.HerUteIMoerket",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/880.HerUteIMoerket.mp3"
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