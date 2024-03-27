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
                "track": 69,
                "name": "BoA-EveryHeart",
                "length": "4:46",
                "file": "韩国音乐/BoA-EveryHeart.mp3"
				},
				{
                "track": 68,
                "name": "BoA-EVERYBODYKNOWS",
                "length": "4:46",
                "file": "韩国音乐/BoA-EVERYBODYKNOWS.mp3"
				},
				{
                "track": 67,
                "name": "BoA-Everlasting",
                "length": "4:46",
                "file": "韩国音乐/BoA-Everlasting.mp3"
				},
				{
                "track": 66,
                "name": "BoA-Energetic",
                "length": "4:46",
                "file": "韩国音乐/BoA-Energetic.mp3"
				},
				{
                "track": 65,
                "name": "BoA-EatYouUp",
                "length": "4:46",
                "file": "韩国音乐/BoA-EatYouUp.mp3"
				},
				{
                "track": 64,
                "name": "BoA-Earthsong",
                "length": "4:46",
                "file": "韩国音乐/BoA-Earthsong.mp3"
				},
				{
                "track": 63,
                "name": "BoA-Duvet",
                "length": "4:46",
                "file": "韩国音乐/BoA-Duvet.mp3"
				},
				{
                "track": 62,
                "name": "BoA-DressOff",
                "length": "4:46",
                "file": "韩国音乐/BoA-DressOff.mp3"
				},
				{
                "track": 61,
                "name": "BoA-DreamsComeTrue",
                "length": "4:46",
                "file": "韩国音乐/BoA-DreamsComeTrue.mp3"
				},
				{
                "track": 60,
                "name": "BoA-DoYouLoveMe()-Bo)",
                "length": "4:46",
                "file": "韩国音乐/BoA-DoYouLoveMe()-Bo).mp3"
				},
				{
                "track": 59,
                "name": "BoA-Double",
                "length": "4:46",
                "file": "韩国音乐/BoA-Double.mp3"
				},
				{
                "track": 58,
                "name": "BoA-DoTheMotion",
                "length": "4:46",
                "file": "韩国音乐/BoA-DoTheMotion.mp3"
				},
				{
                "track": 57,
                "name": "BoA-DontStartNow",
                "length": "4:46",
                "file": "韩国音乐/BoA-DontStartNow.mp3"
				},
				{
                "track": 56,
                "name": "BoA-DontStartNow(KoreanVersion)",
                "length": "4:46",
                "file": "韩国音乐/BoA-DontStartNow(KoreanVersion).mp3"
				},
				{
                "track": 55,
                "name": "BoA-DontStartNow(EnglishVersion)",
                "length": "4:46",
                "file": "韩国音乐/BoA-DontStartNow(EnglishVersion).mp3"
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