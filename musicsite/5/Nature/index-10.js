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
                "track": 87,
                "name": "087.萤火虫之歌（虫鸣、钢琴、竖琴）",
                "length": "4:46",
                "file": "自然之声/087.萤火虫之歌（虫鸣、钢琴、竖琴）.mp3"
				},
				{
                "track": 86,
                "name": "086.晚歌（虫鸣、纯钢琴）",
                "length": "4:46",
                "file": "自然之声/086.晚歌（虫鸣、纯钢琴）.mp3"
				},
				{
                "track": 85,
                "name": "085.星河长明（仲夏虫鸣、纯钢琴）",
                "length": "4:46",
                "file": "自然之声/085.星河长明（仲夏虫鸣、纯钢琴）.mp3"
				},
				{
                "track": 84,
                "name": "084.候鸟的生活（森林鸟鸣、钢琴、大提琴）",
                "length": "4:46",
                "file": "自然之声/084.候鸟的生活（森林鸟鸣、钢琴、大提琴）.mp3"
				},
				{
                "track": 83,
                "name": "083.待凛冬离去（春日鸟鸣、钢琴、小提琴）",
                "length": "4:46",
                "file": "自然之声/083.待凛冬离去（春日鸟鸣、钢琴、小提琴）.mp3"
				},
				{
                "track": 82,
                "name": "082.江河共余生（鸟鸣、微风、钢琴、小提琴）",
                "length": "4:46",
                "file": "自然之声/082.江河共余生（鸟鸣、微风、钢琴、小提琴）.mp3"
				},
				{
                "track": 81,
                "name": "081.念念回首（涟漪、翠鸟声、纯钢琴）",
                "length": "4:46",
                "file": "自然之声/081.念念回首（涟漪、翠鸟声、纯钢琴）.mp3"
				},
				{
                "track": 80,
                "name": "080.山顶日出（流水声、手风琴、短笛、提琴）",
                "length": "4:46",
                "file": "自然之声/080.山顶日出（流水声、手风琴、短笛、提琴）.mp3"
				},
				{
                "track": 79,
                "name": "079.日出（早晨山顶、钢琴、竖笛）",
                "length": "4:46",
                "file": "自然之声/079.日出（早晨山顶、钢琴、竖笛）.mp3"
				},
				{
                "track": 78,
                "name": "078.雨后的天空（春雷、蛙鸣、钢琴）",
                "length": "4:46",
                "file": "自然之声/078.雨后的天空（春雷、蛙鸣、钢琴）.mp3"
				},
				{
                "track": 77,
                "name": "077.牵牛花（啾啾鸟鸣、钢琴）",
                "length": "4:46",
                "file": "自然之声/077.牵牛花（啾啾鸟鸣、钢琴）.mp3"
				},
				{
                "track": 76,
                "name": "076.想见你（缓缓流水、钢琴、大提琴）",
                "length": "4:46",
                "file": "自然之声/076.想见你（缓缓流水、钢琴、大提琴）.mp3"
				},
				{
                "track": 75,
                "name": "075.世界尽头与冷酷仙境（海风、波涛、钢琴、提琴）",
                "length": "4:46",
                "file": "自然之声/075.世界尽头与冷酷仙境（海风、波涛、钢琴、提琴）.mp3"
				},
				{
                "track": 74,
                "name": "074.从你的全世界路过（海鸟、潮汐、钢琴）",
                "length": "4:46",
                "file": "自然之声/074.从你的全世界路过（海鸟、潮汐、钢琴）.mp3"
				},
				{
                "track": 73,
                "name": "073.晨思前奏曲（篝火冉冉、纯钢琴）",
                "length": "4:46",
                "file": "自然之声/073.晨思前奏曲（篝火冉冉、纯钢琴）.mp3"
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