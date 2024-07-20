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
                "track": 771,
                "name": "714.Onedayinthesummer",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/714.Onedayinthesummer.mp3"
				},
				{
                "track": 770,
                "name": "713.あの花",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/713.あの花.mp3"
				},
				{
                "track": 769,
                "name": "712.RainbowPuffs",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/712.RainbowPuffs.mp3"
				},
				{
                "track": 768,
                "name": "711.Tranquillity",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/711.Tranquillity.mp3"
				},
				{
                "track": 767,
                "name": "710.ifthe...",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/710.ifthe....mp3"
				},
				{
                "track": 766,
                "name": "709.Makeup-弥补",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/709.Makeup-弥补.mp3"
				},
				{
                "track": 765,
                "name": "708.Lonelyhand",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/708.Lonelyhand.mp3"
				},
				{
                "track": 764,
                "name": "707.Thetasteoftears",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/707.Thetasteoftears.mp3"
				},
				{
                "track": 763,
                "name": "706.littlelovelyface",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/706.littlelovelyface.mp3"
				},
				{
                "track": 762,
                "name": "705.Kindness",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/705.Kindness.mp3"
				},
				{
                "track": 761,
                "name": "704.Warmyellow",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/704.Warmyellow.mp3"
				},
				{
                "track": 760,
                "name": "703.Stay",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/703.Stay.mp3"
				},
				{
                "track": 759,
                "name": "702.Gonewiththecloud",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/702.Gonewiththecloud.mp3"
				},
				{
                "track": 758,
                "name": "701.Countdown",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/701.Countdown.mp3"
				},
				{
                "track": 757,
                "name": "700.Senseofalienation",
                "length": "4:46",
                "file": "治愈系放空舒缓音乐/700.Senseofalienation.mp3"
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