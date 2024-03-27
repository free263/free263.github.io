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
                "track": 234,
                "name": "WAX-渴望爱情",
                "length": "4:46",
                "file": "韩国音乐/WAX-渴望爱情.mp3"
				},
				{
                "track": 233,
                "name": "WAX-改变化装",
                "length": "4:46",
                "file": "韩国音乐/WAX-改变化装.mp3"
				},
				{
                "track": 232,
                "name": "WAX-Money",
                "length": "4:46",
                "file": "韩国音乐/WAX-Money.mp3"
				},
				{
                "track": 231,
                "name": "WAX",
                "length": "4:46",
                "file": "韩国音乐/WAX.mp3"
				},
				{
                "track": 230,
                "name": "tara-LoveyDovey",
                "length": "4:46",
                "file": "韩国音乐/tara-LoveyDovey.mp3"
				},
				{
                "track": 229,
                "name": "sHarp-我的嘴唇如暖暖的咖啡",
                "length": "4:46",
                "file": "韩国音乐/sHarp-我的嘴唇如暖暖的咖啡.mp3"
				},
				{
                "track": 228,
                "name": "rania-DrFeelGood",
                "length": "4:46",
                "file": "韩国音乐/rania-DrFeelGood.mp3"
				},
				{
                "track": 227,
                "name": "Psy-江南Style",
                "length": "4:46",
                "file": "韩国音乐/Psy-江南Style.mp3"
				},
				{
                "track": 226,
                "name": "Lyn-歌信",
                "length": "4:46",
                "file": "韩国音乐/Lyn-歌信.mp3"
				},
				{
                "track": 225,
                "name": "Lyn-爱情都是谎言",
                "length": "4:46",
                "file": "韩国音乐/Lyn-爱情都是谎言.mp3"
				},
				{
                "track": 224,
                "name": "kiss-因为是女子",
                "length": "4:46",
                "file": "韩国音乐/kiss-因为是女子.mp3"
				},
				{
                "track": 223,
                "name": "Kara-Honey",
                "length": "4:46",
                "file": "韩国音乐/Kara-Honey.mp3"
				},
				{
                "track": 222,
                "name": "Jewelry-更喜欢你",
                "length": "4:46",
                "file": "韩国音乐/Jewelry-更喜欢你.mp3"
				},
				{
                "track": 221,
                "name": "jewelry-Super_Star",
                "length": "4:46",
                "file": "韩国音乐/jewelry-Super_Star.mp3"
				},
				{
                "track": 220,
                "name": "jewelry-again",
                "length": "4:46",
                "file": "韩国音乐/jewelry-again.mp3"
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