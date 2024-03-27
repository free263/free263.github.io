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
                "track": 71,
                "name": "071.孤独的巡礼 ，真实的自己-唯美纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/071.孤独的巡礼 ，真实的自己-唯美纯音乐.mp3"
				},
				{
                "track": 70,
                "name": "070.月光仙子 (Princess Of The Moon) - 班得瑞",
                "length": "4:46",
                "file": "唯美纯音乐/070.月光仙子 (Princess Of The Moon) - 班得瑞.mp3"
				},
				{
                "track": 69,
                "name": "069.一帘幽梦(古筝) - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/069.一帘幽梦(古筝) - 纯音乐.mp3"
				},
				{
                "track": 68,
                "name": "068.Wish (神思者的哀伤和唯美) - 神思者",
                "length": "4:46",
                "file": "唯美纯音乐/068.Wish (神思者的哀伤和唯美) - 神思者.mp3"
				},
				{
                "track": 67,
                "name": "067.永远同在 - 八音盒",
                "length": "4:46",
                "file": "唯美纯音乐/067.永远同在 - 八音盒.mp3"
				},
				{
                "track": 66,
                "name": "066.静静的雪 (Snow) - 班得瑞",
                "length": "4:46",
                "file": "唯美纯音乐/066.静静的雪 (Snow) - 班得瑞.mp3"
				},
				{
                "track": 65,
                "name": "065.蝶恋花 - 二胡版",
                "length": "4:46",
                "file": "唯美纯音乐/065.蝶恋花 - 二胡版.mp3"
				},
				{
                "track": 64,
                "name": "064.望天 (来不及说我爱你插曲) - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/064.望天 (来不及说我爱你插曲) - 纯音乐.mp3"
				},
				{
                "track": 63,
                "name": "063.一切为了你 (Everything I Do) - 班得瑞",
                "length": "4:46",
                "file": "唯美纯音乐/063.一切为了你 (Everything I Do) - 班得瑞.mp3"
				},
				{
                "track": 62,
                "name": "062.偏偏喜欢你 (钢琴) - 赵海洋",
                "length": "4:46",
                "file": "唯美纯音乐/062.偏偏喜欢你 (钢琴) - 赵海洋.mp3"
				},
				{
                "track": 61,
                "name": "061.舒伯特小夜曲 (世界名曲) - 舒伯特",
                "length": "4:46",
                "file": "唯美纯音乐/061.舒伯特小夜曲 (世界名曲) - 舒伯特.mp3"
				},
				{
                "track": 60,
                "name": "060.三个人的时光 (天之痕) - 吴欣睿",
                "length": "4:46",
                "file": "唯美纯音乐/060.三个人的时光 (天之痕) - 吴欣睿.mp3"
				},
				{
                "track": 59,
                "name": "059.寂色 (绝美的小提琴曲) - 神秘园",
                "length": "4:46",
                "file": "唯美纯音乐/059.寂色 (绝美的小提琴曲) - 神秘园.mp3"
				},
				{
                "track": 58,
                "name": "058.Adagio 柔板 - 神秘园",
                "length": "4:46",
                "file": "唯美纯音乐/058.Adagio 柔板 - 神秘园.mp3"
				},
				{
                "track": 57,
                "name": "057.无尽地平线 (Endless Horizon) - 班得瑞",
                "length": "4:46",
                "file": "唯美纯音乐/057.无尽地平线 (Endless Horizon) - 班得瑞.mp3"
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