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
                "track": 219,
                "name": "Fin.K.L-BlueRain",
                "length": "4:46",
                "file": "韩国音乐/Fin.K.L-BlueRain.mp3"
				},
				{
                "track": 218,
                "name": "DreamGirls殆死悲爱-ImSorry",
                "length": "4:46",
                "file": "韩国音乐/DreamGirls殆死悲爱-ImSorry.mp3"
				},
				{
                "track": 217,
                "name": "Davichi-可笑的爱情",
                "length": "4:46",
                "file": "韩国音乐/Davichi-可笑的爱情.mp3"
				},
				{
                "track": 216,
                "name": "davichi-即使恨也爱你",
                "length": "4:46",
                "file": "韩国音乐/davichi-即使恨也爱你.mp3"
				},
				{
                "track": 215,
                "name": "davichi-悲伤的约定",
                "length": "4:46",
                "file": "韩国音乐/davichi-悲伤的约定.mp3"
				},
				{
                "track": 214,
                "name": "davichi-爱情和战争",
                "length": "4:46",
                "file": "韩国音乐/davichi-爱情和战争.mp3"
				},
				{
                "track": 213,
                "name": "Dana-到世界尽头",
                "length": "4:46",
                "file": "韩国音乐/Dana-到世界尽头.mp3"
				},
				{
                "track": 212,
                "name": "BoA-永远",
                "length": "4:46",
                "file": "韩国音乐/BoA-永远.mp3"
				},
				{
                "track": 211,
                "name": "BoA-心の手紙",
                "length": "4:46",
                "file": "韩国音乐/BoA-心の手紙.mp3"
				},
				{
                "track": 210,
                "name": "BoA-世界的象征",
                "length": "4:46",
                "file": "韩国音乐/BoA-世界的象征.mp3"
				},
				{
                "track": 209,
                "name": "BoA-世界の片隅で",
                "length": "4:46",
                "file": "韩国音乐/BoA-世界の片隅で.mp3"
				},
				{
                "track": 208,
                "name": "BoA-气持ちはつたわる",
                "length": "4:46",
                "file": "韩国音乐/BoA-气持ちはつたわる.mp3"
				},
				{
                "track": 207,
                "name": "BoA-奇蹟",
                "length": "4:46",
                "file": "韩国音乐/BoA-奇蹟.mp3"
				},
				{
                "track": 206,
                "name": "BoA-红鼻子的驯鹿",
                "length": "4:46",
                "file": "韩国音乐/BoA-红鼻子的驯鹿.mp3"
				},
				{
                "track": 205,
                "name": "BoA-大家的心情",
                "length": "4:46",
                "file": "韩国音乐/BoA-大家的心情.mp3"
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