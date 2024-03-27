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
                "track": 129,
                "name": "邓丽君-野生花（国语）0130",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-野生花（国语）0130.mp3"
				},
				{
                "track": 128,
                "name": "邓丽君-采红菱（国语）0047",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-采红菱（国语）0047.mp3"
				},
				{
                "track": 127,
                "name": "邓丽君-采槟榔（国语）0046",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-采槟榔（国语）0046.mp3"
				},
				{
                "track": 126,
                "name": "邓丽君-逃避行（国语）0104",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-逃避行（国语）0104.mp3"
				},
				{
                "track": 125,
                "name": "邓丽君-迎春花（国语）0134",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-迎春花（国语）0134.mp3"
				},
				{
                "track": 124,
                "name": "邓丽君-襟裳岬（国语）0075",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-襟裳岬（国语）0075.mp3"
				},
				{
                "track": 123,
                "name": "邓丽君-莫奔跑（国语）0083",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-莫奔跑（国语）0083.mp3"
				},
				{
                "track": 122,
                "name": "邓丽君-茶叶青（国语）0048",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-茶叶青（国语）0048.mp3"
				},
				{
                "track": 121,
                "name": "邓丽君-花的梦（国语）0071",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-花的梦（国语）0071.mp3"
				},
				{
                "track": 120,
                "name": "邓丽君-花开了（国语）0072",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-花开了（国语）0072.mp3"
				},
				{
                "track": 119,
                "name": "邓丽君-胭脂泪（国语）0129",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-胭脂泪（国语）0129.mp3"
				},
				{
                "track": 118,
                "name": "邓丽君-背新娘（国语）0043",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-背新娘（国语）0043.mp3"
				},
				{
                "track": 117,
                "name": "邓丽君-翠湖寒（国语）0062",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-翠湖寒（国语）0062.mp3"
				},
				{
                "track": 116,
                "name": "邓丽君-笑眯眯（国语）0125",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-笑眯眯（国语）0125.mp3"
				},
				{
                "track": 115,
                "name": "邓丽君-碎心花（国语）0101",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-碎心花（国语）0101.mp3"
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