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
                "track": 37,
                "name": "Chunyy-乡间晚风",
                "length": "4:46",
                "file": "纯音乐/Chunyy-乡间晚风.mp3"
				},
				{
                "track": 36,
                "name": "Chunyy-夏日华尔兹",
                "length": "4:46",
                "file": "纯音乐/Chunyy-夏日华尔兹.mp3"
				},
				{
                "track": 35,
                "name": "Chunyy-昔日情怀",
                "length": "4:46",
                "file": "纯音乐/Chunyy-昔日情怀.mp3"
				},
				{
                "track": 34,
                "name": "Chunyy-西藏的月",
                "length": "4:46",
                "file": "纯音乐/Chunyy-西藏的月.mp3"
				},
				{
                "track": 33,
                "name": "Chunyy-西班牙斗牛士进行曲",
                "length": "4:46",
                "file": "纯音乐/Chunyy-西班牙斗牛士进行曲.mp3"
				},
				{
                "track": 32,
                "name": "Chunyy-我的海洋",
                "length": "4:46",
                "file": "纯音乐/Chunyy-我的海洋.mp3"
				},
				{
                "track": 31,
                "name": "Chunyy-万福玛丽亚",
                "length": "4:46",
                "file": "纯音乐/Chunyy-万福玛丽亚.mp3"
				},
				{
                "track": 30,
                "name": "Chunyy-天鹅湖",
                "length": "4:46",
                "file": "纯音乐/Chunyy-天鹅湖.mp3"
				},
				{
                "track": 29,
                "name": "Chunyy-水之轮回",
                "length": "4:46",
                "file": "纯音乐/Chunyy-水之轮回.mp3"
				},
				{
                "track": 28,
                "name": "Chunyy-树蛙之歌",
                "length": "4:46",
                "file": "纯音乐/Chunyy-树蛙之歌.mp3"
				},
				{
                "track": 27,
                "name": "Chunyy-守护你的天使",
                "length": "4:46",
                "file": "纯音乐/Chunyy-守护你的天使.mp3"
				},
				{
                "track": 26,
                "name": "Chunyy-似曾相识",
                "length": "4:46",
                "file": "纯音乐/Chunyy-似曾相识.mp3"
				},
				{
                "track": 25,
                "name": "Chunyy-森林中的一天",
                "length": "4:46",
                "file": "纯音乐/Chunyy-森林中的一天.mp3"
				},
				{
                "track": 24,
                "name": "Chunyy-茉莉花",
                "length": "4:46",
                "file": "纯音乐/Chunyy-茉莉花.mp3"
				},
				{
                "track": 23,
                "name": "Chunyy-绵雪",
                "length": "4:46",
                "file": "纯音乐/Chunyy-绵雪.mp3"
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