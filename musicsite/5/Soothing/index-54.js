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
                "track": 261,
                "name": "204.Mirrored",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/204.Mirrored.mp3"
				},
				{
                "track": 260,
                "name": "203.Platoniclove",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/203.Platoniclove.mp3"
				},
				{
                "track": 259,
                "name": "202.Nighttrip",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/202.Nighttrip.mp3"
				},
				{
                "track": 258,
                "name": "201.Mapofstars",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/201.Mapofstars.mp3"
				},
				{
                "track": 257,
                "name": "200.Youcanfindit",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/200.Youcanfindit.mp3"
				},
				{
                "track": 256,
                "name": "199.Sunset",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/199.Sunset.mp3"
				},
				{
                "track": 255,
                "name": "198.Traveldownriver",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/198.Traveldownriver.mp3"
				},
				{
                "track": 254,
                "name": "197.Somethingspecial",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/197.Somethingspecial.mp3"
				},
				{
                "track": 253,
                "name": "196.Theendofthesky",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/196.Theendofthesky.mp3"
				},
				{
                "track": 252,
                "name": "195.Whenthesunisshining",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/195.Whenthesunisshining.mp3"
				},
				{
                "track": 251,
                "name": "194.Speechless",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/194.Speechless.mp3"
				},
				{
                "track": 250,
                "name": "193.Nightbecameday",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/193.Nightbecameday.mp3"
				},
				{
                "track": 249,
                "name": "192.Awarmdistance",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/192.Awarmdistance.mp3"
				},
				{
                "track": 248,
                "name": "191.Scurrying",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/191.Scurrying.mp3"
				},
				{
                "track": 247,
                "name": "190.Perfumeintheair",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/190.Perfumeintheair.mp3"
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