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
                "track": 42,
                "name": "042.放下烦忧（海浪、木吉他、大提琴）",
                "length": "4:46",
                "file": "自然之声/042.放下烦忧（海浪、木吉他、大提琴）.mp3"
				},
				{
                "track": 41,
                "name": "041.在花园里劳作（浇水、狗吠、钢琴）",
                "length": "4:46",
                "file": "自然之声/041.在花园里劳作（浇水、狗吠、钢琴）.mp3"
				},
				{
                "track": 40,
                "name": "040.宁静港湾（水边鸟鸣、木吉他、钢琴）",
                "length": "4:46",
                "file": "自然之声/040.宁静港湾（水边鸟鸣、木吉他、钢琴）.mp3"
				},
				{
                "track": 39,
                "name": "039.悠闲假期（流水、鸟鸣、木吉他、钢琴、提琴）",
                "length": "4:46",
                "file": "自然之声/039.悠闲假期（流水、鸟鸣、木吉他、钢琴、提琴）.mp3"
				},
				{
                "track": 38,
                "name": "038.老街（山涧鸟鸣、钢琴、大提琴）",
                "length": "4:46",
                "file": "自然之声/038.老街（山涧鸟鸣、钢琴、大提琴）.mp3"
				},
				{
                "track": 37,
                "name": "037.秘境岛屿（海浪、长笛、木吉他）",
                "length": "4:46",
                "file": "自然之声/037.秘境岛屿（海浪、长笛、木吉他）.mp3"
				},
				{
                "track": 36,
                "name": "036.早安（鸟鸣、钢琴）",
                "length": "4:46",
                "file": "自然之声/036.早安（鸟鸣、钢琴）.mp3"
				},
				{
                "track": 35,
                "name": "035.路在前方（鸟鸣、钢琴、木吉他、大提琴）",
                "length": "4:46",
                "file": "自然之声/035.路在前方（鸟鸣、钢琴、木吉他、大提琴）.mp3"
				},
				{
                "track": 34,
                "name": "034.澄澈心灵（夏夜蟋蟀蝉鸣、大提琴、钢琴、木吉他）",
                "length": "4:46",
                "file": "自然之声/034.澄澈心灵（夏夜蟋蟀蝉鸣、大提琴、钢琴、木吉他）.mp3"
				},
				{
                "track": 33,
                "name": "033.乡间小路（林中清溪、竖笛、大提琴）",
                "length": "4:46",
                "file": "自然之声/033.乡间小路（林中清溪、竖笛、大提琴）.mp3"
				},
				{
                "track": 32,
                "name": "032.湛蓝天空（流水声、鸟鸣、萨克斯、钢琴）",
                "length": "4:46",
                "file": "自然之声/032.湛蓝天空（流水声、鸟鸣、萨克斯、钢琴）.mp3"
				},
				{
                "track": 31,
                "name": "031.仲夏夜的梦境（蟋蟀鸟鸣、钢琴、大提琴）",
                "length": "4:46",
                "file": "自然之声/031.仲夏夜的梦境（蟋蟀鸟鸣、钢琴、大提琴）.mp3"
				},
				{
                "track": 30,
                "name": "030.我们的时光（时钟、钟琴、钢琴）",
                "length": "4:46",
                "file": "自然之声/030.我们的时光（时钟、钟琴、钢琴）.mp3"
				},
				{
                "track": 29,
                "name": "029.踏上稻乡（鸟鸣、钢琴）",
                "length": "4:46",
                "file": "自然之声/029.踏上稻乡（鸟鸣、钢琴）.mp3"
				},
				{
                "track": 28,
                "name": "028.闲逛（鸟鸣、水滴、脚步声、钢琴、长笛）",
                "length": "4:46",
                "file": "自然之声/028.闲逛（鸟鸣、水滴、脚步声、钢琴、长笛）.mp3"
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