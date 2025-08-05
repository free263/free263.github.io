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
                "track": 249,
                "name": "柳真-ChaCha",
                "length": "4:46",
                "file": "韩国音乐/柳真-ChaCha.mp3"
				},
				{
                "track": 248,
                "name": "李贞贤-月亮啊月亮",
                "length": "4:46",
                "file": "韩国音乐/李贞贤-月亮啊月亮.mp3"
				},
				{
                "track": 247,
                "name": "李贞贤-眉飞色舞",
                "length": "4:46",
                "file": "韩国音乐/李贞贤-眉飞色舞.mp3"
				},
				{
                "track": 246,
                "name": "李贞贤-独一无二",
                "length": "4:46",
                "file": "韩国音乐/李贞贤-独一无二.mp3"
				},
				{
                "track": 245,
                "name": "李秀英-我们",
                "length": "4:46",
                "file": "韩国音乐/李秀英-我们.mp3"
				},
				{
                "track": 244,
                "name": "李秀英-NEVERAGAIN",
                "length": "4:46",
                "file": "韩国音乐/李秀英-NEVERAGAIN.mp3"
				},
				{
                "track": 243,
                "name": "李秀英-AlsoILoveYou",
                "length": "4:46",
                "file": "韩国音乐/李秀英-AlsoILoveYou.mp3"
				},
				{
                "track": 242,
                "name": "李孝利-10minutes",
                "length": "4:46",
                "file": "韩国音乐/李孝利-10minutes.mp3"
				},
				{
                "track": 241,
                "name": "蓝色生死恋-祈祷",
                "length": "4:46",
                "file": "韩国音乐/蓝色生死恋-祈祷.mp3"
				},
				{
                "track": 240,
                "name": "冬季恋歌-从开始到现在",
                "length": "4:46",
                "file": "韩国音乐/冬季恋歌-从开始到现在.mp3"
				},
				{
                "track": 239,
                "name": "WonderGirls-nobody",
                "length": "4:46",
                "file": "韩国音乐/WonderGirls-nobody.mp3"
				},
				{
                "track": 238,
                "name": "WAX-坐着地铁",
                "length": "4:46",
                "file": "韩国音乐/WAX-坐着地铁.mp3"
				},
				{
                "track": 237,
                "name": "WAX-只有眼泪只有眼泪",
                "length": "4:46",
                "file": "韩国音乐/WAX-只有眼泪只有眼泪.mp3"
				},
				{
                "track": 236,
                "name": "WAX-余情",
                "length": "4:46",
                "file": "韩国音乐/WAX-余情.mp3"
				},
				{
                "track": 235,
                "name": "WAX-一通电话也不行",
                "length": "4:46",
                "file": "韩国音乐/WAX-一通电话也不行.mp3"
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