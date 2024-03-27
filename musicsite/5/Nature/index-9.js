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
                "track": 102,
                "name": "102.潮起潮落（海风、海浪、钢琴）",
                "length": "4:46",
                "file": "自然之声/102.潮起潮落（海风、海浪、钢琴）.mp3"
				},
				{
                "track": 101,
                "name": "101.湖畔夜色（3D湖水声、鸟鸣、萨克斯、钢琴）",
                "length": "4:46",
                "file": "自然之声/101.湖畔夜色（3D湖水声、鸟鸣、萨克斯、钢琴）.mp3"
				},
				{
                "track": 100,
                "name": "100.青青草原的傍晚（3D音效、虫鸣、短笛、竖琴）",
                "length": "4:46",
                "file": "自然之声/100.青青草原的傍晚（3D音效、虫鸣、短笛、竖琴）.mp3"
				},
				{
                "track": 99,
                "name": "099.我好想你（微风习习、钢琴、木吉他）",
                "length": "4:46",
                "file": "自然之声/099.我好想你（微风习习、钢琴、木吉他）.mp3"
				},
				{
                "track": 98,
                "name": "098.看海（海浪、海鸟、木吉他、钢琴）",
                "length": "4:46",
                "file": "自然之声/098.看海（海浪、海鸟、木吉他、钢琴）.mp3"
				},
				{
                "track": 97,
                "name": "097.爱你 是我做过最好的事（水波、鸟鸣、木吉他、钢琴）",
                "length": "4:46",
                "file": "自然之声/097.爱你 是我做过最好的事（水波、鸟鸣、木吉他、钢琴）.mp3"
				},
				{
                "track": 96,
                "name": "096.心安（缓缓流水、微风、竖琴、长笛、钢琴、大提琴）",
                "length": "4:46",
                "file": "自然之声/096.心安（缓缓流水、微风、竖琴、长笛、钢琴、大提琴）.mp3"
				},
				{
                "track": 95,
                "name": "095.日落的时候（山野虫鸣、木吉他、钢琴、小提琴）",
                "length": "4:46",
                "file": "自然之声/095.日落的时候（山野虫鸣、木吉他、钢琴、小提琴）.mp3"
				},
				{
                "track": 94,
                "name": "094.风中的信（蟋蟀、晚风、钢琴、小提琴）",
                "length": "4:46",
                "file": "自然之声/094.风中的信（蟋蟀、晚风、钢琴、小提琴）.mp3"
				},
				{
                "track": 93,
                "name": "093.飘雪（风浪、钢琴、木吉他、小提琴）",
                "length": "4:46",
                "file": "自然之声/093.飘雪（风浪、钢琴、木吉他、小提琴）.mp3"
				},
				{
                "track": 92,
                "name": "092.一路向北（风浪、长笛、小提琴、钢琴）",
                "length": "4:46",
                "file": "自然之声/092.一路向北（风浪、长笛、小提琴、钢琴）.mp3"
				},
				{
                "track": 91,
                "name": "091.风平浪静（柔情海浪、大提琴、铁琴）",
                "length": "4:46",
                "file": "自然之声/091.风平浪静（柔情海浪、大提琴、铁琴）.mp3"
				},
				{
                "track": 90,
                "name": "090.漂浮的云（鸟鸣、钢琴、八音盒、小提琴）",
                "length": "4:46",
                "file": "自然之声/090.漂浮的云（鸟鸣、钢琴、八音盒、小提琴）.mp3"
				},
				{
                "track": 89,
                "name": "089.童年梦境（蟋蟀、虫鸣、纯钢琴）",
                "length": "4:46",
                "file": "自然之声/089.童年梦境（蟋蟀、虫鸣、纯钢琴）.mp3"
				},
				{
                "track": 88,
                "name": "088.童年梦境（蟋蟀、虫鸣、纯钢琴）",
                "length": "4:46",
                "file": "自然之声/088.童年梦境（蟋蟀、虫鸣、纯钢琴）.mp3"
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