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
                "track": 77,
                "name": "曹格、卓文萱-梁山伯与茱丽叶",
                "length": "4:46",
                "file": "精选/曹格、卓文萱-梁山伯与茱丽叶.mp3"
				},
				{
                "track": 76,
                "name": "蔡依林-舞娘",
                "length": "4:46",
                "file": "精选/蔡依林-舞娘.mp3"
				},
				{
                "track": 75,
                "name": "蔡依林-我知道你很难过",
                "length": "4:46",
                "file": "精选/蔡依林-我知道你很难过.mp3"
				},
				{
                "track": 74,
                "name": "蔡依林-日不落",
                "length": "4:46",
                "file": "精选/蔡依林-日不落.mp3"
				},
				{
                "track": 73,
                "name": "蔡依林-看我72变",
                "length": "4:46",
                "file": "精选/蔡依林-看我72变.mp3"
				},
				{
                "track": 72,
                "name": "蔡依林-布拉格广场",
                "length": "4:46",
                "file": "精选/蔡依林-布拉格广场.mp3"
				},
				{
                "track": 71,
                "name": "蔡依林-爱情三十六计",
                "length": "4:46",
                "file": "精选/蔡依林-爱情三十六计.mp3"
				},
				{
                "track": 70,
                "name": "蔡依林-LOVELOVELOVE",
                "length": "4:46",
                "file": "精选/蔡依林-LOVELOVELOVE.mp3"
				},
				{
                "track": 69,
                "name": "蔡依林、陶喆-今天你要嫁给我",
                "length": "4:46",
                "file": "精选/蔡依林、陶喆-今天你要嫁给我.mp3"
				},
				{
                "track": 68,
                "name": "蔡徐坤-WaitWaitWait",
                "length": "4:46",
                "file": "精选/蔡徐坤-WaitWaitWait.mp3"
				},
				{
                "track": 67,
                "name": "蔡幸娟-问情",
                "length": "4:46",
                "file": "精选/蔡幸娟-问情.mp3"
				},
				{
                "track": 66,
                "name": "蔡琴-被遺忘的時光",
                "length": "4:46",
                "file": "精选/蔡琴-被遺忘的時光.mp3"
				},
				{
                "track": 65,
                "name": "蔡琴-把悲伤留给自己",
                "length": "4:46",
                "file": "精选/蔡琴-把悲伤留给自己.mp3"
				},
				{
                "track": 64,
                "name": "蔡健雅-无底洞",
                "length": "4:46",
                "file": "精选/蔡健雅-无底洞.mp3"
				},
				{
                "track": 63,
                "name": "蔡健雅-红色高跟鞋",
                "length": "4:46",
                "file": "精选/蔡健雅-红色高跟鞋.mp3"
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