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
                "track": 24,
                "name": "邓丽君-旅愁（国语）0024",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-旅愁（国语）0024.mp3"
				},
				{
                "track": 23,
                "name": "邓丽君-挥别（国语）0018",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-挥别（国语）0018.mp3"
				},
				{
                "track": 22,
                "name": "邓丽君-拷红（国语）0022",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-拷红（国语）0022.mp3"
				},
				{
                "track": 21,
                "name": "邓丽君-戏凤（国语）0051",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-戏凤（国语）0051.mp3"
				},
				{
                "track": 20,
                "name": "邓丽君-惜别（国语）0050",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-惜别（国语）0050.mp3"
				},
				{
                "track": 19,
                "name": "邓丽君-情迷（国语）0035",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-情迷（国语）0035.mp3"
				},
				{
                "track": 18,
                "name": "邓丽君-情花（国语）0034",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-情花（国语）0034.mp3"
				},
				{
                "track": 17,
                "name": "邓丽君-情湖（国语）0033",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-情湖（国语）0033.mp3"
				},
				{
                "track": 16,
                "name": "邓丽君-思君（国语）0040",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-思君（国语）0040.mp3"
				},
				{
                "track": 15,
                "name": "邓丽君-心事（国语）0053",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-心事（国语）0053.mp3"
				},
				{
                "track": 14,
                "name": "邓丽君-小路（国语）0052",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-小路（国语）0052.mp3"
				},
				{
                "track": 13,
                "name": "邓丽君-寻找（国语）0054",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-寻找（国语）0054.mp3"
				},
				{
                "track": 12,
                "name": "邓丽君-孤雁（国语）0010",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-孤雁（国语）0010.mp3"
				},
				{
                "track": 11,
                "name": "邓丽君-娘心（国语）0028",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-娘心（国语）0028.mp3"
				},
				{
                "track": 10,
                "name": "邓丽君-奈何（国语）0027",
                "length": "4:46",
                "file": "邓丽君1000首/01-邓丽君影音珍藏（2字国语）/邓丽君-奈何（国语）0027.mp3"
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