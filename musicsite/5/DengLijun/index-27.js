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
                "track": 609,
                "name": "邓丽君-我的情人就是你（国语）0621",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-我的情人就是你（国语）0621.mp3"
				},
				{
                "track": 608,
                "name": "邓丽君-我的心里没有他（国语）0623",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-我的心里没有他（国语）0623.mp3"
				},
				{
                "track": 607,
                "name": "邓丽君-我的心里有个他（国语B）0624",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-我的心里有个他（国语B）0624.mp3"
				},
				{
                "track": 606,
                "name": "邓丽君-我的名字叫叮当（电影插曲）0620",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-我的名字叫叮当（电影插曲）0620.mp3"
				},
				{
                "track": 605,
                "name": "邓丽君-我想天天看见你（国语）0625",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-我想天天看见你（国语）0625.mp3"
				},
				{
                "track": 604,
                "name": "邓丽君-我心里有一个人（国语）0626",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-我心里有一个人（国语）0626.mp3"
				},
				{
                "track": 603,
                "name": "邓丽君-我到海边送夕阳（国语）0619",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-我到海边送夕阳（国语）0619.mp3"
				},
				{
                "track": 602,
                "name": "邓丽君-情人山坡只有我（国语）0602",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-情人山坡只有我（国语）0602.mp3"
				},
				{
                "track": 601,
                "name": "邓丽君-恨不相逢未嫁时（国语-B）0578",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-恨不相逢未嫁时（国语-B）0578.mp3"
				},
				{
                "track": 600,
                "name": "邓丽君-恨不相逢未嫁时（国语-A钢琴伴奏）0577",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-恨不相逢未嫁时（国语-A钢琴伴奏）0577.mp3"
				},
				{
                "track": 599,
                "name": "邓丽君-恋爱的路多么甜（国语）0587",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-恋爱的路多么甜（国语）0587.mp3"
				},
				{
                "track": 598,
                "name": "邓丽君-恋爱有苦也有乐（国语）0588",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-恋爱有苦也有乐（国语）0588.mp3"
				},
				{
                "track": 597,
                "name": "邓丽君-快乐的恰恰姑娘（国语）0585",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-快乐的恰恰姑娘（国语）0585.mp3"
				},
				{
                "track": 596,
                "name": "邓丽君-忘不了初恋情人（国语）0616",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-忘不了初恋情人（国语）0616.mp3"
				},
				{
                "track": 595,
                "name": "邓丽君-心中喜欢就说爱（国语-旧版）0632",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-心中喜欢就说爱（国语-旧版）0632.mp3"
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