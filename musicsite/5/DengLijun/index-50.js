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
                "track": 264,
                "name": "邓丽君-迷你迷你（国语）0193",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-迷你迷你（国语）0193.mp3"
				},
				{
                "track": 263,
                "name": "邓丽君-近水楼台（国语）0176",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-近水楼台（国语）0176.mp3"
				},
				{
                "track": 262,
                "name": "邓丽君-谈情时候（国语）0225",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-谈情时候（国语）0225.mp3"
				},
				{
                "track": 261,
                "name": "邓丽君-谁来爱我（国语）0221",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-谁来爱我（国语）0221.mp3"
				},
				{
                "track": 260,
                "name": "邓丽君-蜜语重重（国语）0194",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-蜜语重重（国语）0194.mp3"
				},
				{
                "track": 259,
                "name": "邓丽君-虹彩妹妹（国语）0173",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-虹彩妹妹（国语）0173.mp3"
				},
				{
                "track": 258,
                "name": "邓丽君-蔷薇姑娘（国语）0207",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-蔷薇姑娘（国语）0207.mp3"
				},
				{
                "track": 257,
                "name": "邓丽君-蒙古牧歌（国语）0192",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-蒙古牧歌（国语）0192.mp3"
				},
				{
                "track": 256,
                "name": "邓丽君-落叶思情（国语）0187",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-落叶思情（国语）0187.mp3"
				},
				{
                "track": 255,
                "name": "邓丽君-莫忘今宵（国语）0197",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-莫忘今宵（国语）0197.mp3"
				},
				{
                "track": 254,
                "name": "邓丽君-茶山情歌（国语）0158",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-茶山情歌（国语）0158.mp3"
				},
				{
                "track": 253,
                "name": "邓丽君-苗女弄杯（国语）0195",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-苗女弄杯（国语）0195.mp3"
				},
				{
                "track": 252,
                "name": "邓丽君-芳草无情（国语）0165",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-芳草无情（国语）0165.mp3"
				},
				{
                "track": 251,
                "name": "邓丽君-艳红小曲（国语）0250",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-艳红小曲（国语）0250.mp3"
				},
				{
                "track": 250,
                "name": "邓丽君-相看泪眼(（国语）0240",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-相看泪眼(（国语）0240.mp3"
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