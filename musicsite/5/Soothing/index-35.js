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
                "track": 546,
                "name": "489.Vanishindarkness-消失于黑暗",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/489.Vanishindarkness-消失于黑暗.mp3"
				},
				{
                "track": 545,
                "name": "488.Silentembrace-沉默的抱拥",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/488.Silentembrace-沉默的抱拥.mp3"
				},
				{
                "track": 544,
                "name": "487.Thelastencounter-最后的相遇",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/487.Thelastencounter-最后的相遇.mp3"
				},
				{
                "track": 543,
                "name": "486.Thesouthwind",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/486.Thesouthwind.mp3"
				},
				{
                "track": 542,
                "name": "485.Slowmotion-慢镜头",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/485.Slowmotion-慢镜头.mp3"
				},
				{
                "track": 541,
                "name": "484.Coordinate",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/484.Coordinate.mp3"
				},
				{
                "track": 540,
                "name": "483.Incline",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/483.Incline.mp3"
				},
				{
                "track": 539,
                "name": "482.Abandoned",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/482.Abandoned.mp3"
				},
				{
                "track": 538,
                "name": "481.Unique",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/481.Unique.mp3"
				},
				{
                "track": 537,
                "name": "480.Lastminutegift",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/480.Lastminutegift.mp3"
				},
				{
                "track": 536,
                "name": "479.Blueroom",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/479.Blueroom.mp3"
				},
				{
                "track": 535,
                "name": "478.Tunnel",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/478.Tunnel.mp3"
				},
				{
                "track": 534,
                "name": "477.Swingingpointer",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/477.Swingingpointer.mp3"
				},
				{
                "track": 533,
                "name": "476.Anti-clockwise",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/476.Anti-clockwise.mp3"
				},
				{
                "track": 532,
                "name": "475.Route66",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/475.Route66.mp3"
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