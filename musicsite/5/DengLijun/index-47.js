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
                "track": 309,
                "name": "邓丽君-何日君再来（E-国语-演唱会-另版）0333",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-何日君再来（E-国语-演唱会-另版）0333.mp3"
				},
				{
                "track": 308,
                "name": "邓丽君-何日君再来（D-国语-保留演唱会幽默片段）0332",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-何日君再来（D-国语-保留演唱会幽默片段）0332.mp3"
				},
				{
                "track": 307,
                "name": "邓丽君-何日君再来（C-国语）0331",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-何日君再来（C-国语）0331.mp3"
				},
				{
                "track": 306,
                "name": "邓丽君-何日君再来（B-国语1993）0330",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-何日君再来（B-国语1993）0330.mp3"
				},
				{
                "track": 305,
                "name": "邓丽君-何日君再来（A-国语1984）0329",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-何日君再来（A-国语1984）0329.mp3"
				},
				{
                "track": 304,
                "name": "邓丽君-何必再相恋（国语）0328",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-何必再相恋（国语）0328.mp3"
				},
				{
                "track": 303,
                "name": "邓丽君-但愿人长久（国语）0314",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-但愿人长久（国语）0314.mp3"
				},
				{
                "track": 302,
                "name": "邓丽君-但愿人长久（国语-15周年演唱会）0313",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-但愿人长久（国语-15周年演唱会）0313.mp3"
				},
				{
                "track": 301,
                "name": "邓丽君-伴你走天涯（国语）0295",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-伴你走天涯（国语）0295.mp3"
				},
				{
                "track": 300,
                "name": "邓丽君-今晚要的爱（国语）0353",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-今晚要的爱（国语）0353.mp3"
				},
				{
                "track": 299,
                "name": "邓丽君-今夜想起你（国语）0354",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-今夜想起你（国语）0354.mp3"
				},
				{
                "track": 298,
                "name": "邓丽君-人约黄昏后（国语）0401",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-人约黄昏后（国语）0401.mp3"
				},
				{
                "track": 297,
                "name": "邓丽君-人生就是戏（国语）0400",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-人生就是戏（国语）0400.mp3"
				},
				{
                "track": 296,
                "name": "邓丽君-人儿不能留（国语）0399",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-人儿不能留（国语）0399.mp3"
				},
				{
                "track": 295,
                "name": "邓丽君-云深情也深（国语）0486",
                "length": "4:46",
                "file": "邓丽君1000首/04-邓丽君影音珍藏（5字国语）/邓丽君-云深情也深（国语）0486.mp3"
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