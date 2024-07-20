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
                "track": 561,
                "name": "504.RoysMotel",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/504.RoysMotel.mp3"
				},
				{
                "track": 560,
                "name": "503.Loomingclouds",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/503.Loomingclouds.mp3"
				},
				{
                "track": 559,
                "name": "502.Chord",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/502.Chord.mp3"
				},
				{
                "track": 558,
                "name": "501.Jumping-off",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/501.Jumping-off.mp3"
				},
				{
                "track": 557,
                "name": "500.White",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/500.White.mp3"
				},
				{
                "track": 556,
                "name": "499.Alifeunderwater",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/499.Alifeunderwater.mp3"
				},
				{
                "track": 555,
                "name": "498.Thewhispersofwaiting-等待中的低吟",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/498.Thewhispersofwaiting-等待中的低吟.mp3"
				},
				{
                "track": 554,
                "name": "497.Consciousenergy-意识能量",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/497.Consciousenergy-意识能量.mp3"
				},
				{
                "track": 553,
                "name": "496.Directionofthedream-梦的方向",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/496.Directionofthedream-梦的方向.mp3"
				},
				{
                "track": 552,
                "name": "495.Bebacktothehometown-南归",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/495.Bebacktothehometown-南归.mp3"
				},
				{
                "track": 551,
                "name": "494.Amnesia-失忆症",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/494.Amnesia-失忆症.mp3"
				},
				{
                "track": 550,
                "name": "493.Farandwide-无远弗届",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/493.Farandwide-无远弗届.mp3"
				},
				{
                "track": 549,
                "name": "492.Everlasting-永恒",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/492.Everlasting-永恒.mp3"
				},
				{
                "track": 548,
                "name": "491.Shiningbrighter",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/491.Shiningbrighter.mp3"
				},
				{
                "track": 547,
                "name": "490.Behindtheshadow-阴影背后",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/490.Behindtheshadow-阴影背后.mp3"
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