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
                "track": 159,
                "name": "BoA-ShineWeAre!(Instrumental)",
                "length": "4:46",
                "file": "韩国音乐/BoA-ShineWeAre!(Instrumental).mp3"
				},
				{
                "track": 158,
                "name": "BoA-Shattered",
                "length": "4:46",
                "file": "韩国音乐/BoA-Shattered.mp3"
				},
				{
                "track": 157,
                "name": "BoA-ShareYourHeart(WithMe)",
                "length": "4:46",
                "file": "韩国音乐/BoA-ShareYourHeart(WithMe).mp3"
				},
				{
                "track": 156,
                "name": "BoA-SearchingForTruth",
                "length": "4:46",
                "file": "韩国音乐/BoA-SearchingForTruth.mp3"
				},
				{
                "track": 155,
                "name": "BoA-Sars",
                "length": "4:46",
                "file": "韩国音乐/BoA-Sars.mp3"
				},
				{
                "track": 154,
                "name": "BoA-SARA",
                "length": "4:46",
                "file": "韩国音乐/BoA-SARA.mp3"
				},
				{
                "track": 153,
                "name": "BoA-RockWithYou",
                "length": "4:46",
                "file": "韩国音乐/BoA-RockWithYou.mp3"
				},
				{
                "track": 152,
                "name": "BoA-RightHereRightEverywhere",
                "length": "4:46",
                "file": "韩国音乐/BoA-RightHereRightEverywhere.mp3"
				},
				{
                "track": 151,
                "name": "BoA-RECOLLECTION",
                "length": "4:46",
                "file": "韩国音乐/BoA-RECOLLECTION.mp3"
				},
				{
                "track": 150,
                "name": "BoA-REALIZE(staywithme)",
                "length": "4:46",
                "file": "韩国音乐/BoA-REALIZE(staywithme).mp3"
				},
				{
                "track": 149,
                "name": "BoA-Precious",
                "length": "4:46",
                "file": "韩国音乐/BoA-Precious.mp3"
				},
				{
                "track": 148,
                "name": "BoA-pr(SpringRain)",
                "length": "4:46",
                "file": "韩国音乐/BoA-pr(SpringRain).mp3"
				},
				{
                "track": 147,
                "name": "BoA-Power",
                "length": "4:46",
                "file": "韩国音乐/BoA-Power.mp3"
				},
				{
                "track": 146,
                "name": "BoA-POL(PowerOfLove)",
                "length": "4:46",
                "file": "韩国音乐/BoA-POL(PowerOfLove).mp3"
				},
				{
                "track": 145,
                "name": "BoA-PainLove",
                "length": "4:46",
                "file": "韩国音乐/BoA-PainLove.mp3"
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