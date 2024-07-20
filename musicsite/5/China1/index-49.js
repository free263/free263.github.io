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
                "track": 392,
                "name": "刘德华-世界第一等",
                "length": "4:46",
                "file": "精选/刘德华-世界第一等.mp3"
				},
				{
                "track": 391,
                "name": "刘德华-男人哭吧不是罪",
                "length": "4:46",
                "file": "精选/刘德华-男人哭吧不是罪.mp3"
				},
				{
                "track": 390,
                "name": "刘德华-冰雨",
                "length": "4:46",
                "file": "精选/刘德华-冰雨.mp3"
				},
				{
                "track": 389,
                "name": "刘德华-爱你一万年",
                "length": "4:46",
                "file": "精选/刘德华-爱你一万年.mp3"
				},
				{
                "track": 388,
                "name": "刘德华&陈慧琳-我不够爱你",
                "length": "4:46",
                "file": "精选/刘德华&陈慧琳-我不够爱你.mp3"
				},
				{
                "track": 387,
                "name": "零点乐队-相信自己",
                "length": "4:46",
                "file": "精选/零点乐队-相信自己.mp3"
				},
				{
                "track": 386,
                "name": "零点乐队-爱不爱我",
                "length": "4:46",
                "file": "精选/零点乐队-爱不爱我.mp3"
				},
				{
                "track": 385,
                "name": "林子祥-长路漫漫伴你闯",
                "length": "4:46",
                "file": "精选/林子祥-长路漫漫伴你闯.mp3"
				},
				{
                "track": 384,
                "name": "林子祥-男儿当自强",
                "length": "4:46",
                "file": "精选/林子祥-男儿当自强.mp3"
				},
				{
                "track": 383,
                "name": "林志颖-十七岁的雨季",
                "length": "4:46",
                "file": "精选/林志颖-十七岁的雨季.mp3"
				},
				{
                "track": 382,
                "name": "林志颖-稻草人",
                "length": "4:46",
                "file": "精选/林志颖-稻草人.mp3"
				},
				{
                "track": 381,
                "name": "林志炫-烟花易冷",
                "length": "4:46",
                "file": "精选/林志炫-烟花易冷.mp3"
				},
				{
                "track": 380,
                "name": "林志炫-蒙娜丽莎的眼泪",
                "length": "4:46",
                "file": "精选/林志炫-蒙娜丽莎的眼泪.mp3"
				},
				{
                "track": 379,
                "name": "林志炫-没离开过",
                "length": "4:46",
                "file": "精选/林志炫-没离开过.mp3"
				},
				{
                "track": 378,
                "name": "林志炫-单身情歌",
                "length": "4:46",
                "file": "精选/林志炫-单身情歌.mp3"
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