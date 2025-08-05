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
                "track": 902,
                "name": "周传雄-黄昏",
                "length": "4:46",
                "file": "精选/周传雄-黄昏.mp3"
				},
				{
                "track": 901,
                "name": "周冰倩-真的好想你",
                "length": "4:46",
                "file": "精选/周冰倩-真的好想你.mp3"
				},
				{
                "track": 900,
                "name": "周笔畅-笔记",
                "length": "4:46",
                "file": "精选/周笔畅-笔记.mp3"
				},
				{
                "track": 899,
                "name": "钟镇涛-只要你过得比我好",
                "length": "4:46",
                "file": "精选/钟镇涛-只要你过得比我好.mp3"
				},
				{
                "track": 898,
                "name": "中岛美嘉-雪華",
                "length": "4:46",
                "file": "精选/中岛美嘉-雪華.mp3"
				},
				{
                "track": 897,
                "name": "指尖笑-不问别离",
                "length": "4:46",
                "file": "精选/指尖笑-不问别离.mp3"
				},
				{
                "track": 896,
                "name": "指尖笑-不问ciaga(不问别离)",
                "length": "4:46",
                "file": "精选/指尖笑-不问ciaga(不问别离).mp3"
				},
				{
                "track": 895,
                "name": "郑智化-星星点灯",
                "length": "4:46",
                "file": "精选/郑智化-星星点灯.mp3"
				},
				{
                "track": 894,
                "name": "郑智化-水手",
                "length": "4:46",
                "file": "精选/郑智化-水手.mp3"
				},
				{
                "track": 893,
                "name": "郑源-怎么会狠心伤害我",
                "length": "4:46",
                "file": "精选/郑源-怎么会狠心伤害我.mp3"
				},
				{
                "track": 892,
                "name": "郑源-寒江雪",
                "length": "4:46",
                "file": "精选/郑源-寒江雪.mp3"
				},
				{
                "track": 891,
                "name": "郑源-包容",
                "length": "4:46",
                "file": "精选/郑源-包容.mp3"
				},
				{
                "track": 890,
                "name": "郑伊健-友情岁月",
                "length": "4:46",
                "file": "精选/郑伊健-友情岁月.mp3"
				},
				{
                "track": 889,
                "name": "郑伊健-虫儿飞",
                "length": "4:46",
                "file": "精选/郑伊健-虫儿飞.mp3"
				},
				{
                "track": 888,
                "name": "郑秀文-眉飞色舞",
                "length": "4:46",
                "file": "精选/郑秀文-眉飞色舞.mp3"
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