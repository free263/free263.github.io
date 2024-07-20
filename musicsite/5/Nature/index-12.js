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
                "track": 57,
                "name": "057.冬至（落叶、钢琴、长笛、单簧管）",
                "length": "4:46",
                "file": "自然之声/057.冬至（落叶、钢琴、长笛、单簧管）.mp3"
				},
				{
                "track": 56,
                "name": "056.寻找自我之旅（鸟鸣、自行车、钢琴）",
                "length": "4:46",
                "file": "自然之声/056.寻找自我之旅（鸟鸣、自行车、钢琴）.mp3"
				},
				{
                "track": 55,
                "name": "055.躲雨（雨声、钢琴）",
                "length": "4:46",
                "file": "自然之声/055.躲雨（雨声、钢琴）.mp3"
				},
				{
                "track": 54,
                "name": "054.家乡（脚步声、电车、钢琴、贝斯、钟琴）",
                "length": "4:46",
                "file": "自然之声/054.家乡（脚步声、电车、钢琴、贝斯、钟琴）.mp3"
				},
				{
                "track": 53,
                "name": "053.明天之后（微风、长笛、钢琴）",
                "length": "4:46",
                "file": "自然之声/053.明天之后（微风、长笛、钢琴）.mp3"
				},
				{
                "track": 52,
                "name": "052.舞动的花朵（风、鸟鸣、钢琴、钟琴、马林巴、钢片琴）",
                "length": "4:46",
                "file": "自然之声/052.舞动的花朵（风、鸟鸣、钢琴、钟琴、马林巴、钢片琴）.mp3"
				},
				{
                "track": 51,
                "name": "051.小可爱（宝宝笑声、钢琴、钢片琴、长笛、黑管）",
                "length": "4:46",
                "file": "自然之声/051.小可爱（宝宝笑声、钢琴、钢片琴、长笛、黑管）.mp3"
				},
				{
                "track": 50,
                "name": "050.兜风（脚步声、汽车、风声、电子琴、马林巴、钢片琴）",
                "length": "4:46",
                "file": "自然之声/050.兜风（脚步声、汽车、风声、电子琴、马林巴、钢片琴）.mp3"
				},
				{
                "track": 49,
                "name": "049.流星花园（鸟鸣、孩子笑声、钢琴、贝斯、钢片琴、大提琴、小提琴、中提琴）",
                "length": "4:46",
                "file": "自然之声/049.流星花园（鸟鸣、孩子笑声、钢琴、贝斯、钢片琴、大提琴、小提琴、中提琴）.mp3"
				},
				{
                "track": 48,
                "name": "048.远走（鸟鸣、钢琴、提琴）",
                "length": "4:46",
                "file": "自然之声/048.远走（鸟鸣、钢琴、提琴）.mp3"
				},
				{
                "track": 47,
                "name": "047.心若无尘（水波、竖琴、短笛）",
                "length": "4:46",
                "file": "自然之声/047.心若无尘（水波、竖琴、短笛）.mp3"
				},
				{
                "track": 46,
                "name": "046.小森林（鸟鸣、树叶、钢片琴、马林巴、长笛、竖琴、小提琴、大提琴）",
                "length": "4:46",
                "file": "自然之声/046.小森林（鸟鸣、树叶、钢片琴、马林巴、长笛、竖琴、小提琴、大提琴）.mp3"
				},
				{
                "track": 45,
                "name": "045.送别（风声、流水、钢琴、提琴、口琴）",
                "length": "4:46",
                "file": "自然之声/045.送别（风声、流水、钢琴、提琴、口琴）.mp3"
				},
				{
                "track": 44,
                "name": "044.黎明（溪水潺潺、钢琴）",
                "length": "4:46",
                "file": "自然之声/044.黎明（溪水潺潺、钢琴）.mp3"
				},
				{
                "track": 43,
                "name": "043.时光的痕迹（沥沥小雨、纯钢琴）",
                "length": "4:46",
                "file": "自然之声/043.时光的痕迹（沥沥小雨、纯钢琴）.mp3"
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