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
                "track": 414,
                "name": "邓丽君-找回我自己（国语）0490",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-找回我自己（国语）0490.mp3"
				},
				{
                "track": 413,
                "name": "邓丽君-我飞向前方（国语）0439",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-我飞向前方（国语）0439.mp3"
				},
				{
                "track": 412,
                "name": "邓丽君-我问我自己（国语）0429",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-我问我自己（国语）0429.mp3"
				},
				{
                "track": 411,
                "name": "邓丽君-我要对你说（国语）0422",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-我要对你说（国语）0422.mp3"
				},
				{
                "track": 410,
                "name": "邓丽君-我没有骗你（国语）0440",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-我没有骗你（国语）0440.mp3"
				},
				{
                "track": 409,
                "name": "邓丽君-我敬你一杯（国语）0430",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-我敬你一杯（国语）0430.mp3"
				},
				{
                "track": 408,
                "name": "邓丽君-我怎舍得你（国语）0438",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-我怎舍得你（国语）0438.mp3"
				},
				{
                "track": 407,
                "name": "邓丽君-我就是爱你（国语）0431",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-我就是爱你（国语）0431.mp3"
				},
				{
                "track": 406,
                "name": "邓丽君-我在云里飘（国语）0424",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-我在云里飘（国语）0424.mp3"
				},
				{
                "track": 405,
                "name": "邓丽君-我在云里飘（国语-新配乐）0425",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-我在云里飘（国语-新配乐）0425.mp3"
				},
				{
                "track": 404,
                "name": "邓丽君-我只在乎你（国语）0441",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-我只在乎你（国语）0441.mp3"
				},
				{
                "track": 403,
                "name": "邓丽君-我又想起你（国语-老唱片珍藏）0423",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-我又想起你（国语-老唱片珍藏）0423.mp3"
				},
				{
                "track": 402,
                "name": "邓丽君-我们是明星（国语）0427",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-我们是明星（国语）0427.mp3"
				},
				{
                "track": 401,
                "name": "邓丽君-我们在一起（国语）0428",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-我们在一起（国语）0428.mp3"
				},
				{
                "track": 400,
                "name": "邓丽君-我不该爱你（国语）0437",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-我不该爱你（国语）0437.mp3"
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