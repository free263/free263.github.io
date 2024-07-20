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
                "track": 107,
                "name": "陈淑桦-情关",
                "length": "4:46",
                "file": "精选/陈淑桦-情关.mp3"
				},
				{
                "track": 106,
                "name": "陈淑桦-梦醒时分",
                "length": "4:46",
                "file": "精选/陈淑桦-梦醒时分.mp3"
				},
				{
                "track": 105,
                "name": "陈升、刘佳慧-北京一夜",
                "length": "4:46",
                "file": "精选/陈升、刘佳慧-北京一夜.mp3"
				},
				{
                "track": 104,
                "name": "陈瑞-白狐",
                "length": "4:46",
                "file": "精选/陈瑞-白狐.mp3"
				},
				{
                "track": 103,
                "name": "陈明真-我用自己的方式爱你",
                "length": "4:46",
                "file": "精选/陈明真-我用自己的方式爱你.mp3"
				},
				{
                "track": 102,
                "name": "陈明真-到哪里找那么好的人",
                "length": "4:46",
                "file": "精选/陈明真-到哪里找那么好的人.mp3"
				},
				{
                "track": 101,
                "name": "陈明真-变心的翅膀",
                "length": "4:46",
                "file": "精选/陈明真-变心的翅膀.mp3"
				},
				{
                "track": 100,
                "name": "陈明-我要找到你",
                "length": "4:46",
                "file": "精选/陈明-我要找到你.mp3"
				},
				{
                "track": 99,
                "name": "陈明-为你",
                "length": "4:46",
                "file": "精选/陈明-为你.mp3"
				},
				{
                "track": 98,
                "name": "陈明-快乐老家",
                "length": "4:46",
                "file": "精选/陈明-快乐老家.mp3"
				},
				{
                "track": 97,
                "name": "陈明-等你爱我",
                "length": "4:46",
                "file": "精选/陈明-等你爱我.mp3"
				},
				{
                "track": 96,
                "name": "陈琳-你的柔情我永远不懂",
                "length": "4:46",
                "file": "精选/陈琳-你的柔情我永远不懂.mp3"
				},
				{
                "track": 95,
                "name": "陈琳-爱就爱了",
                "length": "4:46",
                "file": "精选/陈琳-爱就爱了.mp3"
				},
				{
                "track": 94,
                "name": "陈慧娴-人生何处不相逢",
                "length": "4:46",
                "file": "精选/陈慧娴-人生何处不相逢.mp3"
				},
				{
                "track": 93,
                "name": "陈慧娴-千千阙歌",
                "length": "4:46",
                "file": "精选/陈慧娴-千千阙歌.mp3"
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