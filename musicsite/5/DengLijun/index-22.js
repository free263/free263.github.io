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
                "track": 684,
                "name": "邓丽君-从今日起（粤语）0683",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-从今日起（粤语）0683.mp3"
				},
				{
                "track": 683,
                "name": "邓丽君-东山飘雨西山晴（粤语）0685",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-东山飘雨西山晴（粤语）0685.mp3"
				},
				{
                "track": 682,
                "name": "邓丽君-东山飘雨西山晴（粤语-演唱会）0686",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-东山飘雨西山晴（粤语-演唱会）0686.mp3"
				},
				{
                "track": 681,
                "name": "邓丽君-一水隔天涯（粤语）0714",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-一水隔天涯（粤语）0714.mp3"
				},
				{
                "track": 680,
                "name": "邓丽君-一挥衣袖（粤语）0713",
                "length": "4:46",
                "file": "邓丽君1000首/09-邓丽君影音珍藏（粤语）/邓丽君-一挥衣袖（粤语）0713.mp3"
				},
				{
                "track": 679,
                "name": "邓丽君-高山青（国语-演唱会）0666",
                "length": "4:46",
                "file": "邓丽君1000首/08-邓丽君影音珍藏（舞曲版及演唱会版）/邓丽君-高山青（国语-演唱会）0666.mp3"
				},
				{
                "track": 678,
                "name": "邓丽君-雨中徘徊（国语-舞曲版）0678",
                "length": "4:46",
                "file": "邓丽君1000首/08-邓丽君影音珍藏（舞曲版及演唱会版）/邓丽君-雨中徘徊（国语-舞曲版）0678.mp3"
				},
				{
                "track": 677,
                "name": "邓丽君-采槟榔（国语-演唱会）0664",
                "length": "4:46",
                "file": "邓丽君1000首/08-邓丽君影音珍藏（舞曲版及演唱会版）/邓丽君-采槟榔（国语-演唱会）0664.mp3"
				},
				{
                "track": 676,
                "name": "邓丽君-甜蜜蜜（国语1981演唱会）0674",
                "length": "4:46",
                "file": "邓丽君1000首/08-邓丽君影音珍藏（舞曲版及演唱会版）/邓丽君-甜蜜蜜（国语1981演唱会）0674.mp3"
				},
				{
                "track": 675,
                "name": "邓丽君-爱情如风雨（国语-舞曲版）0661",
                "length": "4:46",
                "file": "邓丽君1000首/08-邓丽君影音珍藏（舞曲版及演唱会版）/邓丽君-爱情如风雨（国语-舞曲版）0661.mp3"
				},
				{
                "track": 674,
                "name": "邓丽君-爱人就是我（国语-舞曲版）0662",
                "length": "4:46",
                "file": "邓丽君1000首/08-邓丽君影音珍藏（舞曲版及演唱会版）/邓丽君-爱人就是我（国语-舞曲版）0662.mp3"
				},
				{
                "track": 673,
                "name": "邓丽君-温情满人间（国语-舞曲版）0675",
                "length": "4:46",
                "file": "邓丽君1000首/08-邓丽君影音珍藏（舞曲版及演唱会版）/邓丽君-温情满人间（国语-舞曲版）0675.mp3"
				},
				{
                "track": 672,
                "name": "邓丽君-泪的小雨（国语-演唱会）0669",
                "length": "4:46",
                "file": "邓丽君1000首/08-邓丽君影音珍藏（舞曲版及演唱会版）/邓丽君-泪的小雨（国语-演唱会）0669.mp3"
				},
				{
                "track": 671,
                "name": "邓丽君-梦（国语）0670",
                "length": "4:46",
                "file": "邓丽君1000首/08-邓丽君影音珍藏（舞曲版及演唱会版）/邓丽君-梦（国语）0670.mp3"
				},
				{
                "track": 670,
                "name": "邓丽君-月亮代表我的心（演唱会）0679",
                "length": "4:46",
                "file": "邓丽君1000首/08-邓丽君影音珍藏（舞曲版及演唱会版）/邓丽君-月亮代表我的心（演唱会）0679.mp3"
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