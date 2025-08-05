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
                "track": 354,
                "name": "邓丽君-处处闻啼鸟（国语-演唱会）0311",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-处处闻啼鸟（国语-演唱会）0311.mp3"
				},
				{
                "track": 353,
                "name": "邓丽君-因为我爱你（国语）0471",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-因为我爱你（国语）0471.mp3"
				},
				{
                "track": 352,
                "name": "邓丽君-嘿嘿阿哥哥（国语）0335",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-嘿嘿阿哥哥（国语）0335.mp3"
				},
				{
                "track": 351,
                "name": "邓丽君-嗨我告诉你（国语-B版）0338",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-嗨我告诉你（国语-B版）0338.mp3"
				},
				{
                "track": 350,
                "name": "邓丽君-嗨我告诉你（国语-A版）0337",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-嗨我告诉你（国语-A版）0337.mp3"
				},
				{
                "track": 349,
                "name": "邓丽君-嗨嗨小可爱（国语）0336",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-嗨嗨小可爱（国语）0336.mp3"
				},
				{
                "track": 348,
                "name": "邓丽君-唯一的心愿（国语）0435",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-唯一的心愿（国语）0435.mp3"
				},
				{
                "track": 347,
                "name": "邓丽君-唤不回的梦（国语）0342",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-唤不回的梦（国语）0342.mp3"
				},
				{
                "track": 346,
                "name": "邓丽君-命运的安排（国语）0373",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-命运的安排（国语）0373.mp3"
				},
				{
                "track": 345,
                "name": "邓丽君-向自由飞翔（国语）0451",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-向自由飞翔（国语）0451.mp3"
				},
				{
                "track": 344,
                "name": "邓丽君-后悔爱上你（国语-B版）0340",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-后悔爱上你（国语-B版）0340.mp3"
				},
				{
                "track": 343,
                "name": "邓丽君-后悔爱上你（国语-A版）0339",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-后悔爱上你（国语-A版）0339.mp3"
				},
				{
                "track": 342,
                "name": "邓丽君-台北红玫瑰（国语）0417",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-台北红玫瑰（国语）0417.mp3"
				},
				{
                "track": 341,
                "name": "邓丽君-可爱的明天（国语）0360",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-可爱的明天（国语）0360.mp3"
				},
				{
                "track": 340,
                "name": "邓丽君-可爱的小路（国语）0361",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-可爱的小路（国语）0361.mp3"
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