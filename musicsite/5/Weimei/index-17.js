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
                "track": 116,
                "name": "116.纯音乐 - 橄榄树",
                "length": "4:46",
                "file": "唯美纯音乐/116.纯音乐 - 橄榄树.mp3"
				},
				{
                "track": 115,
                "name": "115.那天的遇见 (钢琴曲) - 赵海洋",
                "length": "4:46",
                "file": "唯美纯音乐/115.那天的遇见 (钢琴曲) - 赵海洋.mp3"
				},
				{
                "track": 114,
                "name": "114.新不了情主题曲 - 纯音乐（萨克斯）",
                "length": "4:46",
                "file": "唯美纯音乐/114.新不了情主题曲 - 纯音乐（萨克斯）.mp3"
				},
				{
                "track": 113,
                "name": "113.火星金星 (Mars And Venus) - 班得瑞",
                "length": "4:46",
                "file": "唯美纯音乐/113.火星金星 (Mars And Venus) - 班得瑞.mp3"
				},
				{
                "track": 112,
                "name": "112.林海 - 暗香",
                "length": "4:46",
                "file": "唯美纯音乐/112.林海 - 暗香.mp3"
				},
				{
                "track": 111,
                "name": "111.杨柳 - 林海",
                "length": "4:46",
                "file": "唯美纯音乐/111.杨柳 - 林海.mp3"
				},
				{
                "track": 110,
                "name": "110.流动的城市 - 林海 （钢琴曲）",
                "length": "4:46",
                "file": "唯美纯音乐/110.流动的城市 - 林海 （钢琴曲）.mp3"
				},
				{
                "track": 109,
                "name": "109.踏古 - 林海 （琵琶）",
                "length": "4:46",
                "file": "唯美纯音乐/109.踏古 - 林海 （琵琶）.mp3"
				},
				{
                "track": 108,
                "name": "108.流行的云 - 吉他纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/108.流行的云 - 吉他纯音乐.mp3"
				},
				{
                "track": 107,
                "name": "107.月光下漫舞 - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/107.月光下漫舞 - 纯音乐.mp3"
				},
				{
                "track": 106,
                "name": "106.中央台天气预报背景音乐 - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/106.中央台天气预报背景音乐 - 纯音乐.mp3"
				},
				{
                "track": 105,
                "name": "105.后来 (小提琴 长笛) - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/105.后来 (小提琴 长笛) - 纯音乐.mp3"
				},
				{
                "track": 104,
                "name": "104.风居住的街道 - 矶村由纪子",
                "length": "4:46",
                "file": "唯美纯音乐/104.风居住的街道 - 矶村由纪子.mp3"
				},
				{
                "track": 103,
                "name": "103.在那遥远的地方 - 吉他曲",
                "length": "4:46",
                "file": "唯美纯音乐/103.在那遥远的地方 - 吉他曲.mp3"
				},
				{
                "track": 102,
                "name": "102.伤感音乐 - 太多 (小提琴) - 轻音乐",
                "length": "4:46",
                "file": "唯美纯音乐/102.伤感音乐 - 太多 (小提琴) - 轻音乐.mp3"
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