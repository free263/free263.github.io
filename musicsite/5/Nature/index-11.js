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
                "track": 72,
                "name": "072.万事顺心（鸟鸣、风声、水声、钢琴、小提琴）",
                "length": "4:46",
                "file": "自然之声/072.万事顺心（鸟鸣、风声、水声、钢琴、小提琴）.mp3"
				},
				{
                "track": 71,
                "name": "071.夏日微风（习习凉风、宝宝笑声、纯钢琴）",
                "length": "4:46",
                "file": "自然之声/071.夏日微风（习习凉风、宝宝笑声、纯钢琴）.mp3"
				},
				{
                "track": 70,
                "name": "070.喜鹊成双（水波、深山鸟鸣、爵士钢琴、萨克斯）",
                "length": "4:46",
                "file": "自然之声/070.喜鹊成双（水波、深山鸟鸣、爵士钢琴、萨克斯）.mp3"
				},
				{
                "track": 69,
                "name": "069.日不落（蛙鸣、木吉他、钢琴）",
                "length": "4:46",
                "file": "自然之声/069.日不落（蛙鸣、木吉他、钢琴）.mp3"
				},
				{
                "track": 68,
                "name": "068.夜晚的星（蟋蟀、虫鸣、钢琴）",
                "length": "4:46",
                "file": "自然之声/068.夜晚的星（蟋蟀、虫鸣、钢琴）.mp3"
				},
				{
                "track": 67,
                "name": "067.向着光亮那方（流水、鸟鸣、钢琴、长笛）",
                "length": "4:46",
                "file": "自然之声/067.向着光亮那方（流水、鸟鸣、钢琴、长笛）.mp3"
				},
				{
                "track": 66,
                "name": "066.森林晨景（鸟鸣、宝宝学语声、木吉他、钢琴、长笛）",
                "length": "4:46",
                "file": "自然之声/066.森林晨景（鸟鸣、宝宝学语声、木吉他、钢琴、长笛）.mp3"
				},
				{
                "track": 65,
                "name": "065.当春天来到（鸟鸣、钢琴）",
                "length": "4:46",
                "file": "自然之声/065.当春天来到（鸟鸣、钢琴）.mp3"
				},
				{
                "track": 64,
                "name": "064.从冬眠中醒来（流水、钢琴、钟琴、长笛）",
                "length": "4:46",
                "file": "自然之声/064.从冬眠中醒来（流水、钢琴、钟琴、长笛）.mp3"
				},
				{
                "track": 63,
                "name": "063.蓝色海岸线（海浪、潮汐、钢琴、大提琴）",
                "length": "4:46",
                "file": "自然之声/063.蓝色海岸线（海浪、潮汐、钢琴、大提琴）.mp3"
				},
				{
                "track": 62,
                "name": "062.冬日清晨（流水、竖琴、长笛、钢片琴）",
                "length": "4:46",
                "file": "自然之声/062.冬日清晨（流水、竖琴、长笛、钢片琴）.mp3"
				},
				{
                "track": 61,
                "name": "061.我们一家人（鸟鸣、小狗、小猫、钢琴、贝斯）",
                "length": "4:46",
                "file": "自然之声/061.我们一家人（鸟鸣、小狗、小猫、钢琴、贝斯）.mp3"
				},
				{
                "track": 60,
                "name": "060.梦游记（虫鸣、弦乐四重奏、钢琴）",
                "length": "4:46",
                "file": "自然之声/060.梦游记（虫鸣、弦乐四重奏、钢琴）.mp3"
				},
				{
                "track": 59,
                "name": "059.壁炉（火苗、小猫、钢琴、弦乐器）",
                "length": "4:46",
                "file": "自然之声/059.壁炉（火苗、小猫、钢琴、弦乐器）.mp3"
				},
				{
                "track": 58,
                "name": "058.暖暖的东风（鸟鸣、脚步声、钢琴、钟琴）",
                "length": "4:46",
                "file": "自然之声/058.暖暖的东风（鸟鸣、脚步声、钢琴、钟琴）.mp3"
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