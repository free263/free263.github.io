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
                "track": 504,
                "name": "邓丽君-使爱情更美丽（国语）0530",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-使爱情更美丽（国语）0530.mp3"
				},
				{
                "track": 503,
                "name": "邓丽君-你照亮我的心（国语）0519",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-你照亮我的心（国语）0519.mp3"
				},
				{
                "track": 502,
                "name": "邓丽君-你是偷心的人（国语）0518",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-你是偷心的人（国语）0518.mp3"
				},
				{
                "track": 501,
                "name": "邓丽君-你就站在眼前（国语）0520",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-你就站在眼前（国语）0520.mp3"
				},
				{
                "track": 500,
                "name": "邓丽君-你就站在眼前（国语）0517",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-你就站在眼前（国语）0517.mp3"
				},
				{
                "track": 499,
                "name": "邓丽君-何必留下回忆（国语）0516",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-何必留下回忆（国语）0516.mp3"
				},
				{
                "track": 498,
                "name": "邓丽君-什么事叫你愁（国语）0528",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-什么事叫你愁（国语）0528.mp3"
				},
				{
                "track": 497,
                "name": "邓丽君-为什么心儿跳（国语）0531",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-为什么心儿跳（国语）0531.mp3"
				},
				{
                "track": 496,
                "name": "邓丽君-Darling你不要哭（国语）0481",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-Darling你不要哭（国语）0481.mp3"
				},
				{
                "track": 495,
                "name": "邓丽君-魂牵梦也系（国语）0343",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-魂牵梦也系（国语）0343.mp3"
				},
				{
                "track": 494,
                "name": "邓丽君-魂牵梦也系（国语-新配乐）0344",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-魂牵梦也系（国语-新配乐）0344.mp3"
				},
				{
                "track": 493,
                "name": "邓丽君-鬼马俏医生（国语）0326",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-鬼马俏医生（国语）0326.mp3"
				},
				{
                "track": 492,
                "name": "邓丽君-风从哪里来（国语-B版）0319",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-风从哪里来（国语-B版）0319.mp3"
				},
				{
                "track": 491,
                "name": "邓丽君-风从哪里来（国语-A版）0318",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-风从哪里来（国语-A版）0318.mp3"
				},
				{
                "track": 490,
                "name": "邓丽君-风中的早晨（国语）0321",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-风中的早晨（国语）0321.mp3"
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