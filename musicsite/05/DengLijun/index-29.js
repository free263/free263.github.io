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
                "track": 579,
                "name": "邓丽君-夕阳问你在哪里（国语）0629",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-夕阳问你在哪里（国语）0629.mp3"
				},
				{
                "track": 578,
                "name": "邓丽君-台北今日又是雨（国语）0611",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-台北今日又是雨（国语）0611.mp3"
				},
				{
                "track": 577,
                "name": "邓丽君-只要你心里有我（国语）0659",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-只要你心里有我（国语）0659.mp3"
				},
				{
                "track": 576,
                "name": "邓丽君-又是一个下雨天（国语）0652",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-又是一个下雨天（国语）0652.mp3"
				},
				{
                "track": 575,
                "name": "邓丽君-匆匆岁月多少年（国语）0573",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-匆匆岁月多少年（国语）0573.mp3"
				},
				{
                "track": 574,
                "name": "邓丽君-假如梦儿是真的（国语）0561",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-假如梦儿是真的（国语）0561.mp3"
				},
				{
                "track": 573,
                "name": "邓丽君-你的爱人不是我（国语）0596",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-你的爱人不是我（国语）0596.mp3"
				},
				{
                "track": 572,
                "name": "邓丽君-你是我的意中人（国语）0599",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-你是我的意中人（国语）0599.mp3"
				},
				{
                "track": 571,
                "name": "邓丽君-你可知道我爱谁（国语B）0598",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-你可知道我爱谁（国语B）0598.mp3"
				},
				{
                "track": 570,
                "name": "邓丽君-你可知道我爱谁（国语A）0597",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-你可知道我爱谁（国语A）0597.mp3"
				},
				{
                "track": 569,
                "name": "邓丽君-你不爱我我爱你（国语）0595",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-你不爱我我爱你（国语）0595.mp3"
				},
				{
                "track": 568,
                "name": "邓丽君-今天欢乐明天梦（国语）0583",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-今天欢乐明天梦（国语）0583.mp3"
				},
				{
                "track": 567,
                "name": "邓丽君-云想衣裳花想容（国语）0657",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-云想衣裳花想容（国语）0657.mp3"
				},
				{
                "track": 566,
                "name": "邓丽君-云想衣裳花想容（国语-1971年版）0656",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-云想衣裳花想容（国语-1971年版）0656.mp3"
				},
				{
                "track": 565,
                "name": "邓丽君-不论今宵或明天（国语）0569",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-不论今宵或明天（国语）0569.mp3"
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