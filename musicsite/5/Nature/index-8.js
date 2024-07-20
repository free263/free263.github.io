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
                "track": 117,
                "name": "117.北极的风（3D纯大自然声音）",
                "length": "4:46",
                "file": "自然之声/117.北极的风（3D纯大自然声音）.mp3"
				},
				{
                "track": 116,
                "name": "116.回到过去（浪花、钢琴、竖笛、大提琴）",
                "length": "4:46",
                "file": "自然之声/116.回到过去（浪花、钢琴、竖笛、大提琴）.mp3"
				},
				{
                "track": 115,
                "name": "115.彼岸烟火（3D舒眠纯音乐）",
                "length": "4:46",
                "file": "自然之声/115.彼岸烟火（3D舒眠纯音乐）.mp3"
				},
				{
                "track": 114,
                "name": "114.愿你快乐无忧（海浪、八音盒、钢琴）",
                "length": "4:46",
                "file": "自然之声/114.愿你快乐无忧（海浪、八音盒、钢琴）.mp3"
				},
				{
                "track": 113,
                "name": "113.天冷了给你拥抱（3D风声、八音盒）",
                "length": "4:46",
                "file": "自然之声/113.天冷了给你拥抱（3D风声、八音盒）.mp3"
				},
				{
                "track": 112,
                "name": "112.森林雨后（涓涓溪流、钢琴、大提琴）",
                "length": "4:46",
                "file": "自然之声/112.森林雨后（涓涓溪流、钢琴、大提琴）.mp3"
				},
				{
                "track": 111,
                "name": "111.人间最美是安静（3D纯音乐）",
                "length": "4:46",
                "file": "自然之声/111.人间最美是安静（3D纯音乐）.mp3"
				},
				{
                "track": 110,
                "name": "110.朝幸福奔去（3D舒睡轻音乐）",
                "length": "4:46",
                "file": "自然之声/110.朝幸福奔去（3D舒睡轻音乐）.mp3"
				},
				{
                "track": 109,
                "name": "109.静夜思（3D舒睡轻音乐）",
                "length": "4:46",
                "file": "自然之声/109.静夜思（3D舒睡轻音乐）.mp3"
				},
				{
                "track": 108,
                "name": "108.窗外大海（温柔海浪、3D脑波音乐）",
                "length": "4:46",
                "file": "自然之声/108.窗外大海（温柔海浪、3D脑波音乐）.mp3"
				},
				{
                "track": 107,
                "name": "107.山涧小溪缓缓流淌（3D纯大自然声音）",
                "length": "4:46",
                "file": "自然之声/107.山涧小溪缓缓流淌（3D纯大自然声音）.mp3"
				},
				{
                "track": 106,
                "name": "106.风雨之后彩虹漫天（3D音效、雷雨、钢琴、大提琴）",
                "length": "4:46",
                "file": "自然之声/106.风雨之后彩虹漫天（3D音效、雷雨、钢琴、大提琴）.mp3"
				},
				{
                "track": 105,
                "name": "105.月亮的梦（3D音效、雷雨、八音盒）戴耳机听更妙噢",
                "length": "4:46",
                "file": "自然之声/105.月亮的梦（3D音效、雷雨、八音盒）戴耳机听更妙噢.mp3"
				},
				{
                "track": 104,
                "name": "104.春天森林（大自然声音、钢琴、木吉他、大提琴、小提琴）",
                "length": "4:46",
                "file": "自然之声/104.春天森林（大自然声音、钢琴、木吉他、大提琴、小提琴）.mp3"
				},
				{
                "track": 103,
                "name": "103.夏天的故事（山林声音、钢琴）",
                "length": "4:46",
                "file": "自然之声/103.夏天的故事（山林声音、钢琴）.mp3"
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