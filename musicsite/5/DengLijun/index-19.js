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
                "track": 729,
                "name": "邓丽君-碎心花（闽南语）0730",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-碎心花（闽南语）0730.mp3"
				},
				{
                "track": 728,
                "name": "邓丽君-碎心恋（闽南语）0731",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-碎心恋（闽南语）0731.mp3"
				},
				{
                "track": 727,
                "name": "邓丽君-泪的小雨（闽南语-新加坡演唱会）0705",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-泪的小雨（闽南语-新加坡演唱会）0705.mp3"
				},
				{
                "track": 726,
                "name": "邓丽君-歹歹尪吃袂空（闽南语）0701",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-歹歹尪吃袂空（闽南语）0701.mp3"
				},
				{
                "track": 725,
                "name": "邓丽君-望春风（闽南语）0722",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-望春风（闽南语）0722.mp3"
				},
				{
                "track": 724,
                "name": "邓丽君-旧情绵绵（闽南语）0702",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-旧情绵绵（闽南语）0702.mp3"
				},
				{
                "track": 723,
                "name": "邓丽君-思想起（闽南语）0729",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-思想起（闽南语）0729.mp3"
				},
				{
                "track": 722,
                "name": "邓丽君-快乐的出航（闽南语）0704",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-快乐的出航（闽南语）0704.mp3"
				},
				{
                "track": 721,
                "name": "邓丽君-心酸酸（闽南语）0733",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-心酸酸（闽南语）0733.mp3"
				},
				{
                "track": 720,
                "name": "邓丽君-平安追想曲（闽南语-B）0726",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-平安追想曲（闽南语-B）0726.mp3"
				},
				{
                "track": 719,
                "name": "邓丽君-天黑黑（闽南语）0732",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-天黑黑（闽南语）0732.mp3"
				},
				{
                "track": 718,
                "name": "邓丽君-卖肉粽（闽南语）0707",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-卖肉粽（闽南语）0707.mp3"
				},
				{
                "track": 717,
                "name": "邓丽君-卖肉粽（闽南语-马来西亚演唱会）0708",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-卖肉粽（闽南语-马来西亚演唱会）0708.mp3"
				},
				{
                "track": 716,
                "name": "邓丽君-十一哥（闽南语）0728",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-十一哥（闽南语）0728.mp3"
				},
				{
                "track": 715,
                "name": "邓丽君-劝世歌（闽南语）0721",
                "length": "4:46",
                "file": "邓丽君1000首/10-邓丽君影音珍藏（闽南语）/邓丽君-劝世歌（闽南语）0721.mp3"
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