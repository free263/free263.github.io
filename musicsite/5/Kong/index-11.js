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
                "track": 22,
                "name": "Chunyy-梁祝之化蝶 笛子",
                "length": "4:46",
                "file": "纯音乐/Chunyy-梁祝之化蝶 笛子.mp3"
				},
				{
                "track": 21,
                "name": "Chunyy-蓝色的爱",
                "length": "4:46",
                "file": "纯音乐/Chunyy-蓝色的爱.mp3"
				},
				{
                "track": 20,
                "name": "Chunyy-卡农钢琴曲",
                "length": "4:46",
                "file": "纯音乐/Chunyy-卡农钢琴曲.mp3"
				},
				{
                "track": 19,
                "name": "Chunyy-卡布里的月光",
                "length": "4:46",
                "file": "纯音乐/Chunyy-卡布里的月光.mp3"
				},
				{
                "track": 18,
                "name": "Chunyy-火宵之月",
                "length": "4:46",
                "file": "纯音乐/Chunyy-火宵之月.mp3"
				},
				{
                "track": 17,
                "name": "Chunyy-很好听",
                "length": "4:46",
                "file": "纯音乐/Chunyy-很好听.mp3"
				},
				{
                "track": 16,
                "name": "Chunyy-和兰花在一起",
                "length": "4:46",
                "file": "纯音乐/Chunyy-和兰花在一起.mp3"
				},
				{
                "track": 15,
                "name": "Chunyy-格里格索尔维格之歌",
                "length": "4:46",
                "file": "纯音乐/Chunyy-格里格索尔维格之歌.mp3"
				},
				{
                "track": 14,
                "name": "Chunyy-风中之尘",
                "length": "4:46",
                "file": "纯音乐/Chunyy-风中之尘.mp3"
				},
				{
                "track": 13,
                "name": "Chunyy-风的气息",
                "length": "4:46",
                "file": "纯音乐/Chunyy-风的气息.mp3"
				},
				{
                "track": 12,
                "name": "Chunyy-飞鼠溪",
                "length": "4:46",
                "file": "纯音乐/Chunyy-飞鼠溪.mp3"
				},
				{
                "track": 11,
                "name": "Chunyy-断情殇",
                "length": "4:46",
                "file": "纯音乐/Chunyy-断情殇.mp3"
				},
				{
                "track": 10,
                "name": "Chunyy-第六感生死恋",
                "length": "4:46",
                "file": "纯音乐/Chunyy-第六感生死恋.mp3"
				},
				{
                "track": 9,
                "name": "Chunyy-大溪地清流 米奴哀舞",
                "length": "4:46",
                "file": "纯音乐/Chunyy-大溪地清流 米奴哀舞.mp3"
				},
				{
                "track": 8,
                "name": "Chunyy-春之声圆舞曲 古典钢琴",
                "length": "4:46",
                "file": "纯音乐/Chunyy-春之声圆舞曲 古典钢琴.mp3"
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