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
                "track": 161,
                "name": "161.在你的怀抱中最安全 - Kevin Kern",
                "length": "4:46",
                "file": "唯美纯音乐/161.在你的怀抱中最安全 - Kevin Kern.mp3"
				},
				{
                "track": 160,
                "name": "160.晴了的某日 - 全素妍",
                "length": "4:46",
                "file": "唯美纯音乐/160.晴了的某日 - 全素妍.mp3"
				},
				{
                "track": 159,
                "name": "159.Memories 回忆 - Wendi",
                "length": "4:46",
                "file": "唯美纯音乐/159.Memories 回忆 - Wendi.mp3"
				},
				{
                "track": 158,
                "name": "158.爱尔兰晨风(笛) - 陈悦",
                "length": "4:46",
                "file": "唯美纯音乐/158.爱尔兰晨风(笛) - 陈悦.mp3"
				},
				{
                "track": 157,
                "name": "157.风之诗 - 吉他名曲",
                "length": "4:46",
                "file": "唯美纯音乐/157.风之诗 - 吉他名曲.mp3"
				},
				{
                "track": 156,
                "name": "156.生活的乐趣 (The Joy Of Life) - Kenny G",
                "length": "4:46",
                "file": "唯美纯音乐/156.生活的乐趣 (The Joy Of Life) - Kenny G.mp3"
				},
				{
                "track": 155,
                "name": "155.盛开成花树 - 喵步小雨中",
                "length": "4:46",
                "file": "唯美纯音乐/155.盛开成花树 - 喵步小雨中.mp3"
				},
				{
                "track": 154,
                "name": "154.在那遥远的地方 (萨克斯) - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/154.在那遥远的地方 (萨克斯) - 纯音乐.mp3"
				},
				{
                "track": 153,
                "name": "153.唯美浪漫的纯音乐 N°025 - Relaxdaily",
                "length": "4:46",
                "file": "唯美纯音乐/153.唯美浪漫的纯音乐 N°025 - Relaxdaily.mp3"
				},
				{
                "track": 152,
                "name": "152.威尼斯天使 (Forever after) - 竖琴",
                "length": "4:46",
                "file": "唯美纯音乐/152.威尼斯天使 (Forever after) - 竖琴.mp3"
				},
				{
                "track": 151,
                "name": "151.闪烁的星星 - 纯音乐",
                "length": "4:46",
                "file": "唯美纯音乐/151.闪烁的星星 - 纯音乐.mp3"
				},
				{
                "track": 150,
                "name": "150.永远同在 - 宗次郎",
                "length": "4:46",
                "file": "唯美纯音乐/150.永远同在 - 宗次郎.mp3"
				},
				{
                "track": 149,
                "name": "149.通往幸福的路 (Path To Happiness) - Kondor",
                "length": "4:46",
                "file": "唯美纯音乐/149.通往幸福的路 (Path To Happiness) - Kondor.mp3"
				},
				{
                "track": 148,
                "name": "148.穿越时空的思念 - 和田薰",
                "length": "4:46",
                "file": "唯美纯音乐/148.穿越时空的思念 - 和田薰.mp3"
				},
				{
                "track": 147,
                "name": "147.送别 - 钢琴曲",
                "length": "4:46",
                "file": "唯美纯音乐/147.送别 - 钢琴曲.mp3"
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