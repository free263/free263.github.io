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
                "track": 651,
                "name": "594.Nidhogg",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/594.Nidhogg.mp3"
				},
				{
                "track": 650,
                "name": "593.Awaitsthewind",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/593.Awaitsthewind.mp3"
				},
				{
                "track": 649,
                "name": "592.Lullaby",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/592.Lullaby.mp3"
				},
				{
                "track": 648,
                "name": "591.Abovethehorizon",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/591.Abovethehorizon.mp3"
				},
				{
                "track": 647,
                "name": "590.Crouch",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/590.Crouch.mp3"
				},
				{
                "track": 646,
                "name": "589.Violet",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/589.Violet.mp3"
				},
				{
                "track": 645,
                "name": "588.Afterourlifesmovie",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/588.Afterourlifesmovie.mp3"
				},
				{
                "track": 644,
                "name": "587.Painful",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/587.Painful.mp3"
				},
				{
                "track": 643,
                "name": "586.Treeofheaven",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/586.Treeofheaven.mp3"
				},
				{
                "track": 642,
                "name": "585.Palosanto",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/585.Palosanto.mp3"
				},
				{
                "track": 641,
                "name": "584.Tanzen",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/584.Tanzen.mp3"
				},
				{
                "track": 640,
                "name": "583.NightIsland",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/583.NightIsland.mp3"
				},
				{
                "track": 639,
                "name": "582.Growup",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/582.Growup.mp3"
				},
				{
                "track": 638,
                "name": "581.Lastjourney",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/581.Lastjourney.mp3"
				},
				{
                "track": 637,
                "name": "580.Whiteweather",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/580.Whiteweather.mp3"
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