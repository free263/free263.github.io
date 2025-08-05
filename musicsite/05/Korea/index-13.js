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
                "track": 99,
                "name": "BoA-KeyOfHeart",
                "length": "4:46",
                "file": "韩国音乐/BoA-KeyOfHeart.mp3"
				},
				{
                "track": 98,
                "name": "BoA-JoyfulSmile",
                "length": "4:46",
                "file": "韩国音乐/BoA-JoyfulSmile.mp3"
				},
				{
                "track": 97,
                "name": "BoA-JewelSong",
                "length": "4:46",
                "file": "韩国音乐/BoA-JewelSong.mp3"
				},
				{
                "track": 96,
                "name": "BoA-ISpy",
                "length": "4:46",
                "file": "韩国音乐/BoA-ISpy.mp3"
				},
				{
                "track": 95,
                "name": "BoA-ImYourLadyTonight",
                "length": "4:46",
                "file": "韩国音乐/BoA-ImYourLadyTonight.mp3"
				},
				{
                "track": 94,
                "name": "BoA-ImSorry",
                "length": "4:46",
                "file": "韩国音乐/BoA-ImSorry.mp3"
				},
				{
                "track": 93,
                "name": "BoA-IdPeaceB",
                "length": "4:46",
                "file": "韩国音乐/BoA-IdPeaceB.mp3"
				},
				{
                "track": 92,
                "name": "BoA-IdPeaceB(EnglishVersion)",
                "length": "4:46",
                "file": "韩国音乐/BoA-IdPeaceB(EnglishVersion).mp3"
				},
				{
                "track": 91,
                "name": "BoA-IDontMind",
                "length": "4:46",
                "file": "韩国音乐/BoA-IDontMind.mp3"
				},
				{
                "track": 90,
                "name": "BoA-Ibelieve",
                "length": "4:46",
                "file": "韩国音乐/BoA-Ibelieve.mp3"
				},
				{
                "track": 89,
                "name": "BoA-HypnoticDancefloor",
                "length": "4:46",
                "file": "韩国音乐/BoA-HypnoticDancefloor.mp3"
				},
				{
                "track": 88,
                "name": "BoA-HurricanVenus",
                "length": "4:46",
                "file": "韩国音乐/BoA-HurricanVenus.mp3"
				},
				{
                "track": 87,
                "name": "BoA-HurricaneVenus",
                "length": "4:46",
                "file": "韩国音乐/BoA-HurricaneVenus.mp3"
				},
				{
                "track": 86,
                "name": "BoA-HoneyDiamonds",
                "length": "4:46",
                "file": "韩国音乐/BoA-HoneyDiamonds.mp3"
				},
				{
                "track": 85,
                "name": "BoA-Heroine(Bo)",
                "length": "4:46",
                "file": "韩国音乐/BoA-Heroine(Bo).mp3"
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