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
                "track": 237,
                "name": "张碧晨-光的方向",
                "length": "4:46",
                "file": "简选/国语/张碧晨-光的方向.mp3"
				},
				{
                "track": 236,
                "name": "展展与罗罗-沙漠骆驼",
                "length": "4:46",
                "file": "简选/国语/展展与罗罗-沙漠骆驼.mp3"
				},
				{
                "track": 235,
                "name": "袁娅维-说散就散",
                "length": "4:46",
                "file": "简选/国语/袁娅维-说散就散.mp3"
				},
				{
                "track": 234,
                "name": "袁小葳、阿辰（阎辰）-化作烟火为你坠落",
                "length": "4:46",
                "file": "简选/国语/袁小葳、阿辰（阎辰）-化作烟火为你坠落.mp3"
				},
				{
                "track": 233,
                "name": "郁可唯-思慕",
                "length": "4:46",
                "file": "简选/国语/郁可唯-思慕.mp3"
				},
				{
                "track": 232,
                "name": "郁可唯-时间煮雨",
                "length": "4:46",
                "file": "简选/国语/郁可唯-时间煮雨.mp3"
				},
				{
                "track": 231,
                "name": "庾澄庆-情非得已",
                "length": "4:46",
                "file": "简选/国语/庾澄庆-情非得已.mp3"
				},
				{
                "track": 230,
                "name": "羽·泉-最美",
                "length": "4:46",
                "file": "简选/国语/羽·泉-最美.mp3"
				},
				{
                "track": 229,
                "name": "羽·泉-深呼吸",
                "length": "4:46",
                "file": "简选/国语/羽·泉-深呼吸.mp3"
				},
				{
                "track": 228,
                "name": "羽·泉-冷酷到底",
                "length": "4:46",
                "file": "简选/国语/羽·泉-冷酷到底.mp3"
				},
				{
                "track": 227,
                "name": "羽·泉-感觉不到你",
                "length": "4:46",
                "file": "简选/国语/羽·泉-感觉不到你.mp3"
				},
				{
                "track": 226,
                "name": "俞静-红豆红",
                "length": "4:46",
                "file": "简选/国语/俞静-红豆红.mp3"
				},
				{
                "track": 225,
                "name": "于文文-体面",
                "length": "4:46",
                "file": "简选/国语/于文文-体面.mp3"
				},
				{
                "track": 224,
                "name": "银临、Aki阿杰-牵丝戏",
                "length": "4:46",
                "file": "简选/国语/银临、Aki阿杰-牵丝戏.mp3"
				},
				{
                "track": 223,
                "name": "伊格赛听、叶里-谪仙",
                "length": "4:46",
                "file": "简选/国语/伊格赛听、叶里-谪仙.mp3"
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