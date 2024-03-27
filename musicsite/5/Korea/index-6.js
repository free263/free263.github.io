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
                "track": 204,
                "name": "BoA-抱きしめる",
                "length": "4:46",
                "file": "韩国音乐/BoA-抱きしめる.mp3"
				},
				{
                "track": 203,
                "name": "BoA-薄雾",
                "length": "4:46",
                "file": "韩国音乐/BoA-薄雾.mp3"
				},
				{
                "track": 202,
                "name": "BoA-メリクリ",
                "length": "4:46",
                "file": "韩国音乐/BoA-メリクリ.mp3"
				},
				{
                "track": 201,
                "name": "BoA-メリクリ(BEST&USAVersion)",
                "length": "4:46",
                "file": "韩国音乐/BoA-メリクリ(BEST&USAVersion).mp3"
				},
				{
                "track": 200,
                "name": "BoA-ギャップにやられた!",
                "length": "4:46",
                "file": "韩国音乐/BoA-ギャップにやられた!.mp3"
				},
				{
                "track": 199,
                "name": "BoA-YourColor",
                "length": "4:46",
                "file": "韩国音乐/BoA-YourColor.mp3"
				},
				{
                "track": 198,
                "name": "BoA-WOOWEEKEND",
                "length": "4:46",
                "file": "韩国音乐/BoA-WOOWEEKEND.mp3"
				},
				{
                "track": 197,
                "name": "BoA-Woman",
                "length": "4:46",
                "file": "韩国音乐/BoA-Woman.mp3"
				},
				{
                "track": 196,
                "name": "BoA-WithYou",
                "length": "4:46",
                "file": "韩国音乐/BoA-WithYou.mp3"
				},
				{
                "track": 195,
                "name": "BoA-WithU",
                "length": "4:46",
                "file": "韩国音乐/BoA-WithU.mp3"
				},
				{
                "track": 194,
                "name": "BoA-WinterLove",
                "length": "4:46",
                "file": "韩国音乐/BoA-WinterLove.mp3"
				},
				{
                "track": 193,
                "name": "BoA-WhiteWishes",
                "length": "4:46",
                "file": "韩国音乐/BoA-WhiteWishes.mp3"
				},
				{
                "track": 192,
                "name": "BoA-WhiteWishes(EnglishVersion)",
                "length": "4:46",
                "file": "韩国音乐/BoA-WhiteWishes(EnglishVersion).mp3"
				},
				{
                "track": 191,
                "name": "BoA-WhiteChristmas",
                "length": "4:46",
                "file": "韩国音乐/BoA-WhiteChristmas.mp3"
				},
				{
                "track": 190,
                "name": "BoA-Whatever",
                "length": "4:46",
                "file": "韩国音乐/BoA-Whatever.mp3"
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