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
                "track": 189,
                "name": "BoA-We(Bo)",
                "length": "4:46",
                "file": "韩国音乐/BoA-We(Bo).mp3"
				},
				{
                "track": 188,
                "name": "BoA-ve(EveryBreathYouTake)",
                "length": "4:46",
                "file": "韩国音乐/BoA-ve(EveryBreathYouTake).mp3"
				},
				{
                "track": 187,
                "name": "BoA-Tree",
                "length": "4:46",
                "file": "韩国音乐/BoA-Tree.mp3"
				},
				{
                "track": 186,
                "name": "BoA-Tragic",
                "length": "4:46",
                "file": "韩国音乐/BoA-Tragic.mp3"
				},
				{
                "track": 185,
                "name": "BoA-Touched",
                "length": "4:46",
                "file": "韩国音乐/BoA-Touched.mp3"
				},
				{
                "track": 184,
                "name": "BoA-Touch",
                "length": "4:46",
                "file": "韩国音乐/BoA-Touch.mp3"
				},
				{
                "track": 183,
                "name": "BoA-TimeToBegin",
                "length": "4:46",
                "file": "韩国音乐/BoA-TimeToBegin.mp3"
				},
				{
                "track": 182,
                "name": "BoA-TheTop",
                "length": "4:46",
                "file": "韩国音乐/BoA-TheTop.mp3"
				},
				{
                "track": 181,
                "name": "BoA-TheShowMustGoOn",
                "length": "4:46",
                "file": "韩国音乐/BoA-TheShowMustGoOn.mp3"
				},
				{
                "track": 180,
                "name": "BoA-TheShadow",
                "length": "4:46",
                "file": "韩国音乐/BoA-TheShadow.mp3"
				},
				{
                "track": 179,
                "name": "BoA-TheLightsOfSeoul",
                "length": "4:46",
                "file": "韩国音乐/BoA-TheLightsOfSeoul.mp3"
				},
				{
                "track": 178,
                "name": "BoA-TheChristmasSong",
                "length": "4:46",
                "file": "韩国音乐/BoA-TheChristmasSong.mp3"
				},
				{
                "track": 177,
                "name": "BoA-Temptations",
                "length": "4:46",
                "file": "韩国音乐/BoA-Temptations.mp3"
				},
				{
                "track": 176,
                "name": "BoA-SweetImpact",
                "length": "4:46",
                "file": "韩国音乐/BoA-SweetImpact.mp3"
				},
				{
                "track": 175,
                "name": "BoA-Sunshine",
                "length": "4:46",
                "file": "韩国音乐/BoA-Sunshine.mp3"
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