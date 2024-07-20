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
                "track": 144,
                "name": "BoA-OutgrowReadyButterfly",
                "length": "4:46",
                "file": "韩国音乐/BoA-OutgrowReadyButterfly.mp3"
				},
				{
                "track": 143,
                "name": "BoA-OurLoveToMyParents",
                "length": "4:46",
                "file": "韩国音乐/BoA-OurLoveToMyParents.mp3"
				},
				{
                "track": 142,
                "name": "BoA-Op",
                "length": "4:46",
                "file": "韩国音乐/BoA-Op.mp3"
				},
				{
                "track": 141,
                "name": "BoA-OnlyOne",
                "length": "4:46",
                "file": "韩国音乐/BoA-OnlyOne.mp3"
				},
				{
                "track": 140,
                "name": "BoA-OnlyOne(Instrumental)",
                "length": "4:46",
                "file": "韩国音乐/BoA-OnlyOne(Instrumental).mp3"
				},
				{
                "track": 139,
                "name": "BoA-ONESHOTTWOSHOT",
                "length": "4:46",
                "file": "韩国音乐/BoA-ONESHOTTWOSHOT.mp3"
				},
				{
                "track": 138,
                "name": "BoA-OndWingsEmbracingEachOther",
                "length": "4:46",
                "file": "韩国音乐/BoA-OndWingsEmbracingEachOther.mp3"
				},
				{
                "track": 137,
                "name": "BoA-Obsessed",
                "length": "4:46",
                "file": "韩国音乐/BoA-Obsessed.mp3"
				},
				{
                "track": 136,
                "name": "BoA-NotOverU",
                "length": "4:46",
                "file": "韩国音乐/BoA-NotOverU.mp3"
				},
				{
                "track": 135,
                "name": "BoA-NothingsGonnaChange",
                "length": "4:46",
                "file": "韩国音乐/BoA-NothingsGonnaChange.mp3"
				},
				{
                "track": 134,
                "name": "BoA-NoMoreMakeMeSick",
                "length": "4:46",
                "file": "韩国音乐/BoA-NoMoreMakeMeSick.mp3"
				},
				{
                "track": 133,
                "name": "BoA-NobodyButYou",
                "length": "4:46",
                "file": "韩国音乐/BoA-NobodyButYou.mp3"
				},
				{
                "track": 132,
                "name": "BoA-No1",
                "length": "4:46",
                "file": "韩国音乐/BoA-No1.mp3"
				},
				{
                "track": 131,
                "name": "BoA-NextStep",
                "length": "4:46",
                "file": "韩国音乐/BoA-NextStep.mp3"
				},
				{
                "track": 130,
                "name": "BoA-NEGADOLA",
                "length": "4:46",
                "file": "韩国音乐/BoA-NEGADOLA.mp3"
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