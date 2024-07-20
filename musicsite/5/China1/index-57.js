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
                "track": 272,
                "name": "姜鹏-赢在江湖",
                "length": "4:46",
                "file": "精选/姜鹏-赢在江湖.mp3"
				},
				{
                "track": 271,
                "name": "姜鹏-问佛",
                "length": "4:46",
                "file": "精选/姜鹏-问佛.mp3"
				},
				{
                "track": 270,
                "name": "江涛-愚公移山",
                "length": "4:46",
                "file": "精选/江涛-愚公移山.mp3"
				},
				{
                "track": 269,
                "name": "江美琪-下辈子如果我还记得你",
                "length": "4:46",
                "file": "精选/江美琪-下辈子如果我还记得你.mp3"
				},
				{
                "track": 268,
                "name": "江美琪-亲爱的你怎么不在我身边",
                "length": "4:46",
                "file": "精选/江美琪-亲爱的你怎么不在我身边.mp3"
				},
				{
                "track": 267,
                "name": "剑网3缘起印象曲-眉间雪",
                "length": "4:46",
                "file": "精选/剑网3缘起印象曲-眉间雪.mp3"
				},
				{
                "track": 266,
                "name": "贾乃亮,甜馨-大王叫我来巡山",
                "length": "4:46",
                "file": "精选/贾乃亮,甜馨-大王叫我来巡山.mp3"
				},
				{
                "track": 265,
                "name": "霍尊-卷珠帘",
                "length": "4:46",
                "file": "精选/霍尊-卷珠帘.mp3"
				},
				{
                "track": 264,
                "name": "火箭少女101-卡路里",
                "length": "4:46",
                "file": "精选/火箭少女101-卡路里.mp3"
				},
				{
                "track": 263,
                "name": "黄勇-勇敢勇敢",
                "length": "4:46",
                "file": "精选/黄勇-勇敢勇敢.mp3"
				},
				{
                "track": 262,
                "name": "黄小琥-重来",
                "length": "4:46",
                "file": "精选/黄小琥-重来.mp3"
				},
				{
                "track": 261,
                "name": "黄小琥-顺其自然",
                "length": "4:46",
                "file": "精选/黄小琥-顺其自然.mp3"
				},
				{
                "track": 260,
                "name": "黄小琥-没那么简单",
                "length": "4:46",
                "file": "精选/黄小琥-没那么简单.mp3"
				},
				{
                "track": 259,
                "name": "黄小琥-伴",
                "length": "4:46",
                "file": "精选/黄小琥-伴.mp3"
				},
				{
                "track": 258,
                "name": "黄霄雲-星辰大海",
                "length": "4:46",
                "file": "精选/黄霄雲-星辰大海.mp3"
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