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
                "track": 366,
                "name": "309.Subwayloop",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/309.Subwayloop.mp3"
				},
				{
                "track": 365,
                "name": "308.Suchalife",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/308.Suchalife.mp3"
				},
				{
                "track": 364,
                "name": "307.Mottled",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/307.Mottled.mp3"
				},
				{
                "track": 363,
                "name": "306.Smallindeedfortunate",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/306.Smallindeedfortunate.mp3"
				},
				{
                "track": 362,
                "name": "305.Nauticalblue",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/305.Nauticalblue.mp3"
				},
				{
                "track": 361,
                "name": "304.Forgotten",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/304.Forgotten.mp3"
				},
				{
                "track": 360,
                "name": "303.Subtlety",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/303.Subtlety.mp3"
				},
				{
                "track": 359,
                "name": "302.Coagulation",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/302.Coagulation.mp3"
				},
				{
                "track": 358,
                "name": "301.Capriccio",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/301.Capriccio.mp3"
				},
				{
                "track": 357,
                "name": "300.Unfind",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/300.Unfind.mp3"
				},
				{
                "track": 356,
                "name": "299.Intheclouds",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/299.Intheclouds.mp3"
				},
				{
                "track": 355,
                "name": "298.Circle",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/298.Circle.mp3"
				},
				{
                "track": 354,
                "name": "297.Emptyending",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/297.Emptyending.mp3"
				},
				{
                "track": 353,
                "name": "296.Lieawake",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/296.Lieawake.mp3"
				},
				{
                "track": 352,
                "name": "295.Remnant-残存",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/295.Remnant-残存.mp3"
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