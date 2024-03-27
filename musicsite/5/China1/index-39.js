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
                "track": 542,
                "name": "孙燕姿-原来你什么都不要",
                "length": "4:46",
                "file": "精选/孙燕姿-原来你什么都不要.mp3"
				},
				{
                "track": 541,
                "name": "孙燕姿-遇见",
                "length": "4:46",
                "file": "精选/孙燕姿-遇见.mp3"
				},
				{
                "track": 540,
                "name": "孙燕姿-我要的幸福",
                "length": "4:46",
                "file": "精选/孙燕姿-我要的幸福.mp3"
				},
				{
                "track": 539,
                "name": "孙燕姿-天黑黑",
                "length": "4:46",
                "file": "精选/孙燕姿-天黑黑.mp3"
				},
				{
                "track": 538,
                "name": "孙燕姿-绿光",
                "length": "4:46",
                "file": "精选/孙燕姿-绿光.mp3"
				},
				{
                "track": 537,
                "name": "孙燕姿-开始懂了",
                "length": "4:46",
                "file": "精选/孙燕姿-开始懂了.mp3"
				},
				{
                "track": 536,
                "name": "孙燕姿-坏天气",
                "length": "4:46",
                "file": "精选/孙燕姿-坏天气.mp3"
				},
				{
                "track": 535,
                "name": "孙燕姿-风筝",
                "length": "4:46",
                "file": "精选/孙燕姿-风筝.mp3"
				},
				{
                "track": 534,
                "name": "孙楠-拯救",
                "length": "4:46",
                "file": "精选/孙楠-拯救.mp3"
				},
				{
                "track": 533,
                "name": "孙楠-缘分的天空",
                "length": "4:46",
                "file": "精选/孙楠-缘分的天空.mp3"
				},
				{
                "track": 532,
                "name": "孙楠-你快回来",
                "length": "4:46",
                "file": "精选/孙楠-你快回来.mp3"
				},
				{
                "track": 531,
                "name": "孙楠-IBelieve",
                "length": "4:46",
                "file": "精选/孙楠-IBelieve.mp3"
				},
				{
                "track": 530,
                "name": "孙楠、韩红-美丽的神话",
                "length": "4:46",
                "file": "精选/孙楠、韩红-美丽的神话.mp3"
				},
				{
                "track": 529,
                "name": "孙浩-中华民谣",
                "length": "4:46",
                "file": "精选/孙浩-中华民谣.mp3"
				},
				{
                "track": 528,
                "name": "孙国庆-上上签",
                "length": "4:46",
                "file": "精选/孙国庆-上上签.mp3"
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