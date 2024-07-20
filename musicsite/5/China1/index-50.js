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
                "track": 377,
                "name": "林志炫-opera",
                "length": "4:46",
                "file": "精选/林志炫-opera.mp3"
				},
				{
                "track": 376,
                "name": "林宥嘉-你是我的眼",
                "length": "4:46",
                "file": "精选/林宥嘉-你是我的眼.mp3"
				},
				{
                "track": 375,
                "name": "林忆莲-至少还有你",
                "length": "4:46",
                "file": "精选/林忆莲-至少还有你.mp3"
				},
				{
                "track": 374,
                "name": "林忆莲-为你我受冷风吹",
                "length": "4:46",
                "file": "精选/林忆莲-为你我受冷风吹.mp3"
				},
				{
                "track": 373,
                "name": "林忆莲-伤痕",
                "length": "4:46",
                "file": "精选/林忆莲-伤痕.mp3"
				},
				{
                "track": 372,
                "name": "林忆莲-不必在乎我是谁",
                "length": "4:46",
                "file": "精选/林忆莲-不必在乎我是谁.mp3"
				},
				{
                "track": 371,
                "name": "林忆莲-爱上一个不回家的人",
                "length": "4:46",
                "file": "精选/林忆莲-爱上一个不回家的人.mp3"
				},
				{
                "track": 370,
                "name": "林心如-倾听我",
                "length": "4:46",
                "file": "精选/林心如-倾听我.mp3"
				},
				{
                "track": 369,
                "name": "林心如-落花",
                "length": "4:46",
                "file": "精选/林心如-落花.mp3"
				},
				{
                "track": 368,
                "name": "林俊杰-醉赤壁",
                "length": "4:46",
                "file": "精选/林俊杰-醉赤壁.mp3"
				},
				{
                "track": 367,
                "name": "林俊杰-一千年以后",
                "length": "4:46",
                "file": "精选/林俊杰-一千年以后.mp3"
				},
				{
                "track": 366,
                "name": "林俊杰-江南",
                "length": "4:46",
                "file": "精选/林俊杰-江南.mp3"
				},
				{
                "track": 365,
                "name": "林俊杰-关键词",
                "length": "4:46",
                "file": "精选/林俊杰-关键词.mp3"
				},
				{
                "track": 364,
                "name": "林俊杰-曹操",
                "length": "4:46",
                "file": "精选/林俊杰-曹操.mp3"
				},
				{
                "track": 363,
                "name": "林俊杰-背对背拥抱",
                "length": "4:46",
                "file": "精选/林俊杰-背对背拥抱.mp3"
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