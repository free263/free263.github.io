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
                "track": 112,
                "name": "理查德 克莱德曼-欢乐颂",
                "length": "4:46",
                "file": "纯音乐/理查德 克莱德曼-欢乐颂.mp3"
				},
				{
                "track": 111,
                "name": "理查德 克莱德曼-海边的星空",
                "length": "4:46",
                "file": "纯音乐/理查德 克莱德曼-海边的星空.mp3"
				},
				{
                "track": 110,
                "name": "理查德 克莱德曼-海边的祈祷",
                "length": "4:46",
                "file": "纯音乐/理查德 克莱德曼-海边的祈祷.mp3"
				},
				{
                "track": 109,
                "name": "理查德 克莱德曼-给母亲的信",
                "length": "4:46",
                "file": "纯音乐/理查德 克莱德曼-给母亲的信.mp3"
				},
				{
                "track": 108,
                "name": "理查德 克莱德曼-出埃及记",
                "length": "4:46",
                "file": "纯音乐/理查德 克莱德曼-出埃及记.mp3"
				},
				{
                "track": 107,
                "name": "理查德 克莱德曼-爱之梦",
                "length": "4:46",
                "file": "纯音乐/理查德 克莱德曼-爱之梦.mp3"
				},
				{
                "track": 106,
                "name": "理查德 克莱德曼-爱的协奏曲",
                "length": "4:46",
                "file": "纯音乐/理查德 克莱德曼-爱的协奏曲.mp3"
				},
				{
                "track": 105,
                "name": "理查德 克莱德曼-爱的纪念",
                "length": "4:46",
                "file": "纯音乐/理查德 克莱德曼-爱的纪念.mp3"
				},
				{
                "track": 104,
                "name": "李斯特-钟",
                "length": "4:46",
                "file": "纯音乐/李斯特-钟.mp3"
				},
				{
                "track": 103,
                "name": "浪客剑心-In Memories “A boy meets The Man”",
                "length": "4:46",
                "file": "纯音乐/浪客剑心-In Memories “A boy meets The Man”.mp3"
				},
				{
                "track": 102,
                "name": "凯文柯恩-走过绿意",
                "length": "4:46",
                "file": "纯音乐/凯文柯恩-走过绿意.mp3"
				},
				{
                "track": 101,
                "name": "久石让-天空之城",
                "length": "4:46",
                "file": "纯音乐/久石让-天空之城.mp3"
				},
				{
                "track": 100,
                "name": "宫崎骏 龙猫-水晶音乐",
                "length": "4:46",
                "file": "纯音乐/宫崎骏 龙猫-水晶音乐.mp3"
				},
				{
                "track": 99,
                "name": "杜普雷-殇",
                "length": "4:46",
                "file": "纯音乐/杜普雷-殇.mp3"
				},
				{
                "track": 98,
                "name": "贝多芬-月光奏鸣曲",
                "length": "4:46",
                "file": "纯音乐/贝多芬-月光奏鸣曲.mp3"
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