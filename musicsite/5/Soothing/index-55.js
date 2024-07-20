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
                "track": 246,
                "name": "189.GrowingfromtheDark",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/189.GrowingfromtheDark.mp3"
				},
				{
                "track": 245,
                "name": "188.Infrontofthehotel",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/188.Infrontofthehotel.mp3"
				},
				{
                "track": 244,
                "name": "187.Loveyouthismuch",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/187.Loveyouthismuch.mp3"
				},
				{
                "track": 243,
                "name": "186.Graffitiface",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/186.Graffitiface.mp3"
				},
				{
                "track": 242,
                "name": "185.Leavetilllast",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/185.Leavetilllast.mp3"
				},
				{
                "track": 241,
                "name": "184.AndIwasstandingstill",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/184.AndIwasstandingstill.mp3"
				},
				{
                "track": 240,
                "name": "183.Thedeletekey",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/183.Thedeletekey.mp3"
				},
				{
                "track": 239,
                "name": "182.Cycle",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/182.Cycle.mp3"
				},
				{
                "track": 238,
                "name": "181.Bygoneyears",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/181.Bygoneyears.mp3"
				},
				{
                "track": 237,
                "name": "180.Woodbine",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/180.Woodbine.mp3"
				},
				{
                "track": 236,
                "name": "179.Driftwood",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/179.Driftwood.mp3"
				},
				{
                "track": 235,
                "name": "178.Darkstilllife",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/178.Darkstilllife.mp3"
				},
				{
                "track": 234,
                "name": "177.Perfume",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/177.Perfume.mp3"
				},
				{
                "track": 233,
                "name": "176.Betweensilenceandsilence",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/176.Betweensilenceandsilence.mp3"
				},
				{
                "track": 232,
                "name": "175.EdgeOfTheOcean",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/175.EdgeOfTheOcean.mp3"
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