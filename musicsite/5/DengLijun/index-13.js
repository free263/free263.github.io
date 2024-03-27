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
                "track": 819,
                "name": "邓丽君-0820-おまもり(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0820-おまもり(日语）.mp3"
				},
				{
                "track": 818,
                "name": "邓丽君-0819-おまえとふたり(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0819-おまえとふたり(日语）.mp3"
				},
				{
                "track": 817,
                "name": "邓丽君-0818-エレジー(新宿演唱会-日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0818-エレジー(新宿演唱会-日语）.mp3"
				},
				{
                "track": 816,
                "name": "邓丽君-0817-エレジー(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0817-エレジー(日语）.mp3"
				},
				{
                "track": 815,
                "name": "邓丽君-0816-ウナ-セラ-ディ東京(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0816-ウナ-セラ-ディ東京(日语）.mp3"
				},
				{
                "track": 814,
                "name": "邓丽君-0815-あなたの空(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0815-あなたの空(日语）.mp3"
				},
				{
                "track": 813,
                "name": "邓丽君-0814-あなたのすべてを(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0814-あなたのすべてを(日语）.mp3"
				},
				{
                "track": 812,
                "name": "邓丽君-0813-あなたと生きる(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0813-あなたと生きる(日语）.mp3"
				},
				{
                "track": 811,
                "name": "邓丽君-0812-あなたと共に生きてゆく(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0812-あなたと共に生きてゆく(日语）.mp3"
				},
				{
                "track": 810,
                "name": "邓丽君-0811-あなた(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0811-あなた(日语）.mp3"
				},
				{
                "track": 809,
                "name": "邓丽君-0810-アカシアの夢(演唱会-日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0810-アカシアの夢(演唱会-日语）.mp3"
				},
				{
                "track": 808,
                "name": "邓丽君-0809-アカシアの夢(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0809-アカシアの夢(日语）.mp3"
				},
				{
                "track": 807,
                "name": "邓丽君-0808-Yes,愛につつまれ(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0808-Yes,愛につつまれ(日语）.mp3"
				},
				{
                "track": 806,
                "name": "邓丽君-0807-Was Ich Dir Sagen Will(日语）",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0807-Was Ich Dir Sagen Will(日语）.mp3"
				},
				{
                "track": 805,
                "name": "邓丽君-0806-pourquoi(日语)",
                "length": "4:46",
                "file": "邓丽君1000首/13-邓丽君影音珍藏（日语）/邓丽君-0806-pourquoi(日语).mp3"
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