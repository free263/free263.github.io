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
                "track": 146,
                "name": "146.大千世界(钢琴) - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/146.大千世界(钢琴) - 纯音乐.mp3"
				},
				{
                "track": 145,
                "name": "145.风光秀丽的小岛 (La Isla Bonita) - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/145.风光秀丽的小岛 (La Isla Bonita) - 纯音乐.mp3"
				},
				{
                "track": 144,
                "name": "144.阿兰胡埃斯之爱 (优美的长笛) - Patrick Gallois",
                "length": "4:46",
                "file": "唯美纯音乐/144.阿兰胡埃斯之爱 (优美的长笛) - Patrick Gallois.mp3"
				},
				{
                "track": 143,
                "name": "143.浪客剑心 (Departure 钢琴+吉他) - 日本ACG",
                "length": "4:46",
                "file": "唯美纯音乐/143.浪客剑心 (Departure 钢琴+吉他) - 日本ACG.mp3"
				},
				{
                "track": 142,
                "name": "142.婚礼钟声 (Wedding Bell 吉他曲) - Depapepe",
                "length": "4:46",
                "file": "唯美纯音乐/142.婚礼钟声 (Wedding Bell 吉他曲) - Depapepe.mp3"
				},
				{
                "track": 141,
                "name": "141.Down By The Salley Gardens (莎莉花园) - James Galway",
                "length": "4:46",
                "file": "唯美纯音乐/141.Down By The Salley Gardens (莎莉花园) - James Galway.mp3"
				},
				{
                "track": 140,
                "name": "140.Your Eyes 你的眼神 - Andrew Jasinski",
                "length": "4:46",
                "file": "唯美纯音乐/140.Your Eyes 你的眼神 - Andrew Jasinski.mp3"
				},
				{
                "track": 139,
                "name": "139.珍宝 (The Treasure) - Bernward Koch",
                "length": "4:46",
                "file": "唯美纯音乐/139.珍宝 (The Treasure) - Bernward Koch.mp3"
				},
				{
                "track": 138,
                "name": "138.我梦见了你 - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/138.我梦见了你 - 纯音乐.mp3"
				},
				{
                "track": 137,
                "name": "137.欲望(Touch of Desire) (琵琶,吟唱) - 吕秀龄",
                "length": "4:46",
                "file": "唯美纯音乐/137.欲望(Touch of Desire) (琵琶,吟唱) - 吕秀龄.mp3"
				},
				{
                "track": 136,
                "name": "136.《卷珠帘》意境钢琴版 - 钢琴曲",
                "length": "4:46",
                "file": "唯美纯音乐/136.《卷珠帘》意境钢琴版 - 钢琴曲.mp3"
				},
				{
                "track": 135,
                "name": "135.莲语的呢喃 - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/135.莲语的呢喃 - 纯音乐.mp3"
				},
				{
                "track": 134,
                "name": "134.Chaconne 恰空舞曲 - 神秘园",
                "length": "4:46",
                "file": "唯美纯音乐/134.Chaconne 恰空舞曲 - 神秘园.mp3"
				},
				{
                "track": 133,
                "name": "133.娜迪亚主旋律 - Chris Phillips",
                "length": "4:46",
                "file": "唯美纯音乐/133.娜迪亚主旋律 - Chris Phillips.mp3"
				},
				{
                "track": 132,
                "name": "132.追梦人 (雪山飞狐主题曲) - 笛子",
                "length": "4:46",
                "file": "唯美纯音乐/132.追梦人 (雪山飞狐主题曲) - 笛子.mp3"
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