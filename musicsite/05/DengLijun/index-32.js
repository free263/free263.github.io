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
                "track": 534,
                "name": "邓丽君-我的情像星星（国语）0532",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-我的情像星星（国语）0532.mp3"
				},
				{
                "track": 533,
                "name": "邓丽君-我的心你的心（国语）0533",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-我的心你的心（国语）0533.mp3"
				},
				{
                "track": 532,
                "name": "邓丽君-我是你的知音（国语）0534",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-我是你的知音（国语）0534.mp3"
				},
				{
                "track": 531,
                "name": "邓丽君-我怎能离开你（国语）0537",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-我怎能离开你（国语）0537.mp3"
				},
				{
                "track": 530,
                "name": "邓丽君-我已坠入情网（国语）0536",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-我已坠入情网（国语）0536.mp3"
				},
				{
                "track": 529,
                "name": "邓丽君-我一见你就笑（国语）0535",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-我一见你就笑（国语）0535.mp3"
				},
				{
                "track": 528,
                "name": "邓丽君-我一见你就笑（国语-生日现场版珍藏）0560",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-我一见你就笑（国语-生日现场版珍藏）0560.mp3"
				},
				{
                "track": 527,
                "name": "邓丽君-情人的黄衬衫（国语）0523",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-情人的黄衬衫（国语）0523.mp3"
				},
				{
                "track": 526,
                "name": "邓丽君-悄悄的告诉你（国语）0522",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-悄悄的告诉你（国语）0522.mp3"
				},
				{
                "track": 525,
                "name": "邓丽君-恰似你的温柔（国语）0521",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-恰似你的温柔（国语）0521.mp3"
				},
				{
                "track": 524,
                "name": "邓丽君-快回头望一望（国语）0508",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-快回头望一望（国语）0508.mp3"
				},
				{
                "track": 523,
                "name": "邓丽君-心疼的小宝宝（国语）0545",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-心疼的小宝宝（国语）0545.mp3"
				},
				{
                "track": 522,
                "name": "邓丽君-心湖里起涟漪（国语）0544",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-心湖里起涟漪（国语）0544.mp3"
				},
				{
                "track": 521,
                "name": "邓丽君-得不到的爱情（国语）0506",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-得不到的爱情（国语）0506.mp3"
				},
				{
                "track": 520,
                "name": "邓丽君-小笨象触了电（国语）0542",
                "length": "4:46",
                "file": "邓丽君1000首/05-邓丽君影音珍藏（6字国语）/邓丽君-小笨象触了电（国语）0542.mp3"
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