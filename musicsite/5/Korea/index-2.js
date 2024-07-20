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
                "track": 264,
                "name": "少女时代-MrTaxi",
                "length": "4:46",
                "file": "韩国音乐/少女时代-MrTaxi.mp3"
				},
				{
                "track": 263,
                "name": "少女时代-Mr.Mr.(Japanesever.)",
                "length": "4:46",
                "file": "韩国音乐/少女时代-Mr.Mr.(Japanesever.).mp3"
				},
				{
                "track": 262,
                "name": "少女时代-IntoTheNewWorld",
                "length": "4:46",
                "file": "韩国音乐/少女时代-IntoTheNewWorld.mp3"
				},
				{
                "track": 261,
                "name": "少女时代-HOOT",
                "length": "4:46",
                "file": "韩国音乐/少女时代-HOOT.mp3"
				},
				{
                "track": 260,
                "name": "少女时代-Holiday",
                "length": "4:46",
                "file": "韩国音乐/少女时代-Holiday.mp3"
				},
				{
                "track": 259,
                "name": "少女时代-Gee",
                "length": "4:46",
                "file": "韩国音乐/少女时代-Gee.mp3"
				},
				{
                "track": 258,
                "name": "少女时代-Gee(Japanesever.)",
                "length": "4:46",
                "file": "韩国音乐/少女时代-Gee(Japanesever.).mp3"
				},
				{
                "track": 257,
                "name": "少女时代-GalaxySupernova",
                "length": "4:46",
                "file": "韩国音乐/少女时代-GalaxySupernova.mp3"
				},
				{
                "track": 256,
                "name": "少女时代-BeepBeep",
                "length": "4:46",
                "file": "韩国音乐/少女时代-BeepBeep.mp3"
				},
				{
                "track": 255,
                "name": "少女时代-Animal",
                "length": "4:46",
                "file": "韩国音乐/少女时代-Animal.mp3"
				},
				{
                "track": 254,
                "name": "朴孝信-雪之花",
                "length": "4:46",
                "file": "韩国音乐/朴孝信-雪之花.mp3"
				},
				{
                "track": 253,
                "name": "朴慧京-结婚",
                "length": "4:46",
                "file": "韩国音乐/朴慧京-结婚.mp3"
				},
				{
                "track": 252,
                "name": "朴慧京-yesterday",
                "length": "4:46",
                "file": "韩国音乐/朴慧京-yesterday.mp3"
				},
				{
                "track": 251,
                "name": "朴惠京-RAIN",
                "length": "4:46",
                "file": "韩国音乐/朴惠京-RAIN.mp3"
				},
				{
                "track": 250,
                "name": "裴勇俊-MyMemory",
                "length": "4:46",
                "file": "韩国音乐/裴勇俊-MyMemory.mp3"
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