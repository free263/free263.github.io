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
                "track": 33,
                "name": "Daniel PowterFree Loop",
                "length": "4:46",
                "file": "欧美音乐/Daniel PowterFree Loop.mp3"
				},
				{
                "track": 32,
                "name": "ColdplayYellow",
                "length": "4:46",
                "file": "欧美音乐/ColdplayYellow.mp3"
				},
				{
                "track": 31,
                "name": "ChrisMedina-WhatAreWords",
                "length": "4:46",
                "file": "欧美音乐/ChrisMedina-WhatAreWords.mp3"
				},
				{
                "track": 30,
                "name": "CaraDillon-Craigie_Hill",
                "length": "4:46",
                "file": "欧美音乐/CaraDillon-Craigie_Hill.mp3"
				},
				{
                "track": 29,
                "name": "BrunoMars-MarryYou",
                "length": "4:46",
                "file": "欧美音乐/BrunoMars-MarryYou.mp3"
				},
				{
                "track": 28,
                "name": "BertieHiggins-KeyLargo",
                "length": "4:46",
                "file": "欧美音乐/BertieHiggins-KeyLargo.mp3"
				},
				{
                "track": 27,
                "name": "BertieHiggins-Casablanca",
                "length": "4:46",
                "file": "欧美音乐/BertieHiggins-Casablanca.mp3"
				},
				{
                "track": 26,
                "name": "BackstreetBoys-As_Long_As_You_Love_M",
                "length": "4:46",
                "file": "欧美音乐/BackstreetBoys-As_Long_As_You_Love_M.mp3"
				},
				{
                "track": 25,
                "name": "Backstreet Boysi want it that way",
                "length": "4:46",
                "file": "欧美音乐/Backstreet Boysi want it that way.mp3"
				},
				{
                "track": 24,
                "name": "Backstreet BoysEverybody",
                "length": "4:46",
                "file": "欧美音乐/Backstreet BoysEverybody.mp3"
				},
				{
                "track": 23,
                "name": "AvrilLavigne-WishYouWereHere",
                "length": "4:46",
                "file": "欧美音乐/AvrilLavigne-WishYouWereHere.mp3"
				},
				{
                "track": 22,
                "name": "AvrilLavigne-RocknRoll",
                "length": "4:46",
                "file": "欧美音乐/AvrilLavigne-RocknRoll.mp3"
				},
				{
                "track": 21,
                "name": "AvrilLavigne-NobodysHome",
                "length": "4:46",
                "file": "欧美音乐/AvrilLavigne-NobodysHome.mp3"
				},
				{
                "track": 20,
                "name": "AvrilLavigne-Innocence",
                "length": "4:46",
                "file": "欧美音乐/AvrilLavigne-Innocence.mp3"
				},
				{
                "track": 19,
                "name": "AvrilLavigne-IamWithYou",
                "length": "4:46",
                "file": "欧美音乐/AvrilLavigne-IamWithYou.mp3"
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