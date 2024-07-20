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
                "track": 606,
                "name": "549.Stilllove",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/549.Stilllove.mp3"
				},
				{
                "track": 605,
                "name": "548.Neptune",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/548.Neptune.mp3"
				},
				{
                "track": 604,
                "name": "547.Yestermorrow",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/547.Yestermorrow.mp3"
				},
				{
                "track": 603,
                "name": "546.Ferriswheel",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/546.Ferriswheel.mp3"
				},
				{
                "track": 602,
                "name": "545.SomethingBlue",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/545.SomethingBlue.mp3"
				},
				{
                "track": 601,
                "name": "544.Anightwithoutroses",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/544.Anightwithoutroses.mp3"
				},
				{
                "track": 600,
                "name": "543.Echoandwild",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/543.Echoandwild.mp3"
				},
				{
                "track": 599,
                "name": "542.Wisper",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/542.Wisper.mp3"
				},
				{
                "track": 598,
                "name": "541.Jellyfish",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/541.Jellyfish.mp3"
				},
				{
                "track": 597,
                "name": "540.Strollinthepark",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/540.Strollinthepark.mp3"
				},
				{
                "track": 596,
                "name": "539.Afterdawn",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/539.Afterdawn.mp3"
				},
				{
                "track": 595,
                "name": "538.FirefliesintheDusk",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/538.FirefliesintheDusk.mp3"
				},
				{
                "track": 594,
                "name": "537.Likethesoulofhispoem",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/537.Likethesoulofhispoem.mp3"
				},
				{
                "track": 593,
                "name": "536.Whaleinthemoon",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/536.Whaleinthemoon.mp3"
				},
				{
                "track": 592,
                "name": "535.TennesseeWaltz",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/535.TennesseeWaltz.mp3"
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