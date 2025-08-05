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
                "track": 266,
                "name": "266.青空",
                "length": "4:46",
                "file": "唯美纯音乐/266.青空.mp3"
				},
				{
                "track": 265,
                "name": "265.AIR-青空（钢琴版）",
                "length": "4:46",
                "file": "唯美纯音乐/265.AIR-青空（钢琴版）.mp3"
				},
				{
                "track": 264,
                "name": "264.牧羊曲",
                "length": "4:46",
                "file": "唯美纯音乐/264.牧羊曲.mp3"
				},
				{
                "track": 263,
                "name": "263.如烟长廊-吉他",
                "length": "4:46",
                "file": "唯美纯音乐/263.如烟长廊-吉他.mp3"
				},
				{
                "track": 262,
                "name": "262.我爱你中国 -小提琴",
                "length": "4:46",
                "file": "唯美纯音乐/262.我爱你中国 -小提琴.mp3"
				},
				{
                "track": 261,
                "name": "261.我和我的祖国-钢琴曲",
                "length": "4:46",
                "file": "唯美纯音乐/261.我和我的祖国-钢琴曲.mp3"
				},
				{
                "track": 260,
                "name": "260.中华通络操-纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/260.中华通络操-纯音乐.mp3"
				},
				{
                "track": 259,
                "name": "259.秋的思念 - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/259.秋的思念 - 纯音乐.mp3"
				},
				{
                "track": 258,
                "name": "258.刹那永恒-纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/258.刹那永恒-纯音乐.mp3"
				},
				{
                "track": 257,
                "name": "257.如梦岁月-纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/257.如梦岁月-纯音乐.mp3"
				},
				{
                "track": 256,
                "name": "256.胡伟立 - 雪千寻",
                "length": "4:46",
                "file": "唯美纯音乐/256.胡伟立 - 雪千寻.mp3"
				},
				{
                "track": 255,
                "name": "255.纯音乐 - 莫失莫忘",
                "length": "4:46",
                "file": "唯美纯音乐/255.纯音乐 - 莫失莫忘.mp3"
				},
				{
                "track": 254,
                "name": "254.胡伟立 - 温馨时刻",
                "length": "4:46",
                "file": "唯美纯音乐/254.胡伟立 - 温馨时刻.mp3"
				},
				{
                "track": 253,
                "name": "253.绿袖子 (Greensleeves) - 理查德",
                "length": "4:46",
                "file": "唯美纯音乐/253.绿袖子 (Greensleeves) - 理查德.mp3"
				},
				{
                "track": 252,
                "name": "252.Always 永远 - Soothing Relaxation",
                "length": "4:46",
                "file": "唯美纯音乐/252.Always 永远 - Soothing Relaxation.mp3"
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