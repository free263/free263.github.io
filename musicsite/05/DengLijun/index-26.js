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
                "track": 624,
                "name": "邓丽君-望着天空的女孩（国语）0617",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-望着天空的女孩（国语）0617.mp3"
				},
				{
                "track": 623,
                "name": "邓丽君-有谁知我此时情（国语）0640",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-有谁知我此时情（国语）0640.mp3"
				},
				{
                "track": 622,
                "name": "邓丽君-有了春天不知道（国语）0639",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-有了春天不知道（国语）0639.mp3"
				},
				{
                "track": 621,
                "name": "邓丽君-有个女孩等着你（国语）0638",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-有个女孩等着你（国语）0638.mp3"
				},
				{
                "track": 620,
                "name": "邓丽君-月亮代表我的心（演唱会）0655",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-月亮代表我的心（演唱会）0655.mp3"
				},
				{
                "track": 619,
                "name": "邓丽君-月亮代表我的心（国语）0654",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-月亮代表我的心（国语）0654.mp3"
				},
				{
                "track": 618,
                "name": "邓丽君-是你打来的电话（国语）0608",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-是你打来的电话（国语）0608.mp3"
				},
				{
                "track": 617,
                "name": "邓丽君-春风轻轻拂杨柳（国语）0572",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-春风轻轻拂杨柳（国语）0572.mp3"
				},
				{
                "track": 616,
                "name": "邓丽君-明月千里寄相思（国语）0591",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-明月千里寄相思（国语）0591.mp3"
				},
				{
                "track": 615,
                "name": "邓丽君-无情荒地有情天（国语）0627",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-无情荒地有情天（国语）0627.mp3"
				},
				{
                "track": 614,
                "name": "邓丽君-提起爱情多烦恼（国语）0613",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-提起爱情多烦恼（国语）0613.mp3"
				},
				{
                "track": 613,
                "name": "邓丽君-把爱埋藏在心窝（国语）0566",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-把爱埋藏在心窝（国语）0566.mp3"
				},
				{
                "track": 612,
                "name": "邓丽君-把春天留在心中（国语）0567",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-把春天留在心中（国语）0567.mp3"
				},
				{
                "track": 611,
                "name": "邓丽君-把你印在心窝里（国语）0568",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-把你印在心窝里（国语）0568.mp3"
				},
				{
                "track": 610,
                "name": "邓丽君-我的身边有个你（国语）0622",
                "length": "4:46",
                "file": "邓丽君1000首/06-邓丽君影音珍藏（7字国语）/邓丽君-我的身边有个你（国语）0622.mp3"
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