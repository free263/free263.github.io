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
                "track": 279,
                "name": "玉珠铉-仲夏夜之梦",
                "length": "4:46",
                "file": "韩国音乐/玉珠铉-仲夏夜之梦.mp3"
				},
				{
                "track": 278,
                "name": "严正花-都走吧",
                "length": "4:46",
                "file": "韩国音乐/严正花-都走吧.mp3"
				},
				{
                "track": 277,
                "name": "我的野蛮女友-我相信",
                "length": "4:46",
                "file": "韩国音乐/我的野蛮女友-我相信.mp3"
				},
				{
                "track": 276,
                "name": "孙丹菲-星期六晚上",
                "length": "4:46",
                "file": "韩国音乐/孙丹菲-星期六晚上.mp3"
				},
				{
                "track": 275,
                "name": "淑熙-啦啦啦",
                "length": "4:46",
                "file": "韩国音乐/淑熙-啦啦啦.mp3"
				},
				{
                "track": 274,
                "name": "申彗星-在那个位置",
                "length": "4:46",
                "file": "韩国音乐/申彗星-在那个位置.mp3"
				},
				{
                "track": 273,
                "name": "申彗星-我慢慢死去",
                "length": "4:46",
                "file": "韩国音乐/申彗星-我慢慢死去.mp3"
				},
				{
                "track": 272,
                "name": "申彗星-爱情病",
                "length": "4:46",
                "file": "韩国音乐/申彗星-爱情病.mp3"
				},
				{
                "track": 271,
                "name": "申彗星-LoveLetter",
                "length": "4:46",
                "file": "韩国音乐/申彗星-LoveLetter.mp3"
				},
				{
                "track": 270,
                "name": "少女时代-TheBoys",
                "length": "4:46",
                "file": "韩国音乐/少女时代-TheBoys.mp3"
				},
				{
                "track": 269,
                "name": "少女时代-RunDevilRun",
                "length": "4:46",
                "file": "韩国音乐/少女时代-RunDevilRun.mp3"
				},
				{
                "track": 268,
                "name": "少女时代-PARTY",
                "length": "4:46",
                "file": "韩国音乐/少女时代-PARTY.mp3"
				},
				{
                "track": 267,
                "name": "少女时代-Paparazzi",
                "length": "4:46",
                "file": "韩国音乐/少女时代-Paparazzi.mp3"
				},
				{
                "track": 266,
                "name": "少女时代-Oh!",
                "length": "4:46",
                "file": "韩国音乐/少女时代-Oh!.mp3"
				},
				{
                "track": 265,
                "name": "少女时代-Oh!(Japanesever.)",
                "length": "4:46",
                "file": "韩国音乐/少女时代-Oh!(Japanesever.).mp3"
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