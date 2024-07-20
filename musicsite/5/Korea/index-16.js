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
                "track": 54,
                "name": "BoA-DontKnowWhatToSay",
                "length": "4:46",
                "file": "韩国音乐/BoA-DontKnowWhatToSay.mp3"
				},
				{
                "track": 53,
                "name": "BoA-Distiny",
                "length": "4:46",
                "file": "韩国音乐/BoA-Distiny.mp3"
				},
				{
                "track": 52,
                "name": "BoA-Distance",
                "length": "4:46",
                "file": "韩国音乐/BoA-Distance.mp3"
				},
				{
                "track": 51,
                "name": "BoA-Discovery",
                "length": "4:46",
                "file": "韩国音乐/BoA-Discovery.mp3"
				},
				{
                "track": 50,
                "name": "BoA-Dis(Disturbance)",
                "length": "4:46",
                "file": "韩国音乐/BoA-Dis(Disturbance).mp3"
				},
				{
                "track": 49,
                "name": "BoA-DidYa",
                "length": "4:46",
                "file": "韩国音乐/BoA-DidYa.mp3"
				},
				{
                "track": 48,
                "name": "BoA-DiamondHeart",
                "length": "4:46",
                "file": "韩国音乐/BoA-DiamondHeart.mp3"
				},
				{
                "track": 47,
                "name": "BoA-DearMyLove..",
                "length": "4:46",
                "file": "韩国音乐/BoA-DearMyLove...mp3"
				},
				{
                "track": 46,
                "name": "BoA-Dangerous",
                "length": "4:46",
                "file": "韩国音乐/BoA-Dangerous.mp3"
				},
				{
                "track": 45,
                "name": "BoA-CutMeOff",
                "length": "4:46",
                "file": "韩国音乐/BoA-CutMeOff.mp3"
				},
				{
                "track": 44,
                "name": "BoA-CrazyAbout",
                "length": "4:46",
                "file": "韩国音乐/BoA-CrazyAbout.mp3"
				},
				{
                "track": 43,
                "name": "BoA-Copy&Paste",
                "length": "4:46",
                "file": "韩国音乐/BoA-Copy&Paste.mp3"
				},
				{
                "track": 42,
                "name": "BoA-Control",
                "length": "4:46",
                "file": "韩国音乐/BoA-Control.mp3"
				},
				{
                "track": 41,
                "name": "BoA-Cloud",
                "length": "4:46",
                "file": "韩国音乐/BoA-Cloud.mp3"
				},
				{
                "track": 40,
                "name": "BoA-CloseToMe",
                "length": "4:46",
                "file": "韩国音乐/BoA-CloseToMe.mp3"
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