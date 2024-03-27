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
                "track": 306,
                "name": "249.Afterthestorm",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/249.Afterthestorm.mp3"
				},
				{
                "track": 305,
                "name": "248.Peaceofmind",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/248.Peaceofmind.mp3"
				},
				{
                "track": 304,
                "name": "247.IWasReal",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/247.IWasReal.mp3"
				},
				{
                "track": 303,
                "name": "246.JodaeiyeNaderazSimin",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/246.JodaeiyeNaderazSimin.mp3"
				},
				{
                "track": 302,
                "name": "245.Neptune",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/245.Neptune.mp3"
				},
				{
                "track": 301,
                "name": "244.Memoriesforthiscity",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/244.Memoriesforthiscity.mp3"
				},
				{
                "track": 300,
                "name": "243.Againstthewind",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/243.Againstthewind.mp3"
				},
				{
                "track": 299,
                "name": "242.Withafarawaylookinhereyes",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/242.Withafarawaylookinhereyes.mp3"
				},
				{
                "track": 298,
                "name": "241.Echoesofpast",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/241.Echoesofpast.mp3"
				},
				{
                "track": 297,
                "name": "240.Twilight",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/240.Twilight.mp3"
				},
				{
                "track": 296,
                "name": "239.Somewhere",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/239.Somewhere.mp3"
				},
				{
                "track": 295,
                "name": "238.Ears",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/238.Ears.mp3"
				},
				{
                "track": 294,
                "name": "237.Longnight",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/237.Longnight.mp3"
				},
				{
                "track": 293,
                "name": "236.Whocares",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/236.Whocares.mp3"
				},
				{
                "track": 292,
                "name": "235.Silhouette",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/235.Silhouette.mp3"
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