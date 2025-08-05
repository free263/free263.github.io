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
                "track": 42,
                "name": "等什么君-江湖策马",
                "length": "4:46",
                "file": "简选/国语/等什么君-江湖策马.mp3"
				},
				{
                "track": 41,
                "name": "戴羽彤-来迟",
                "length": "4:46",
                "file": "简选/国语/戴羽彤-来迟.mp3"
				},
				{
                "track": 40,
                "name": "戴佩妮-怎样",
                "length": "4:46",
                "file": "简选/国语/戴佩妮-怎样.mp3"
				},
				{
                "track": 39,
                "name": "戴佩妮-你要的爱",
                "length": "4:46",
                "file": "简选/国语/戴佩妮-你要的爱.mp3"
				},
				{
                "track": 38,
                "name": "戴佩妮-街角的祝福",
                "length": "4:46",
                "file": "简选/国语/戴佩妮-街角的祝福.mp3"
				},
				{
                "track": 37,
                "name": "戴佩妮-爱疯了",
                "length": "4:46",
                "file": "简选/国语/戴佩妮-爱疯了.mp3"
				},
				{
                "track": 36,
                "name": "大壮-我们不一样",
                "length": "4:46",
                "file": "简选/国语/大壮-我们不一样.mp3"
				},
				{
                "track": 35,
                "name": "程响-世界这么大还是遇见你",
                "length": "4:46",
                "file": "简选/国语/程响-世界这么大还是遇见你.mp3"
				},
				{
                "track": 34,
                "name": "程响-人间烟火",
                "length": "4:46",
                "file": "简选/国语/程响-人间烟火.mp3"
				},
				{
                "track": 33,
                "name": "程响-可能",
                "length": "4:46",
                "file": "简选/国语/程响-可能.mp3"
				},
				{
                "track": 32,
                "name": "程响-等你归来",
                "length": "4:46",
                "file": "简选/国语/程响-等你归来.mp3"
				},
				{
                "track": 31,
                "name": "成龙、金喜善-无尽的爱",
                "length": "4:46",
                "file": "简选/国语/成龙、金喜善-无尽的爱.mp3"
				},
				{
                "track": 30,
                "name": "陈奕迅-爱情转移",
                "length": "4:46",
                "file": "简选/国语/陈奕迅-爱情转移.mp3"
				},
				{
                "track": 29,
                "name": "陈奕迅、王菲-因为爱情",
                "length": "4:46",
                "file": "简选/国语/陈奕迅、王菲-因为爱情.mp3"
				},
				{
                "track": 28,
                "name": "陈雅森-下辈子不一定还能遇见你",
                "length": "4:46",
                "file": "简选/国语/陈雅森-下辈子不一定还能遇见你.mp3"
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