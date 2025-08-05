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
                "track": 84,
                "name": "BoA-HappyBirthday",
                "length": "4:46",
                "file": "韩国音乐/BoA-HappyBirthday.mp3"
				},
				{
                "track": 83,
                "name": "BoA-HappinessLies",
                "length": "4:46",
                "file": "韩国音乐/BoA-HappinessLies.mp3"
				},
				{
                "track": 82,
                "name": "BoA-Happiness",
                "length": "4:46",
                "file": "韩国音乐/BoA-Happiness.mp3"
				},
				{
                "track": 81,
                "name": "BoA-GreenLight",
                "length": "4:46",
                "file": "韩国音乐/BoA-GreenLight.mp3"
				},
				{
                "track": 80,
                "name": "BoA-Gravity",
                "length": "4:46",
                "file": "韩国音乐/BoA-Gravity.mp3"
				},
				{
                "track": 79,
                "name": "BoA-GraciousDays",
                "length": "4:46",
                "file": "韩国音乐/BoA-GraciousDays.mp3"
				},
				{
                "track": 78,
                "name": "BoA-GotMeGood",
                "length": "4:46",
                "file": "韩国音乐/BoA-GotMeGood.mp3"
				},
				{
                "track": 77,
                "name": "BoA-GirlsOnTop(KoreanVer.)",
                "length": "4:46",
                "file": "韩国音乐/BoA-GirlsOnTop(KoreanVer.).mp3"
				},
				{
                "track": 76,
                "name": "BoA-GardenInTheAir",
                "length": "4:46",
                "file": "韩国音乐/BoA-GardenInTheAir.mp3"
				},
				{
                "track": 75,
                "name": "BoA-Fox",
                "length": "4:46",
                "file": "韩国音乐/BoA-Fox.mp3"
				},
				{
                "track": 74,
                "name": "BoA-Flower",
                "length": "4:46",
                "file": "韩国音乐/BoA-Flower.mp3"
				},
				{
                "track": 73,
                "name": "BoA-FirstSnow",
                "length": "4:46",
                "file": "韩国音乐/BoA-FirstSnow.mp3"
				},
				{
                "track": 72,
                "name": "BoA-FeelTheSame",
                "length": "4:46",
                "file": "韩国音乐/BoA-FeelTheSame.mp3"
				},
				{
                "track": 71,
                "name": "BoA-FeelMe",
                "length": "4:46",
                "file": "韩国音乐/BoA-FeelMe.mp3"
				},
				{
                "track": 70,
                "name": "BoA-EverythingNeedsLove",
                "length": "4:46",
                "file": "韩国音乐/BoA-EverythingNeedsLove.mp3"
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