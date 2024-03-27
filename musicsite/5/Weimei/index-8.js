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
                "track": 251,
                "name": "251.秋天的色彩 - Soothing Relaxation",
                "length": "4:46",
                "file": "唯美纯音乐/251.秋天的色彩 - Soothing Relaxation.mp3"
				},
				{
                "track": 250,
                "name": "250.一直在我心中 - Udo Vismann",
                "length": "4:46",
                "file": "唯美纯音乐/250.一直在我心中 - Udo Vismann.mp3"
				},
				{
                "track": 249,
                "name": "249.永远不会太晚-雅尼",
                "length": "4:46",
                "file": "唯美纯音乐/249.永远不会太晚-雅尼.mp3"
				},
				{
                "track": 248,
                "name": "248.雨中漫步-雅尼",
                "length": "4:46",
                "file": "唯美纯音乐/248.雨中漫步-雅尼.mp3"
				},
				{
                "track": 247,
                "name": "247.当星星落下时-安菲尔",
                "length": "4:46",
                "file": "唯美纯音乐/247.当星星落下时-安菲尔.mp3"
				},
				{
                "track": 246,
                "name": "246.如果我能告诉你-雅尼",
                "length": "4:46",
                "file": "唯美纯音乐/246.如果我能告诉你-雅尼.mp3"
				},
				{
                "track": 245,
                "name": "245.河西走廊之梦-雅尼",
                "length": "4:46",
                "file": "唯美纯音乐/245.河西走廊之梦-雅尼.mp3"
				},
				{
                "track": 244,
                "name": "244.Sleepless beauty (万有引力) - 浅仑大介",
                "length": "4:46",
                "file": "唯美纯音乐/244.Sleepless beauty (万有引力) - 浅仑大介.mp3"
				},
				{
                "track": 243,
                "name": "243.Pachebel's Canon in D (卡农钢琴曲) - Danny Wright",
                "length": "4:46",
                "file": "唯美纯音乐/243.Pachebel's Canon in D (卡农钢琴曲) - Danny Wright.mp3"
				},
				{
                "track": 242,
                "name": "242.Do You Live, Do You Love (活着而爱着) - Danny Wright",
                "length": "4:46",
                "file": "唯美纯音乐/242.Do You Live, Do You Love (活着而爱着) - Danny Wright.mp3"
				},
				{
                "track": 241,
                "name": "241.Lost my pieces (龙与虎 感人配乐) - 桥本由香利",
                "length": "4:46",
                "file": "唯美纯音乐/241.Lost my pieces (龙与虎 感人配乐) - 桥本由香利.mp3"
				},
				{
                "track": 240,
                "name": "240.散花 - Key Sounds Label",
                "length": "4:46",
                "file": "唯美纯音乐/240.散花 - Key Sounds Label.mp3"
				},
				{
                "track": 239,
                "name": "239.我爱你 Ya Tebya Lubliu (吉他) - Acoustic Alchemy",
                "length": "4:46",
                "file": "唯美纯音乐/239.我爱你 Ya Tebya Lubliu (吉他) - Acoustic Alchemy.mp3"
				},
				{
                "track": 238,
                "name": "238.跨越时代的思念 (钢琴曲) - 和田薰",
                "length": "4:46",
                "file": "唯美纯音乐/238.跨越时代的思念 (钢琴曲) - 和田薰.mp3"
				},
				{
                "track": 237,
                "name": "237.小夜曲 - 舒伯特",
                "length": "4:46",
                "file": "唯美纯音乐/237.小夜曲 - 舒伯特.mp3"
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