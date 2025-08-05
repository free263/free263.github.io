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
                "track": 564,
                "name": "邓丽君-不是春雨没有来（国语）0571",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-不是春雨没有来（国语）0571.mp3"
				},
				{
                "track": 563,
                "name": "邓丽君-不怕不能再相见（国语）0570",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-不怕不能再相见（国语）0570.mp3"
				},
				{
                "track": 562,
                "name": "邓丽君-一心一意爱到底（国语）0637",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-一心一意爱到底（国语）0637.mp3"
				},
				{
                "track": 561,
                "name": "邓丽君-一年四季都有爱（国语）0636",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-一年四季都有爱（国语）0636.mp3"
				},
				{
                "track": 560,
                "name": "邓丽君-一寸相思未了情（国语）0635",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-一寸相思未了情（国语）0635.mp3"
				},
				{
                "track": 559,
                "name": "邓丽君-黄色的小樱桃（国语）0507",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-黄色的小樱桃（国语）0507.mp3"
				},
				{
                "track": 558,
                "name": "邓丽君-雪地上的回忆（国语）0546",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-雪地上的回忆（国语）0546.mp3"
				},
				{
                "track": 557,
                "name": "邓丽君-雨不停心不定（国语）0552",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-雨不停心不定（国语）0552.mp3"
				},
				{
                "track": 556,
                "name": "邓丽君-阿里山的姑娘（现场互动版）0483",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-阿里山的姑娘（现场互动版）0483.mp3"
				},
				{
                "track": 555,
                "name": "邓丽君-阿里山的姑娘（混音版）0482",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-阿里山的姑娘（混音版）0482.mp3"
				},
				{
                "track": 554,
                "name": "邓丽君-阿里山的姑娘(混音版-国语）541",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-阿里山的姑娘(混音版-国语）541.mp3"
				},
				{
                "track": 553,
                "name": "邓丽君-这是个好地方（国语）0556",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-这是个好地方（国语）0556.mp3"
				},
				{
                "track": 552,
                "name": "邓丽君-迎着风跟着云（国语）0548",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-迎着风跟着云（国语）0548.mp3"
				},
				{
                "track": 551,
                "name": "邓丽君-请你别再找我（国语）0524",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-请你别再找我（国语）0524.mp3"
				},
				{
                "track": 550,
                "name": "邓丽君-让花儿为你开（国语）0525",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-让花儿为你开（国语）0525.mp3"
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