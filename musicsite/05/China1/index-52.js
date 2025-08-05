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
                "track": 347,
                "name": "李玉刚-刚好遇见你",
                "length": "4:46",
                "file": "精选/李玉刚-刚好遇见你.mp3"
				},
				{
                "track": 346,
                "name": "李雨儿、石头-雨花石",
                "length": "4:46",
                "file": "精选/李雨儿、石头-雨花石.mp3"
				},
				{
                "track": 345,
                "name": "李宇春-无价之姐",
                "length": "4:46",
                "file": "精选/李宇春-无价之姐.mp3"
				},
				{
                "track": 344,
                "name": "李宇春-梨花香",
                "length": "4:46",
                "file": "精选/李宇春-梨花香.mp3"
				},
				{
                "track": 343,
                "name": "李翊君-雨蝶",
                "length": "4:46",
                "file": "精选/李翊君-雨蝶.mp3"
				},
				{
                "track": 342,
                "name": "李翊君-婉君",
                "length": "4:46",
                "file": "精选/李翊君-婉君.mp3"
				},
				{
                "track": 341,
                "name": "李翊君-沙漠寂寞",
                "length": "4:46",
                "file": "精选/李翊君-沙漠寂寞.mp3"
				},
				{
                "track": 340,
                "name": "李翊君-风中的承诺",
                "length": "4:46",
                "file": "精选/李翊君-风中的承诺.mp3"
				},
				{
                "track": 339,
                "name": "李秀英-NEVERAGAIN",
                "length": "4:46",
                "file": "精选/李秀英-NEVERAGAIN.mp3"
				},
				{
                "track": 338,
                "name": "李秀英-AlsoILoveYou",
                "length": "4:46",
                "file": "精选/李秀英-AlsoILoveYou.mp3"
				},
				{
                "track": 337,
                "name": "李昕融、樊桐舟、李凯稠-你笑起来真好看",
                "length": "4:46",
                "file": "精选/李昕融、樊桐舟、李凯稠-你笑起来真好看.mp3"
				},
				{
                "track": 336,
                "name": "李孝利-10minutes",
                "length": "4:46",
                "file": "精选/李孝利-10minutes.mp3"
				},
				{
                "track": 335,
                "name": "李晓杰-朋友的酒",
                "length": "4:46",
                "file": "精选/李晓杰-朋友的酒.mp3"
				},
				{
                "track": 334,
                "name": "李殊-原谅我过去不懂",
                "length": "4:46",
                "file": "精选/李殊-原谅我过去不懂.mp3"
				},
				{
                "track": 333,
                "name": "李圣杰-手放开",
                "length": "4:46",
                "file": "精选/李圣杰-手放开.mp3"
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