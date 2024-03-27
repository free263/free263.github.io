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
                "track": 147,
                "name": "147.小森林",
                "length": "4:46",
                "file": "自然之声/147.小森林.mp3"
				},
				{
                "track": 146,
                "name": "146.走在沙滩上",
                "length": "4:46",
                "file": "自然之声/146.走在沙滩上.mp3"
				},
				{
                "track": 145,
                "name": "145.林中小溪",
                "length": "4:46",
                "file": "自然之声/145.林中小溪.mp3"
				},
				{
                "track": 144,
                "name": "144.雪地",
                "length": "4:46",
                "file": "自然之声/144.雪地.mp3"
				},
				{
                "track": 143,
                "name": "143.山顶日落",
                "length": "4:46",
                "file": "自然之声/143.山顶日落.mp3"
				},
				{
                "track": 142,
                "name": "142.篝火",
                "length": "4:46",
                "file": "自然之声/142.篝火.mp3"
				},
				{
                "track": 141,
                "name": "141.海底世界",
                "length": "4:46",
                "file": "自然之声/141.海底世界.mp3"
				},
				{
                "track": 140,
                "name": "140.划船",
                "length": "4:46",
                "file": "自然之声/140.划船.mp3"
				},
				{
                "track": 139,
                "name": "139.山涧",
                "length": "4:46",
                "file": "自然之声/139.山涧.mp3"
				},
				{
                "track": 138,
                "name": "138.北极",
                "length": "4:46",
                "file": "自然之声/138.北极.mp3"
				},
				{
                "track": 137,
                "name": "137.雷雨",
                "length": "4:46",
                "file": "自然之声/137.雷雨.mp3"
				},
				{
                "track": 136,
                "name": "136.风吹雨成夏",
                "length": "4:46",
                "file": "自然之声/136.风吹雨成夏.mp3"
				},
				{
                "track": 135,
                "name": "135.泉眼无声惜细流",
                "length": "4:46",
                "file": "自然之声/135.泉眼无声惜细流.mp3"
				},
				{
                "track": 134,
                "name": "134.山野",
                "length": "4:46",
                "file": "自然之声/134.山野.mp3"
				},
				{
                "track": 133,
                "name": "133.大海",
                "length": "4:46",
                "file": "自然之声/133.大海.mp3"
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