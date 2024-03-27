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
                "track": 197,
                "name": "凤凰传奇-自由飞翔",
                "length": "4:46",
                "file": "精选/凤凰传奇-自由飞翔.mp3"
				},
				{
                "track": 196,
                "name": "凤凰传奇-月亮之上",
                "length": "4:46",
                "file": "精选/凤凰传奇-月亮之上.mp3"
				},
				{
                "track": 195,
                "name": "凤凰传奇-奢香夫人",
                "length": "4:46",
                "file": "精选/凤凰传奇-奢香夫人.mp3"
				},
				{
                "track": 194,
                "name": "凤凰传奇-荷塘月色",
                "length": "4:46",
                "file": "精选/凤凰传奇-荷塘月色.mp3"
				},
				{
                "track": 193,
                "name": "凤凰传奇-海底（Live）",
                "length": "4:46",
                "file": "精选/凤凰传奇-海底（Live）.mp3"
				},
				{
                "track": 192,
                "name": "凤飞飞-追梦人",
                "length": "4:46",
                "file": "精选/凤飞飞-追梦人.mp3"
				},
				{
                "track": 191,
                "name": "凤飞飞-莫让红颜守空尘",
                "length": "4:46",
                "file": "精选/凤飞飞-莫让红颜守空尘.mp3"
				},
				{
                "track": 190,
                "name": "冯晓泉-冰糖葫芦",
                "length": "4:46",
                "file": "精选/冯晓泉-冰糖葫芦.mp3"
				},
				{
                "track": 189,
                "name": "费玉清-一剪梅",
                "length": "4:46",
                "file": "精选/费玉清-一剪梅.mp3"
				},
				{
                "track": 188,
                "name": "费玉清-梦驼铃",
                "length": "4:46",
                "file": "精选/费玉清-梦驼铃.mp3"
				},
				{
                "track": 187,
                "name": "飞儿乐团-我们的爱",
                "length": "4:46",
                "file": "精选/飞儿乐团-我们的爱.mp3"
				},
				{
                "track": 186,
                "name": "飞儿乐团-千年之恋",
                "length": "4:46",
                "file": "精选/飞儿乐团-千年之恋.mp3"
				},
				{
                "track": 185,
                "name": "飞儿乐团-你的微笑",
                "length": "4:46",
                "file": "精选/飞儿乐团-你的微笑.mp3"
				},
				{
                "track": 184,
                "name": "范逸臣-放生",
                "length": "4:46",
                "file": "精选/范逸臣-放生.mp3"
				},
				{
                "track": 183,
                "name": "范晓萱-雪人",
                "length": "4:46",
                "file": "精选/范晓萱-雪人.mp3"
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