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
                "track": 587,
                "name": "王菲 陈奕迅 -因为爱情",
                "length": "4:46",
                "file": "精选/王菲 陈奕迅 -因为爱情.mp3"
				},
				{
                "track": 586,
                "name": "汪正正-重头再来",
                "length": "4:46",
                "file": "精选/汪正正-重头再来.mp3"
				},
				{
                "track": 585,
                "name": "汪正正-超越梦想",
                "length": "4:46",
                "file": "精选/汪正正-超越梦想.mp3"
				},
				{
                "track": 584,
                "name": "汪苏泷-不分手的恋爱",
                "length": "4:46",
                "file": "精选/汪苏泷-不分手的恋爱.mp3"
				},
				{
                "track": 583,
                "name": "汪苏泷、By2-有点甜",
                "length": "4:46",
                "file": "精选/汪苏泷、By2-有点甜.mp3"
				},
				{
                "track": 582,
                "name": "汪明荃-万水千山总是情",
                "length": "4:46",
                "file": "精选/汪明荃-万水千山总是情.mp3"
				},
				{
                "track": 581,
                "name": "汪峰-一起摇摆",
                "length": "4:46",
                "file": "精选/汪峰-一起摇摆.mp3"
				},
				{
                "track": 580,
                "name": "汪峰-也许我可以无视死亡",
                "length": "4:46",
                "file": "精选/汪峰-也许我可以无视死亡.mp3"
				},
				{
                "track": 579,
                "name": "汪峰-无处安放",
                "length": "4:46",
                "file": "精选/汪峰-无处安放.mp3"
				},
				{
                "track": 578,
                "name": "汪峰-怒放的生命",
                "length": "4:46",
                "file": "精选/汪峰-怒放的生命.mp3"
				},
				{
                "track": 577,
                "name": "汪峰-飞得更高",
                "length": "4:46",
                "file": "精选/汪峰-飞得更高.mp3"
				},
				{
                "track": 576,
                "name": "汪峰-存在",
                "length": "4:46",
                "file": "精选/汪峰-存在.mp3"
				},
				{
                "track": 575,
                "name": "汪峰-春天里",
                "length": "4:46",
                "file": "精选/汪峰-春天里.mp3"
				},
				{
                "track": 574,
                "name": "汪峰-北京北京",
                "length": "4:46",
                "file": "精选/汪峰-北京北京.mp3"
				},
				{
                "track": 573,
                "name": "娃娃-漂洋过海来看你",
                "length": "4:46",
                "file": "精选/娃娃-漂洋过海来看你.mp3"
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