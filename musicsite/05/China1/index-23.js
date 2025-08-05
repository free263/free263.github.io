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
                "track": 782,
                "name": "张栋梁-当你孤单你会想起谁",
                "length": "4:46",
                "file": "精选/张栋梁-当你孤单你会想起谁.mp3"
				},
				{
                "track": 781,
                "name": "张栋梁-北极星的眼泪",
                "length": "4:46",
                "file": "精选/张栋梁-北极星的眼泪.mp3"
				},
				{
                "track": 780,
                "name": "张碧晨-年轮",
                "length": "4:46",
                "file": "精选/张碧晨-年轮.mp3"
				},
				{
                "track": 779,
                "name": "张碧晨-光的方向",
                "length": "4:46",
                "file": "精选/张碧晨-光的方向.mp3"
				},
				{
                "track": 778,
                "name": "张柏芝-星语心愿",
                "length": "4:46",
                "file": "精选/张柏芝-星语心愿.mp3"
				},
				{
                "track": 777,
                "name": "展展与罗罗-沙漠骆驼",
                "length": "4:46",
                "file": "精选/展展与罗罗-沙漠骆驼.mp3"
				},
				{
                "track": 776,
                "name": "袁娅维-说散就散",
                "length": "4:46",
                "file": "精选/袁娅维-说散就散.mp3"
				},
				{
                "track": 775,
                "name": "袁小葳、阿辰（阎辰）-化作烟火为你坠落",
                "length": "4:46",
                "file": "精选/袁小葳、阿辰（阎辰）-化作烟火为你坠落.mp3"
				},
				{
                "track": 774,
                "name": "袁成杰、戚薇-想我了吗",
                "length": "4:46",
                "file": "精选/袁成杰、戚薇-想我了吗.mp3"
				},
				{
                "track": 773,
                "name": "郁可唯-思慕",
                "length": "4:46",
                "file": "精选/郁可唯-思慕.mp3"
				},
				{
                "track": 772,
                "name": "郁可唯-时间煮雨",
                "length": "4:46",
                "file": "精选/郁可唯-时间煮雨.mp3"
				},
				{
                "track": 771,
                "name": "庾澄庆-热情的沙漠",
                "length": "4:46",
                "file": "精选/庾澄庆-热情的沙漠.mp3"
				},
				{
                "track": 770,
                "name": "庾澄庆-让我一次爱个够",
                "length": "4:46",
                "file": "精选/庾澄庆-让我一次爱个够.mp3"
				},
				{
                "track": 769,
                "name": "庾澄庆-情非得已",
                "length": "4:46",
                "file": "精选/庾澄庆-情非得已.mp3"
				},
				{
                "track": 768,
                "name": "羽·泉-最美",
                "length": "4:46",
                "file": "精选/羽·泉-最美.mp3"
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