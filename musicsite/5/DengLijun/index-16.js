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
                "track": 774,
                "name": "邓丽君-The Power of Love(英语）0774",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-The Power of Love(英语）0774.mp3"
				},
				{
                "track": 773,
                "name": "邓丽君-the greatest love of all(英语）0773",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-the greatest love of all(英语）0773.mp3"
				},
				{
                "track": 772,
                "name": "邓丽君-Stupid cupid(英语-现场)0772",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-Stupid cupid(英语-现场)0772.mp3"
				},
				{
                "track": 771,
                "name": "邓丽君-Speedy gonzales(英语）0771",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-Speedy gonzales(英语）0771.mp3"
				},
				{
                "track": 770,
                "name": "邓丽君-Smoke Gets In Your Eyes(英语）0770",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-Smoke Gets In Your Eyes(英语）0770.mp3"
				},
				{
                "track": 769,
                "name": "邓丽君-Rhythm of the rain(英语）0761",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-Rhythm of the rain(英语）0761.mp3"
				},
				{
                "track": 768,
                "name": "邓丽君-Oh Carol(英语）0769",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-Oh Carol(英语）0769.mp3"
				},
				{
                "track": 767,
                "name": "邓丽君-My Way(英语)0768",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-My Way(英语)0768.mp3"
				},
				{
                "track": 766,
                "name": "邓丽君-More Than I Can Say(英语-马来西亚演唱会）0767",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-More Than I Can Say(英语-马来西亚演唱会）0767.mp3"
				},
				{
                "track": 765,
                "name": "邓丽君-Medley_Last Dance_Hot Stuff_Fame(英语-演唱会)0766",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-Medley_Last Dance_Hot Stuff_Fame(英语-演唱会)0766.mp3"
				},
				{
                "track": 764,
                "name": "邓丽君-Love The World Away(英语)0765",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-Love The World Away(英语)0765.mp3"
				},
				{
                "track": 763,
                "name": "邓丽君-love Story(英语）0764",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-love Story(英语）0764.mp3"
				},
				{
                "track": 762,
                "name": "邓丽君-Lipstick On Your Collar(英语）0763",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-Lipstick On Your Collar(英语）0763.mp3"
				},
				{
                "track": 761,
                "name": "邓丽君-Let It Be Me(英语）0762",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-Let It Be Me(英语）0762.mp3"
				},
				{
                "track": 760,
                "name": "邓丽君-Killing Me Softly With His Song(英语）0760",
                "length": "4:46",
                "file": "邓丽君1000首/11-邓丽君影音珍藏（英语）/邓丽君-Killing Me Softly With His Song(英语）0760.mp3"
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