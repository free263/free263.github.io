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
                "track": 189,
                "name": "邓丽君-往日时光（国语）0227",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-往日时光（国语）0227.mp3"
				},
				{
                "track": 188,
                "name": "邓丽君-往事如昨（国语）0228",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-往事如昨（国语）0228.mp3"
				},
				{
                "track": 187,
                "name": "邓丽君-山东曼波（国语）0217",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-山东曼波（国语）0217.mp3"
				},
				{
                "track": 186,
                "name": "邓丽君-小窗相思（国语）0245",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-小窗相思（国语）0245.mp3"
				},
				{
                "track": 185,
                "name": "邓丽君-小村之恋（国语）0246",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-小村之恋（国语）0246.mp3"
				},
				{
                "track": 184,
                "name": "邓丽君-小城故事（国语）0258",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-小城故事（国语）0258.mp3"
				},
				{
                "track": 183,
                "name": "邓丽君-小城故事（国语-演唱会）0244",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-小城故事（国语-演唱会）0244.mp3"
				},
				{
                "track": 182,
                "name": "邓丽君-妈妈的歌（国语）0188",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-妈妈的歌（国语）0188.mp3"
				},
				{
                "track": 181,
                "name": "邓丽君-奔向彩虹（国语）0156",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-奔向彩虹（国语）0156.mp3"
				},
				{
                "track": 180,
                "name": "邓丽君-夜的投影（国语）0252",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-夜的投影（国语）0252.mp3"
				},
				{
                "track": 179,
                "name": "邓丽君-夏日圣诞（国语）0236",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-夏日圣诞（国语）0236.mp3"
				},
				{
                "track": 178,
                "name": "邓丽君-在水一方（现场幽默珍藏版）0278",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-在水一方（现场幽默珍藏版）0278.mp3"
				},
				{
                "track": 177,
                "name": "邓丽君-在水一方（国语）0277",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-在水一方（国语）0277.mp3"
				},
				{
                "track": 176,
                "name": "邓丽君-圣诞铃声（国语）0220",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-圣诞铃声（国语）0220.mp3"
				},
				{
                "track": 175,
                "name": "邓丽君-四个愿望（国语）0223",
                "length": "4:46",
                "file": "邓丽君1000首/03-邓丽君影音珍藏（4字国语）/邓丽君-四个愿望（国语）0223.mp3"
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