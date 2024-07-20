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
                "track": 127,
                "name": "理查德 克莱德曼-思乡曲",
                "length": "4:46",
                "file": "纯音乐/理查德 克莱德曼-思乡曲.mp3"
				},
				{
                "track": 126,
                "name": "理查德 克莱德曼-水边的阿狄丽娜",
                "length": "4:46",
                "file": "纯音乐/理查德 克莱德曼-水边的阿狄丽娜.mp3"
				},
				{
                "track": 125,
                "name": "理查德 克莱德曼-少女的祈祷",
                "length": "4:46",
                "file": "纯音乐/理查德 克莱德曼-少女的祈祷.mp3"
				},
				{
                "track": 124,
                "name": "理查德 克莱德曼-伤感乐曲",
                "length": "4:46",
                "file": "纯音乐/理查德 克莱德曼-伤感乐曲.mp3"
				},
				{
                "track": 123,
                "name": "理查德 克莱德曼-柔如彩虹",
                "length": "4:46",
                "file": "纯音乐/理查德 克莱德曼-柔如彩虹.mp3"
				},
				{
                "track": 122,
                "name": "理查德 克莱德曼-秋日私语",
                "length": "4:46",
                "file": "纯音乐/理查德 克莱德曼-秋日私语.mp3"
				},
				{
                "track": 121,
                "name": "理查德 克莱德曼-乒乓之恋",
                "length": "4:46",
                "file": "纯音乐/理查德 克莱德曼-乒乓之恋.mp3"
				},
				{
                "track": 120,
                "name": "理查德 克莱德曼-秘密的庭院",
                "length": "4:46",
                "file": "纯音乐/理查德 克莱德曼-秘密的庭院.mp3"
				},
				{
                "track": 119,
                "name": "理查德 克莱德曼-梦中的鸟",
                "length": "4:46",
                "file": "纯音乐/理查德 克莱德曼-梦中的鸟.mp3"
				},
				{
                "track": 118,
                "name": "理查德 克莱德曼-梦中的婚礼",
                "length": "4:46",
                "file": "纯音乐/理查德 克莱德曼-梦中的婚礼.mp3"
				},
				{
                "track": 117,
                "name": "理查德 克莱德曼-玫瑰色的人生",
                "length": "4:46",
                "file": "纯音乐/理查德 克莱德曼-玫瑰色的人生.mp3"
				},
				{
                "track": 116,
                "name": "理查德 克莱德曼-罗密欧与朱丽叶",
                "length": "4:46",
                "file": "纯音乐/理查德 克莱德曼-罗密欧与朱丽叶.mp3"
				},
				{
                "track": 115,
                "name": "理查德 克莱德曼-蓝色狂想曲",
                "length": "4:46",
                "file": "纯音乐/理查德 克莱德曼-蓝色狂想曲.mp3"
				},
				{
                "track": 114,
                "name": "理查德 克莱德曼-蓝色的爱",
                "length": "4:46",
                "file": "纯音乐/理查德 克莱德曼-蓝色的爱.mp3"
				},
				{
                "track": 113,
                "name": "理查德 克莱德曼-欢乐之歌",
                "length": "4:46",
                "file": "纯音乐/理查德 克莱德曼-欢乐之歌.mp3"
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