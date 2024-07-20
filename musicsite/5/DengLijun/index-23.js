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
                "track": 669,
                "name": "邓丽君-我的心你的心（舞曲版）0676",
                "length": "4:46",
                "file": "邓丽君1000首/08-邓丽君影音珍藏（舞曲版及演唱会版）/邓丽君-我的心你的心（舞曲版）0676.mp3"
				},
				{
                "track": 668,
                "name": "邓丽君-心中喜欢就说爱（演唱会）0677",
                "length": "4:46",
                "file": "邓丽君1000首/08-邓丽君影音珍藏（舞曲版及演唱会版）/邓丽君-心中喜欢就说爱（演唱会）0677.mp3"
				},
				{
                "track": 667,
                "name": "邓丽君-失落的情歌（国语-舞曲版）0673",
                "length": "4:46",
                "file": "邓丽君1000首/08-邓丽君影音珍藏（舞曲版及演唱会版）/邓丽君-失落的情歌（国语-舞曲版）0673.mp3"
				},
				{
                "track": 666,
                "name": "邓丽君-多少黎明多少黄昏里（国语）0665",
                "length": "4:46",
                "file": "邓丽君1000首/08-邓丽君影音珍藏（舞曲版及演唱会版）/邓丽君-多少黎明多少黄昏里（国语）0665.mp3"
				},
				{
                "track": 665,
                "name": "邓丽君-可爱的小路（国语-舞曲版）0668",
                "length": "4:46",
                "file": "邓丽君1000首/08-邓丽君影音珍藏（舞曲版及演唱会版）/邓丽君-可爱的小路（国语-舞曲版）0668.mp3"
				},
				{
                "track": 664,
                "name": "邓丽君-再度蜜月（国语-舞曲版）0680",
                "length": "4:46",
                "file": "邓丽君1000首/08-邓丽君影音珍藏（舞曲版及演唱会版）/邓丽君-再度蜜月（国语-舞曲版）0680.mp3"
				},
				{
                "track": 663,
                "name": "邓丽君-你（国语）0671",
                "length": "4:46",
                "file": "邓丽君1000首/08-邓丽君影音珍藏（舞曲版及演唱会版）/邓丽君-你（国语）0671.mp3"
				},
				{
                "track": 662,
                "name": "邓丽君-你怎么说（演唱会）0672",
                "length": "4:46",
                "file": "邓丽君1000首/08-邓丽君影音珍藏（舞曲版及演唱会版）/邓丽君-你怎么说（演唱会）0672.mp3"
				},
				{
                "track": 661,
                "name": "邓丽君-何日君再来（国语-演唱会）0667",
                "length": "4:46",
                "file": "邓丽君1000首/08-邓丽君影音珍藏（舞曲版及演唱会版）/邓丽君-何日君再来（国语-演唱会）0667.mp3"
				},
				{
                "track": 660,
                "name": "邓丽君-不能没有你（国语-舞曲版）0663",
                "length": "4:46",
                "file": "邓丽君1000首/08-邓丽君影音珍藏（舞曲版及演唱会版）/邓丽君-不能没有你（国语-舞曲版）0663.mp3"
				},
				{
                "track": 659,
                "name": "邓丽君-路边的野花不要采（马来西亚演唱会）0645",
                "length": "4:46",
                "file": "邓丽君1000首/07-邓丽君影音珍藏（8字国语）/邓丽君-路边的野花不要采（马来西亚演唱会）0645.mp3"
				},
				{
                "track": 658,
                "name": "邓丽君-路边的野花不要采（国语）0644",
                "length": "4:46",
                "file": "邓丽君1000首/07-邓丽君影音珍藏（8字国语）/邓丽君-路边的野花不要采（国语）0644.mp3"
				},
				{
                "track": 657,
                "name": "邓丽君-爱似轻风情似细雨（国语）0641",
                "length": "4:46",
                "file": "邓丽君1000首/07-邓丽君影音珍藏（8字国语）/邓丽君-爱似轻风情似细雨（国语）0641.mp3"
				},
				{
                "track": 656,
                "name": "邓丽君-我还是永远爱着你（国语）0650",
                "length": "4:46",
                "file": "邓丽君1000首/07-邓丽君影音珍藏（8字国语）/邓丽君-我还是永远爱着你（国语）0650.mp3"
				},
				{
                "track": 655,
                "name": "邓丽君-恋爱的人儿多幸福（国语）0643",
                "length": "4:46",
                "file": "邓丽君1000首/07-邓丽君影音珍藏（8字国语）/邓丽君-恋爱的人儿多幸福（国语）0643.mp3"
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