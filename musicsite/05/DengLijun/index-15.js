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
                "track": 789,
                "name": "邓丽君-0790-Kau Tinggalkan Daku（印尼语-谁来爱我）",
                "length": "4:46",
                "file": "邓丽君1000首/12-邓丽君影音珍藏（印尼语）/邓丽君-0790-Kau Tinggalkan Daku（印尼语-谁来爱我）.mp3"
				},
				{
                "track": 788,
                "name": "邓丽君-0789-Hong Kong Hong Kong（印尼语-香港之夜）",
                "length": "4:46",
                "file": "邓丽君1000首/12-邓丽君影音珍藏（印尼语）/邓丽君-0789-Hong Kong Hong Kong（印尼语-香港之夜）.mp3"
				},
				{
                "track": 787,
                "name": "邓丽君-0788-Harapanku（印尼语-南海姑娘）",
                "length": "4:46",
                "file": "邓丽君1000首/12-邓丽君影音珍藏（印尼语）/邓丽君-0788-Harapanku（印尼语-南海姑娘）.mp3"
				},
				{
                "track": 786,
                "name": "邓丽君-0787-Hanya Untukmu（印尼语-难忘初恋的情人）",
                "length": "4:46",
                "file": "邓丽君1000首/12-邓丽君影音珍藏（印尼语）/邓丽君-0787-Hanya Untukmu（印尼语-难忘初恋的情人）.mp3"
				},
				{
                "track": 785,
                "name": "邓丽君-0786-Dayung Sampan（印尼语-划舢舨 甜蜜蜜）",
                "length": "4:46",
                "file": "邓丽君1000首/12-邓丽君影音珍藏（印尼语）/邓丽君-0786-Dayung Sampan（印尼语-划舢舨 甜蜜蜜）.mp3"
				},
				{
                "track": 784,
                "name": "邓丽君-0785-Cinta suci（印尼语-何日君再来）",
                "length": "4:46",
                "file": "邓丽君1000首/12-邓丽君影音珍藏（印尼语）/邓丽君-0785-Cinta suci（印尼语-何日君再来）.mp3"
				},
				{
                "track": 783,
                "name": "邓丽君-0784-Bunga Mthr（印尼语-向日葵）老唱片珍藏",
                "length": "4:46",
                "file": "邓丽君1000首/12-邓丽君影音珍藏（印尼语）/邓丽君-0784-Bunga Mthr（印尼语-向日葵）老唱片珍藏.mp3"
				},
				{
                "track": 782,
                "name": "邓丽君-0783-Bunga Indah（印尼语-路边的野花不要采）",
                "length": "4:46",
                "file": "邓丽君1000首/12-邓丽君影音珍藏（印尼语）/邓丽君-0783-Bunga Indah（印尼语-路边的野花不要采）.mp3"
				},
				{
                "track": 781,
                "name": "邓丽君-0782-Bisikanmu（印尼语-问自己）",
                "length": "4:46",
                "file": "邓丽君1000首/12-邓丽君影音珍藏（印尼语）/邓丽君-0782-Bisikanmu（印尼语-问自己）.mp3"
				},
				{
                "track": 780,
                "name": "邓丽君-0781-Aaa Kau Tau（印尼语-后悔爱上你）",
                "length": "4:46",
                "file": "邓丽君1000首/12-邓丽君影音珍藏（印尼语）/邓丽君-0781-Aaa Kau Tau（印尼语-后悔爱上你）.mp3"
				},
				{
                "track": 779,
                "name": "邓丽君-You don t Have To Say You Love Me(英语）0779",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-You don t Have To Say You Love Me(英语）0779.mp3"
				},
				{
                "track": 778,
                "name": "邓丽君-You Are My Sunshine(英语）0778",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-You Are My Sunshine(英语）0778.mp3"
				},
				{
                "track": 777,
                "name": "邓丽君-What A Wonderful World(英语）0776",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-What A Wonderful World(英语）0776.mp3"
				},
				{
                "track": 776,
                "name": "邓丽君-What a feeling(英语-演唱会）0776",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-What a feeling(英语-演唱会）0776.mp3"
				},
				{
                "track": 775,
                "name": "邓丽君-The Way We Were(英语）0775",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-The Way We Were(英语）0775.mp3"
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