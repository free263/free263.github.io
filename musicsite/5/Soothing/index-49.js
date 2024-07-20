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
                "track": 336,
                "name": "279.StringLights",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/279.StringLights.mp3"
				},
				{
                "track": 335,
                "name": "278.Travel",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/278.Travel.mp3"
				},
				{
                "track": 334,
                "name": "277.Floatingabovethecitymountain",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/277.Floatingabovethecitymountain.mp3"
				},
				{
                "track": 333,
                "name": "276.Eden",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/276.Eden.mp3"
				},
				{
                "track": 332,
                "name": "275.Anti-clockwise",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/275.Anti-clockwise.mp3"
				},
				{
                "track": 331,
                "name": "274.Repeats",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/274.Repeats.mp3"
				},
				{
                "track": 330,
                "name": "273.Angelofsolitary",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/273.Angelofsolitary.mp3"
				},
				{
                "track": 329,
                "name": "272.Driftapart",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/272.Driftapart.mp3"
				},
				{
                "track": 328,
                "name": "271.BeforeImold",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/271.BeforeImold.mp3"
				},
				{
                "track": 327,
                "name": "270.Lookingupattheheavens",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/270.Lookingupattheheavens.mp3"
				},
				{
                "track": 326,
                "name": "269.Reconciledyouself",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/269.Reconciledyouself.mp3"
				},
				{
                "track": 325,
                "name": "268.WindsofMay",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/268.WindsofMay.mp3"
				},
				{
                "track": 324,
                "name": "267.Shadow",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/267.Shadow.mp3"
				},
				{
                "track": 323,
                "name": "266.Outletofemotion",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/266.Outletofemotion.mp3"
				},
				{
                "track": 322,
                "name": "265.Longan",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/265.Longan.mp3"
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