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
                "track": 216,
                "name": "159.Realexistence",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/159.Realexistence.mp3"
				},
				{
                "track": 215,
                "name": "158.Cufflinks",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/158.Cufflinks.mp3"
				},
				{
                "track": 214,
                "name": "157.Velvetsandsilks",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/157.Velvetsandsilks.mp3"
				},
				{
                "track": 213,
                "name": "156.PlayMeaLoveSong",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/156.PlayMeaLoveSong.mp3"
				},
				{
                "track": 212,
                "name": "155.Soyouchoosesilence",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/155.Soyouchoosesilence.mp3"
				},
				{
                "track": 211,
                "name": "154.Entryway",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/154.Entryway.mp3"
				},
				{
                "track": 210,
                "name": "153.LifeinDetroit",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/153.LifeinDetroit.mp3"
				},
				{
                "track": 209,
                "name": "152.Cherish",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/152.Cherish.mp3"
				},
				{
                "track": 208,
                "name": "151.Ultravioletlight",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/151.Ultravioletlight.mp3"
				},
				{
                "track": 207,
                "name": "150.SwallowtailButterfly",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/150.SwallowtailButterfly.mp3"
				},
				{
                "track": 206,
                "name": "149.Nostalgicforthegoodolddays",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/149.Nostalgicforthegoodolddays.mp3"
				},
				{
                "track": 205,
                "name": "148.Photograph",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/148.Photograph.mp3"
				},
				{
                "track": 204,
                "name": "147.Spirit",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/147.Spirit.mp3"
				},
				{
                "track": 203,
                "name": "146.NightStars",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/146.NightStars.mp3"
				},
				{
                "track": 202,
                "name": "145.Lunareclipse",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/145.Lunareclipse.mp3"
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