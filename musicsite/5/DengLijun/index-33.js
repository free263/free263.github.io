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
                "track": 519,
                "name": "邓丽君-小村姑卖西瓜（国语）0540",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-小村姑卖西瓜（国语）0540.mp3"
				},
				{
                "track": 518,
                "name": "邓丽君-小媳妇回娘家（国语）0543",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-小媳妇回娘家（国语）0543.mp3"
				},
				{
                "track": 517,
                "name": "邓丽君-如果我有勇气（国语）0527",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-如果我有勇气（国语）0527.mp3"
				},
				{
                "track": 516,
                "name": "邓丽君-夜雾下的姑娘（国语）0547",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-夜雾下的姑娘（国语）0547.mp3"
				},
				{
                "track": 515,
                "name": "邓丽君-告诉你告诉我（国语）0510",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-告诉你告诉我（国语）0510.mp3"
				},
				{
                "track": 514,
                "name": "邓丽君-告诉他我爱他（国语）0511",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-告诉他我爱他（国语）0511.mp3"
				},
				{
                "track": 513,
                "name": "邓丽君-又甜蜜又美丽（国语）0550",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-又甜蜜又美丽（国语）0550.mp3"
				},
				{
                "track": 512,
                "name": "邓丽君-又听到那首歌（国语）0551",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-又听到那首歌（国语）0551.mp3"
				},
				{
                "track": 511,
                "name": "邓丽君-十七八的姑娘（国语）0529",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-十七八的姑娘（国语）0529.mp3"
				},
				{
                "track": 510,
                "name": "邓丽君-再见我的爱人（国语）0554",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-再见我的爱人（国语）0554.mp3"
				},
				{
                "track": 509,
                "name": "邓丽君-再见我的爱人（国语-珍藏演唱会现场）0555",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-再见我的爱人（国语-珍藏演唱会现场）0555.mp3"
				},
				{
                "track": 508,
                "name": "邓丽君-再会吧十七岁（国语）0553",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-再会吧十七岁（国语）0553.mp3"
				},
				{
                "track": 507,
                "name": "邓丽君-像轻烟的爱情（国语）0539",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-像轻烟的爱情（国语）0539.mp3"
				},
				{
                "track": 506,
                "name": "邓丽君-像故事般温柔（国语）0538",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-像故事般温柔（国语）0538.mp3"
				},
				{
                "track": 505,
                "name": "邓丽君-假如我是真的（国语）0512",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-假如我是真的（国语）0512.mp3"
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