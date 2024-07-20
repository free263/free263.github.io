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
                "track": 102,
                "name": "刘德华-冰雨",
                "length": "4:46",
                "file": "简选/国语/刘德华-冰雨.mp3"
				},
				{
                "track": 101,
                "name": "零点乐队-相信自己",
                "length": "4:46",
                "file": "简选/国语/零点乐队-相信自己.mp3"
				},
				{
                "track": 100,
                "name": "林志炫-烟花易冷",
                "length": "4:46",
                "file": "简选/国语/林志炫-烟花易冷.mp3"
				},
				{
                "track": 99,
                "name": "林志炫-没离开过",
                "length": "4:46",
                "file": "简选/国语/林志炫-没离开过.mp3"
				},
				{
                "track": 98,
                "name": "林忆莲-至少还有你",
                "length": "4:46",
                "file": "简选/国语/林忆莲-至少还有你.mp3"
				},
				{
                "track": 97,
                "name": "林忆莲-伤痕",
                "length": "4:46",
                "file": "简选/国语/林忆莲-伤痕.mp3"
				},
				{
                "track": 96,
                "name": "林忆莲-不必在乎我是谁",
                "length": "4:46",
                "file": "简选/国语/林忆莲-不必在乎我是谁.mp3"
				},
				{
                "track": 95,
                "name": "林心如-倾听我",
                "length": "4:46",
                "file": "简选/国语/林心如-倾听我.mp3"
				},
				{
                "track": 94,
                "name": "林心如-落花",
                "length": "4:46",
                "file": "简选/国语/林心如-落花.mp3"
				},
				{
                "track": 93,
                "name": "林俊杰-醉赤壁",
                "length": "4:46",
                "file": "简选/国语/林俊杰-醉赤壁.mp3"
				},
				{
                "track": 92,
                "name": "林俊杰-一千年以后",
                "length": "4:46",
                "file": "简选/国语/林俊杰-一千年以后.mp3"
				},
				{
                "track": 91,
                "name": "林俊杰-江南",
                "length": "4:46",
                "file": "简选/国语/林俊杰-江南.mp3"
				},
				{
                "track": 90,
                "name": "梁静茹-勇气",
                "length": "4:46",
                "file": "简选/国语/梁静茹-勇气.mp3"
				},
				{
                "track": 89,
                "name": "梁静茹-可惜不是你",
                "length": "4:46",
                "file": "简选/国语/梁静茹-可惜不是你.mp3"
				},
				{
                "track": 88,
                "name": "梁静茹-爱你不是两三天",
                "length": "4:46",
                "file": "简选/国语/梁静茹-爱你不是两三天.mp3"
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