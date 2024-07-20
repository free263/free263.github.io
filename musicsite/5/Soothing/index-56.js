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
                "track": 231,
                "name": "174.Mandala",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/174.Mandala.mp3"
				},
				{
                "track": 230,
                "name": "173.YourOwnUniverse",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/173.YourOwnUniverse.mp3"
				},
				{
                "track": 229,
                "name": "172.Birthstone",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/172.Birthstone.mp3"
				},
				{
                "track": 228,
                "name": "171.Thefirstfrostsofautumn",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/171.Thefirstfrostsofautumn.mp3"
				},
				{
                "track": 227,
                "name": "170.BeStillMySoul",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/170.BeStillMySoul.mp3"
				},
				{
                "track": 226,
                "name": "169.Ascension",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/169.Ascension.mp3"
				},
				{
                "track": 225,
                "name": "168.Floaife",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/168.Floaife.mp3"
				},
				{
                "track": 224,
                "name": "167.Dance",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/167.Dance.mp3"
				},
				{
                "track": 223,
                "name": "166.Eclipse",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/166.Eclipse.mp3"
				},
				{
                "track": 222,
                "name": "165.FaustPark",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/165.FaustPark.mp3"
				},
				{
                "track": 221,
                "name": "164.TheYesDay",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/164.TheYesDay.mp3"
				},
				{
                "track": 220,
                "name": "163.Field",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/163.Field.mp3"
				},
				{
                "track": 219,
                "name": "162.MetalRose",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/162.MetalRose.mp3"
				},
				{
                "track": 218,
                "name": "161.SapphireinSeptember",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/161.SapphireinSeptember.mp3"
				},
				{
                "track": 217,
                "name": "160.Hummingbird",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/160.Hummingbird.mp3"
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