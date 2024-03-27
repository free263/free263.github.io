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
                "track": 41,
                "name": "041.我心永恒 — 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/041.我心永恒 — 纯音乐.mp3"
				},
				{
                "track": 40,
                "name": "040.蝴蝶华尔兹(助眠) — 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/040.蝴蝶华尔兹(助眠) — 纯音乐.mp3"
				},
				{
                "track": 39,
                "name": "039.罗密欧与朱丽叶-群星",
                "length": "4:46",
                "file": "唯美纯音乐/039.罗密欧与朱丽叶-群星.mp3"
				},
				{
                "track": 38,
                "name": "038.你离开的真相 — 舒缓睡眠",
                "length": "4:46",
                "file": "唯美纯音乐/038.你离开的真相 — 舒缓睡眠.mp3"
				},
				{
                "track": 37,
                "name": "037.佛教音乐 - 菩提树",
                "length": "4:46",
                "file": "唯美纯音乐/037.佛教音乐 - 菩提树.mp3"
				},
				{
                "track": 36,
                "name": "036.广陵散之笑傲江湖曲 —琴箫合奏)",
                "length": "4:46",
                "file": "唯美纯音乐/036.广陵散之笑傲江湖曲 —琴箫合奏).mp3"
				},
				{
                "track": 35,
                "name": "035.一剪梅 - 中国民乐",
                "length": "4:46",
                "file": "唯美纯音乐/035.一剪梅 - 中国民乐.mp3"
				},
				{
                "track": 34,
                "name": "034.传奇 (琴牵美人吟Ⅱ) - 段银莹",
                "length": "4:46",
                "file": "唯美纯音乐/034.传奇 (琴牵美人吟Ⅱ) - 段银莹.mp3"
				},
				{
                "track": 33,
                "name": "033.森林幻想曲 - Bandari",
                "length": "4:46",
                "file": "唯美纯音乐/033.森林幻想曲 - Bandari.mp3"
				},
				{
                "track": 32,
                "name": "032.夏日香气 - 电视剧原声 (很好听的钢琴曲)",
                "length": "4:46",
                "file": "唯美纯音乐/032.夏日香气 - 电视剧原声 (很好听的钢琴曲).mp3"
				},
				{
                "track": 31,
                "name": "031.人生最美初见时 - 钢琴曲",
                "length": "4:46",
                "file": "唯美纯音乐/031.人生最美初见时 - 钢琴曲.mp3"
				},
				{
                "track": 30,
                "name": "030.西风（排箫）芈月传 - 王备",
                "length": "4:46",
                "file": "唯美纯音乐/030.西风（排箫）芈月传 - 王备.mp3"
				},
				{
                "track": 29,
                "name": "029.风之彩 绝对经典 - 陶笛排萧乐",
                "length": "4:46",
                "file": "唯美纯音乐/029.风之彩 绝对经典 - 陶笛排萧乐.mp3"
				},
				{
                "track": 28,
                "name": "028.星空—理查德·克莱德曼（钢琴）",
                "length": "4:46",
                "file": "唯美纯音乐/028.星空—理查德·克莱德曼（钢琴）.mp3"
				},
				{
                "track": 27,
                "name": "027.梦中的婚礼 - 理查德",
                "length": "4:46",
                "file": "唯美纯音乐/027.梦中的婚礼 - 理查德.mp3"
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