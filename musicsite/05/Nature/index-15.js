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
                "track": 12,
                "name": "012.轻轻的脚步声（鸟鸣、狗吠、脚步声、钢琴）",
                "length": "4:46",
                "file": "自然之声/012.轻轻的脚步声（鸟鸣、狗吠、脚步声、钢琴）.mp3"
				},
				{
                "track": 11,
                "name": "011.摇篮（潮汐、虫鸣、钢琴)",
                "length": "4:46",
                "file": "自然之声/011.摇篮（潮汐、虫鸣、钢琴).mp3"
				},
				{
                "track": 10,
                "name": "010.渔歌（钓鱼、水流、竖琴）",
                "length": "4:46",
                "file": "自然之声/010.渔歌（钓鱼、水流、竖琴）.mp3"
				},
				{
                "track": 9,
                "name": "009.再遇（雨声、钢琴、马林巴、管风琴、竖琴、弦乐、小钹）",
                "length": "4:46",
                "file": "自然之声/009.再遇（雨声、钢琴、马林巴、管风琴、竖琴、弦乐、小钹）.mp3"
				},
				{
                "track": 8,
                "name": "008.雨季（雨声、马林巴、钢片琴、竖琴）",
                "length": "4:46",
                "file": "自然之声/008.雨季（雨声、马林巴、钢片琴、竖琴）.mp3"
				},
				{
                "track": 7,
                "name": "007.下班（轨道的当啷声、脚步声、吉他、钟琴、贝斯、长笛、架子鼓、钢琴）",
                "length": "4:46",
                "file": "自然之声/007.下班（轨道的当啷声、脚步声、吉他、钟琴、贝斯、长笛、架子鼓、钢琴）.mp3"
				},
				{
                "track": 6,
                "name": "006.小晴（潮汐、鸟鸣、马林巴、钢琴、钢片琴）",
                "length": "4:46",
                "file": "自然之声/006.小晴（潮汐、鸟鸣、马林巴、钢琴、钢片琴）.mp3"
				},
				{
                "track": 5,
                "name": "005.梦见你（呼吸声、呼噜声、钢琴、弦乐器）",
                "length": "4:46",
                "file": "自然之声/005.梦见你（呼吸声、呼噜声、钢琴、弦乐器）.mp3"
				},
				{
                "track": 4,
                "name": "004.心语（海浪、钢琴、大提琴）",
                "length": "4:46",
                "file": "自然之声/004.心语（海浪、钢琴、大提琴）.mp3"
				},
				{
                "track": 3,
                "name": "003.山里农家（风吹稻田、鸟鸣、马林巴、钢片琴、钢琴、弦乐器）",
                "length": "4:46",
                "file": "自然之声/003.山里农家（风吹稻田、鸟鸣、马林巴、钢片琴、钢琴、弦乐器）.mp3"
				},
				{
                "track": 2,
                "name": "002.下雨天（下雨、钢琴、钢片琴、长笛、单簧管）",
                "length": "4:46",
                "file": "自然之声/002.下雨天（下雨、钢琴、钢片琴、长笛、单簧管）.mp3"
				},
				{
                "track": 1,
                "name": "001.阵雨（雨声、电视卡顿、钢琴、马林巴、弦乐器、竖琴、钢片琴）",
                "length": "4:46",
                "file": "自然之声/001.阵雨（雨声、电视卡顿、钢琴、马林巴、弦乐器、竖琴、钢片琴）.mp3"
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