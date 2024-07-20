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
                "track": 48,
                "name": "JustinBieber-Baby",
                "length": "4:46",
                "file": "欧美音乐/JustinBieber-Baby.mp3"
				},
				{
                "track": 47,
                "name": "Justin Bieber、Luis Fonsi、Daddy Yankee-Despacito(Remix)",
                "length": "4:46",
                "file": "欧美音乐/Justin Bieber、Luis Fonsi、Daddy Yankee-Despacito(Remix).mp3"
				},
				{
                "track": 46,
                "name": "hayleyWestenra-never say goodbye",
                "length": "4:46",
                "file": "欧美音乐/hayleyWestenra-never say goodbye.mp3"
				},
				{
                "track": 45,
                "name": "Hawk Nelson、Jonathan SteingardSold Out",
                "length": "4:46",
                "file": "欧美音乐/Hawk Nelson、Jonathan SteingardSold Out.mp3"
				},
				{
                "track": 44,
                "name": "GrooveCoverage-GodIsaGirl ",
                "length": "4:46",
                "file": "欧美音乐/GrooveCoverage-GodIsaGirl .mp3"
				},
				{
                "track": 43,
                "name": "GrooveCoverage-farAwayFromHome ",
                "length": "4:46",
                "file": "欧美音乐/GrooveCoverage-farAwayFromHome .mp3"
				},
				{
                "track": 42,
                "name": "Gabriel MarianIts My Life",
                "length": "4:46",
                "file": "欧美音乐/Gabriel MarianIts My Life.mp3"
				},
				{
                "track": 41,
                "name": "EraThe Mass",
                "length": "4:46",
                "file": "欧美音乐/EraThe Mass.mp3"
				},
				{
                "track": 40,
                "name": "enya-Only_Time",
                "length": "4:46",
                "file": "欧美音乐/enya-Only_Time.mp3"
				},
				{
                "track": 39,
                "name": "Enya-May It Be",
                "length": "4:46",
                "file": "欧美音乐/Enya-May It Be.mp3"
				},
				{
                "track": 38,
                "name": "Eminem、Rihanna-LoveTheWayYouLie",
                "length": "4:46",
                "file": "欧美音乐/Eminem、Rihanna-LoveTheWayYouLie.mp3"
				},
				{
                "track": 37,
                "name": "emilia-big_big_world",
                "length": "4:46",
                "file": "欧美音乐/emilia-big_big_world.mp3"
				},
				{
                "track": 36,
                "name": "EdSheeran-ShapeOfYou",
                "length": "4:46",
                "file": "欧美音乐/EdSheeran-ShapeOfYou.mp3"
				},
				{
                "track": 35,
                "name": "djokawari-luv_letter",
                "length": "4:46",
                "file": "欧美音乐/djokawari-luv_letter.mp3"
				},
				{
                "track": 34,
                "name": "DemiLovato-LetItGo",
                "length": "4:46",
                "file": "欧美音乐/DemiLovato-LetItGo.mp3"
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