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
                "track": 99,
                "name": "邓丽君-望一望（国语）0111",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-望一望（国语）0111.mp3"
				},
				{
                "track": 98,
                "name": "邓丽君-月桃花（国语）0137",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-月桃花（国语）0137.mp3"
				},
				{
                "track": 97,
                "name": "邓丽君-星星索（国语）0126",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-星星索（国语）0126.mp3"
				},
				{
                "track": 96,
                "name": "邓丽君-我的心（国语）0117",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-我的心（国语）0117.mp3"
				},
				{
                "track": 95,
                "name": "邓丽君-我爱你（国语）0116",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-我爱你（国语）0116.mp3"
				},
				{
                "track": 94,
                "name": "邓丽君-我和你（国语）0118",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-我和你（国语）0118.mp3"
				},
				{
                "track": 93,
                "name": "邓丽君-慈母恩（国语）0061",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-慈母恩（国语）0061.mp3"
				},
				{
                "track": 92,
                "name": "邓丽君-想起你（国语）0119",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-想起你（国语）0119.mp3"
				},
				{
                "track": 91,
                "name": "邓丽君-情飘飘（国语）0091",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-情飘飘（国语）0091.mp3"
				},
				{
                "track": 90,
                "name": "邓丽君-情难守（国语）0090",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-情难守（国语）0090.mp3"
				},
				{
                "track": 89,
                "name": "邓丽君-情哥哥（国语）0089",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-情哥哥（国语）0089.mp3"
				},
				{
                "track": 88,
                "name": "邓丽君-忘不了（国语）0110",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-忘不了（国语）0110.mp3"
				},
				{
                "track": 87,
                "name": "邓丽君-异乡人（国语）0133",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-异乡人（国语）0133.mp3"
				},
				{
                "track": 86,
                "name": "邓丽君-山茶花（国语）0093",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-山茶花（国语）0093.mp3"
				},
				{
                "track": 85,
                "name": "邓丽君-小河边（国语）0123",
                "length": "4:46",
                "file": "邓丽君1000首/02-邓丽君影音珍藏（3字国语）/邓丽君-小河边（国语）0123.mp3"
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