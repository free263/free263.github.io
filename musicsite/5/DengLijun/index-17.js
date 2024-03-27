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
                "track": 759,
                "name": "邓丽君-Jambalaya(英语）0758",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-Jambalaya(英语）0758.mp3"
				},
				{
                "track": 758,
                "name": "邓丽君-Jambalaya(英语-马来西亚演唱会）0759",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-Jambalaya(英语-马来西亚演唱会）0759.mp3"
				},
				{
                "track": 757,
                "name": "邓丽君-I m Gonna Knock On Your Door(英语）0757",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-I m Gonna Knock On Your Door(英语）0757.mp3"
				},
				{
                "track": 756,
                "name": "邓丽君-I love rock and roll(英语)0756",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-I love rock and roll(英语)0756.mp3"
				},
				{
                "track": 755,
                "name": "邓丽君-I Just Called To Say I Love You(英语-演唱会）0755",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-I Just Called To Say I Love You(英语-演唱会）0755.mp3"
				},
				{
                "track": 754,
                "name": "邓丽君-Heaven Help My Heart(英语）0754",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-Heaven Help My Heart(英语）0754.mp3"
				},
				{
                "track": 753,
                "name": "邓丽君-Heartaches at sweet sixteen(英语）0753",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-Heartaches at sweet sixteen(英语）0753.mp3"
				},
				{
                "track": 752,
                "name": "邓丽君-For once in my life(英语）0752",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-For once in my life(英语）0752.mp3"
				},
				{
                "track": 751,
                "name": "邓丽君-fire(英语)0751",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-fire(英语)0751.mp3"
				},
				{
                "track": 750,
                "name": "邓丽君-Feelings(英语）0750",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-Feelings(英语）0750.mp3"
				},
				{
                "track": 749,
                "name": "邓丽君-Every breath you take(英语-演唱会）0749",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-Every breath you take(英语-演唱会）0749.mp3"
				},
				{
                "track": 748,
                "name": "邓丽君-Designer music(英语)0780",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-Designer music(英语)0780.mp3"
				},
				{
                "track": 747,
                "name": "邓丽君-Come On-A My House(英语）0746",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-Come On-A My House(英语）0746.mp3"
				},
				{
                "track": 746,
                "name": "邓丽君-Careless Whispers(英语）0748",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-Careless Whispers(英语）0748.mp3"
				},
				{
                "track": 745,
                "name": "邓丽君-Can t Help Falling In Love With You(英语-伊利沙伯演唱会)0747",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-Can t Help Falling In Love With You(英语-伊利沙伯演唱会)0747.mp3"
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