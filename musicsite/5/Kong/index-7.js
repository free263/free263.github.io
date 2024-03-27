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
                "track": 82,
                "name": "班得瑞-日光海岸",
                "length": "4:46",
                "file": "纯音乐/班得瑞-日光海岸.mp3"
				},
				{
                "track": 81,
                "name": "班得瑞-清晨",
                "length": "4:46",
                "file": "纯音乐/班得瑞-清晨.mp3"
				},
				{
                "track": 80,
                "name": "班得瑞-排箫 老鹰之歌",
                "length": "4:46",
                "file": "纯音乐/班得瑞-排箫 老鹰之歌.mp3"
				},
				{
                "track": 79,
                "name": "班得瑞-秘密",
                "length": "4:46",
                "file": "纯音乐/班得瑞-秘密.mp3"
				},
				{
                "track": 78,
                "name": "班得瑞-满天星",
                "length": "4:46",
                "file": "纯音乐/班得瑞-满天星.mp3"
				},
				{
                "track": 77,
                "name": "班得瑞-马可波罗",
                "length": "4:46",
                "file": "纯音乐/班得瑞-马可波罗.mp3"
				},
				{
                "track": 76,
                "name": "班得瑞-涟漪",
                "length": "4:46",
                "file": "纯音乐/班得瑞-涟漪.mp3"
				},
				{
                "track": 75,
                "name": "班得瑞-火战车",
                "length": "4:46",
                "file": "纯音乐/班得瑞-火战车.mp3"
				},
				{
                "track": 74,
                "name": "班得瑞-海王星",
                "length": "4:46",
                "file": "纯音乐/班得瑞-海王星.mp3"
				},
				{
                "track": 73,
                "name": "班得瑞-风的呢喃",
                "length": "4:46",
                "file": "纯音乐/班得瑞-风的呢喃.mp3"
				},
				{
                "track": 72,
                "name": "班得瑞-非洲日落",
                "length": "4:46",
                "file": "纯音乐/班得瑞-非洲日落.mp3"
				},
				{
                "track": 71,
                "name": "班得瑞-春野",
                "length": "4:46",
                "file": "纯音乐/班得瑞-春野.mp3"
				},
				{
                "track": 70,
                "name": "班得瑞-春水",
                "length": "4:46",
                "file": "纯音乐/班得瑞-春水.mp3"
				},
				{
                "track": 69,
                "name": "班得瑞-初雪",
                "length": "4:46",
                "file": "纯音乐/班得瑞-初雪.mp3"
				},
				{
                "track": 68,
                "name": "班得瑞-晨光",
                "length": "4:46",
                "file": "纯音乐/班得瑞-晨光.mp3"
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