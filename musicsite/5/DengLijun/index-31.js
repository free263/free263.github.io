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
                "track": 549,
                "name": "邓丽君-让心儿圈起你（国语）0526",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-让心儿圈起你（国语）0526.mp3"
				},
				{
                "track": 548,
                "name": "邓丽君-被你遗忘的我（国语）0484",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-被你遗忘的我（国语）0484.mp3"
				},
				{
                "track": 547,
                "name": "邓丽君-第一次见到你（国语）0509",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-第一次见到你（国语）0509.mp3"
				},
				{
                "track": 546,
                "name": "邓丽君-碧兰村的姑娘（混音国语版）0503",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-碧兰村的姑娘（混音国语版）0503.mp3"
				},
				{
                "track": 545,
                "name": "邓丽君-碧兰村的姑娘（国语）0502",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-碧兰村的姑娘（国语）0502.mp3"
				},
				{
                "track": 544,
                "name": "邓丽君-盼望有一份爱（国语）0501",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-盼望有一份爱（国语）0501.mp3"
				},
				{
                "track": 543,
                "name": "邓丽君-留不住你的心（国语）0513",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-留不住你的心（国语）0513.mp3"
				},
				{
                "track": 542,
                "name": "邓丽君-没有爱怎么活（演唱会）0515",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-没有爱怎么活（演唱会）0515.mp3"
				},
				{
                "track": 541,
                "name": "邓丽君-没有爱怎么活（国语）0514",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-没有爱怎么活（国语）0514.mp3"
				},
				{
                "track": 540,
                "name": "邓丽君-有爱才有快乐（国语）0549",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-有爱才有快乐（国语）0549.mp3"
				},
				{
                "track": 539,
                "name": "邓丽君-晨光下的恋情（国语）0504",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-晨光下的恋情（国语）0504.mp3"
				},
				{
                "track": 538,
                "name": "邓丽君-昨天今天再见（国语-B版）0558",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-昨天今天再见（国语-B版）0558.mp3"
				},
				{
                "track": 537,
                "name": "邓丽君-昨天今天再见（国语-A版）0557",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-昨天今天再见（国语-A版）0557.mp3"
				},
				{
                "track": 536,
                "name": "邓丽君-昨夜一句晚安（国语）0559",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-昨夜一句晚安（国语）0559.mp3"
				},
				{
                "track": 535,
                "name": "邓丽君-春在岁岁年年（国语）0505",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-春在岁岁年年（国语）0505.mp3"
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