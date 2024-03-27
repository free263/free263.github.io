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
                "track": 206,
                "name": "206.秋～華恋～ - α·Pav",
                "length": "4:46",
                "file": "唯美纯音乐/206.秋～華恋～ - α·Pav.mp3"
				},
				{
                "track": 205,
                "name": "205.别说我的眼泪你无所谓 (钢琴) - 王喆",
                "length": "4:46",
                "file": "唯美纯音乐/205.别说我的眼泪你无所谓 (钢琴) - 王喆.mp3"
				},
				{
                "track": 204,
                "name": "204.落日大道 - Guido Negraszus",
                "length": "4:46",
                "file": "唯美纯音乐/204.落日大道 - Guido Negraszus.mp3"
				},
				{
                "track": 203,
                "name": "203.玛奇朵飘浮 (手风琴) - 王雁盟",
                "length": "4:46",
                "file": "唯美纯音乐/203.玛奇朵飘浮 (手风琴) - 王雁盟.mp3"
				},
				{
                "track": 202,
                "name": "202.神秘园之歌 钢琴曲 - 赵海洋",
                "length": "4:46",
                "file": "唯美纯音乐/202.神秘园之歌 钢琴曲 - 赵海洋.mp3"
				},
				{
                "track": 201,
                "name": "201.当我遇 - 甘仕良",
                "length": "4:46",
                "file": "唯美纯音乐/201.当我遇 - 甘仕良.mp3"
				},
				{
                "track": 200,
                "name": "200.季节的轮回 - 奥户巴寿",
                "length": "4:46",
                "file": "唯美纯音乐/200.季节的轮回 - 奥户巴寿.mp3"
				},
				{
                "track": 199,
                "name": "199.美丽的神话 - Pure Music",
                "length": "4:46",
                "file": "唯美纯音乐/199.美丽的神话 - Pure Music.mp3"
				},
				{
                "track": 198,
                "name": "198.你的微笑 (Tu Sonrisa 微风吉他二重奏) - La Vienta",
                "length": "4:46",
                "file": "唯美纯音乐/198.你的微笑 (Tu Sonrisa 微风吉他二重奏) - La Vienta.mp3"
				},
				{
                "track": 197,
                "name": "197.小酒窝钢琴版 - 王喆",
                "length": "4:46",
                "file": "唯美纯音乐/197.小酒窝钢琴版 - 王喆.mp3"
				},
				{
                "track": 196,
                "name": "196.After the Rain (雨后) - Kevin Kern",
                "length": "4:46",
                "file": "唯美纯音乐/196.After the Rain (雨后) - Kevin Kern.mp3"
				},
				{
                "track": 195,
                "name": "195.寂静之声 (吉他) - 明仔",
                "length": "4:46",
                "file": "唯美纯音乐/195.寂静之声 (吉他) - 明仔.mp3"
				},
				{
                "track": 194,
                "name": "194.Between Worlds (带有力量的宁静) - Roger Subirana",
                "length": "4:46",
                "file": "唯美纯音乐/194.Between Worlds (带有力量的宁静) - Roger Subirana.mp3"
				},
				{
                "track": 193,
                "name": "193.阿兰胡埃斯协奏曲 - Julian Bream",
                "length": "4:46",
                "file": "唯美纯音乐/193.阿兰胡埃斯协奏曲 - Julian Bream.mp3"
				},
				{
                "track": 192,
                "name": "192.寂静之声 (吉他) - 明仔",
                "length": "4:46",
                "file": "唯美纯音乐/192.寂静之声 (吉他) - 明仔.mp3"
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