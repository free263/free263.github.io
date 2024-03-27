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
                "name": "BoA-MySweetie",
                "length": "4:46",
                "file": "韩国音乐/BoA-MySweetie.mp3"
				},
				{
                "track": 128,
                "name": "BoA-MyOnlyOne",
                "length": "4:46",
                "file": "韩国音乐/BoA-MyOnlyOne.mp3"
				},
				{
                "track": 127,
                "name": "BoA-MyName(KroeanVer.)",
                "length": "4:46",
                "file": "韩国音乐/BoA-MyName(KroeanVer.).mp3"
				},
				{
                "track": 126,
                "name": "BoA-MyGenie",
                "length": "4:46",
                "file": "韩国音乐/BoA-MyGenie.mp3"
				},
				{
                "track": 125,
                "name": "BoA-Moto",
                "length": "4:46",
                "file": "韩国音乐/BoA-Moto.mp3"
				},
				{
                "track": 124,
                "name": "BoA-MoonSunrise",
                "length": "4:46",
                "file": "韩国音乐/BoA-MoonSunrise.mp3"
				},
				{
                "track": 123,
                "name": "BoA-MilkyWay",
                "length": "4:46",
                "file": "韩国音乐/BoA-MilkyWay.mp3"
				},
				{
                "track": 122,
                "name": "BoA-Milestone",
                "length": "4:46",
                "file": "韩国音乐/BoA-Milestone.mp3"
				},
				{
                "track": 121,
                "name": "BoA-MEP(MyElectronicPiano)",
                "length": "4:46",
                "file": "韩国音乐/BoA-MEP(MyElectronicPiano).mp3"
				},
				{
                "track": 120,
                "name": "BoA-MegaStep",
                "length": "4:46",
                "file": "韩国音乐/BoA-MegaStep.mp3"
				},
				{
                "track": 119,
                "name": "BoA-MaydayMayday",
                "length": "4:46",
                "file": "韩国音乐/BoA-MaydayMayday.mp3"
				},
				{
                "track": 118,
                "name": "BoA-MASAYUMECHASING",
                "length": "4:46",
                "file": "韩国音乐/BoA-MASAYUMECHASING.mp3"
				},
				{
                "track": 117,
                "name": "BoA-MakeASecret",
                "length": "4:46",
                "file": "韩国音乐/BoA-MakeASecret.mp3"
				},
				{
                "track": 116,
                "name": "BoA-LoveLetter",
                "length": "4:46",
                "file": "韩国音乐/BoA-LoveLetter.mp3"
				},
				{
                "track": 115,
                "name": "BoA-LoveIsJustWhatYouCan’tSee",
                "length": "4:46",
                "file": "韩国音乐/BoA-LoveIsJustWhatYouCan’tSee.mp3"
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