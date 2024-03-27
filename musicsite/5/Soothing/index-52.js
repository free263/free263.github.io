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
                "track": 291,
                "name": "234.Ataraxia",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/234.Ataraxia.mp3"
				},
				{
                "track": 290,
                "name": "233.Luckycolor",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/233.Luckycolor.mp3"
				},
				{
                "track": 289,
                "name": "232.Heroine",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/232.Heroine.mp3"
				},
				{
                "track": 288,
                "name": "231.Utopiandream",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/231.Utopiandream.mp3"
				},
				{
                "track": 287,
                "name": "230.WeepingAngel",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/230.WeepingAngel.mp3"
				},
				{
                "track": 286,
                "name": "229.Kaleidoscope",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/229.Kaleidoscope.mp3"
				},
				{
                "track": 285,
                "name": "228.Aslongasthereistomorrow",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/228.Aslongasthereistomorrow.mp3"
				},
				{
                "track": 284,
                "name": "227.Sinceitisso",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/227.Sinceitisso.mp3"
				},
				{
                "track": 283,
                "name": "226.Balance",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/226.Balance.mp3"
				},
				{
                "track": 282,
                "name": "225.Nothingbut",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/225.Nothingbut.mp3"
				},
				{
                "track": 281,
                "name": "224.Abitofgreenery",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/224.Abitofgreenery.mp3"
				},
				{
                "track": 280,
                "name": "223.Signature",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/223.Signature.mp3"
				},
				{
                "track": 279,
                "name": "222.Letnaturetakeitscourse",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/222.Letnaturetakeitscourse.mp3"
				},
				{
                "track": 278,
                "name": "221.Temperatureof",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/221.Temperatureof.mp3"
				},
				{
                "track": 277,
                "name": "220.Openthebox",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/220.Openthebox.mp3"
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