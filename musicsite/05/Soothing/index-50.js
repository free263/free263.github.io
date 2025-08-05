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
                "track": 321,
                "name": "264.Tailwind",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/264.Tailwind.mp3"
				},
				{
                "track": 320,
                "name": "263.Newage",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/263.Newage.mp3"
				},
				{
                "track": 319,
                "name": "262.Limpid",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/262.Limpid.mp3"
				},
				{
                "track": 318,
                "name": "261.Circulation",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/261.Circulation.mp3"
				},
				{
                "track": 317,
                "name": "260.Black",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/260.Black.mp3"
				},
				{
                "track": 316,
                "name": "259.Brightness",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/259.Brightness.mp3"
				},
				{
                "track": 315,
                "name": "258.LighthouseonaBlueSky",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/258.LighthouseonaBlueSky.mp3"
				},
				{
                "track": 314,
                "name": "257.Overthecity",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/257.Overthecity.mp3"
				},
				{
                "track": 313,
                "name": "256.Shadowsofus",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/256.Shadowsofus.mp3"
				},
				{
                "track": 312,
                "name": "255.Nothingwilleverbethesameagain",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/255.Nothingwilleverbethesameagain.mp3"
				},
				{
                "track": 311,
                "name": "254.Returntozero",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/254.Returntozero.mp3"
				},
				{
                "track": 310,
                "name": "253.Dome",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/253.Dome.mp3"
				},
				{
                "track": 309,
                "name": "252.BluetoBright",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/252.BluetoBright.mp3"
				},
				{
                "track": 308,
                "name": "251.Alovestory",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/251.Alovestory.mp3"
				},
				{
                "track": 307,
                "name": "250.Dejavu",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/250.Dejavu.mp3"
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