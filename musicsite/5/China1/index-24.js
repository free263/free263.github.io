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
                "track": 767,
                "name": "羽·泉-心似狂潮",
                "length": "4:46",
                "file": "精选/羽·泉-心似狂潮.mp3"
				},
				{
                "track": 766,
                "name": "羽·泉-深呼吸",
                "length": "4:46",
                "file": "精选/羽·泉-深呼吸.mp3"
				},
				{
                "track": 765,
                "name": "羽·泉-冷酷到底",
                "length": "4:46",
                "file": "精选/羽·泉-冷酷到底.mp3"
				},
				{
                "track": 764,
                "name": "羽·泉-感觉不到你",
                "length": "4:46",
                "file": "精选/羽·泉-感觉不到你.mp3"
				},
				{
                "track": 763,
                "name": "羽·泉-彩虹",
                "length": "4:46",
                "file": "精选/羽·泉-彩虹.mp3"
				},
				{
                "track": 762,
                "name": "羽·泉-奔跑",
                "length": "4:46",
                "file": "精选/羽·泉-奔跑.mp3"
				},
				{
                "track": 761,
                "name": "宇桐非-感动天感动地",
                "length": "4:46",
                "file": "精选/宇桐非-感动天感动地.mp3"
				},
				{
                "track": 760,
                "name": "俞静-红豆红",
                "length": "4:46",
                "file": "精选/俞静-红豆红.mp3"
				},
				{
                "track": 759,
                "name": "俞灏明 简美妍-陷入爱里面",
                "length": "4:46",
                "file": "精选/俞灏明 简美妍-陷入爱里面.mp3"
				},
				{
                "track": 758,
                "name": "于文文-体面",
                "length": "4:46",
                "file": "精选/于文文-体面.mp3"
				},
				{
                "track": 757,
                "name": "游鸿明-下沙",
                "length": "4:46",
                "file": "精选/游鸿明-下沙.mp3"
				},
				{
                "track": 756,
                "name": "游鸿明-爱我的人和我爱的人",
                "length": "4:46",
                "file": "精选/游鸿明-爱我的人和我爱的人.mp3"
				},
				{
                "track": 755,
                "name": "银临、Aki阿杰-牵丝戏",
                "length": "4:46",
                "file": "精选/银临、Aki阿杰-牵丝戏.mp3"
				},
				{
                "track": 754,
                "name": "伊扬-纸飞机",
                "length": "4:46",
                "file": "精选/伊扬-纸飞机.mp3"
				},
				{
                "track": 753,
                "name": "伊格赛听、叶里-谪仙",
                "length": "4:46",
                "file": "精选/伊格赛听、叶里-谪仙.mp3"
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