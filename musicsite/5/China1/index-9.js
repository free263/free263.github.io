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
                "track": 992,
                "name": "周深-卷珠帘",
                "length": "4:46",
                "file": "精选/周深-卷珠帘.mp3"
				},
				{
                "track": 991,
                "name": "周深-借给我一盒火柴",
                "length": "4:46",
                "file": "精选/周深-借给我一盒火柴.mp3"
				},
				{
                "track": 990,
                "name": "周深-鲛人之歌",
                "length": "4:46",
                "file": "精选/周深-鲛人之歌.mp3"
				},
				{
                "track": 989,
                "name": "周深-交换",
                "length": "4:46",
                "file": "精选/周深-交换.mp3"
				},
				{
                "track": 988,
                "name": "周深-江湖觅知音",
                "length": "4:46",
                "file": "精选/周深-江湖觅知音.mp3"
				},
				{
                "track": 987,
                "name": "周深-茧",
                "length": "4:46",
                "file": "精选/周深-茧.mp3"
				},
				{
                "track": 986,
                "name": "周深-回声",
                "length": "4:46",
                "file": "精选/周深-回声.mp3"
				},
				{
                "track": 985,
                "name": "周深-回到你身边",
                "length": "4:46",
                "file": "精选/周深-回到你身边.mp3"
				},
				{
                "track": 984,
                "name": "周深-荒原星火",
                "length": "4:46",
                "file": "精选/周深-荒原星火.mp3"
				},
				{
                "track": 983,
                "name": "周深-荒城渡",
                "length": "4:46",
                "file": "精选/周深-荒城渡.mp3"
				},
				{
                "track": 982,
                "name": "周深-欢颜",
                "length": "4:46",
                "file": "精选/周深-欢颜.mp3"
				},
				{
                "track": 981,
                "name": "周深-画绢",
                "length": "4:46",
                "file": "精选/周深-画绢.mp3"
				},
				{
                "track": 980,
                "name": "周深-化身孤岛的鲸",
                "length": "4:46",
                "file": "精选/周深-化身孤岛的鲸.mp3"
				},
				{
                "track": 979,
                "name": "周深-花西子",
                "length": "4:46",
                "file": "精选/周深-花西子.mp3"
				},
				{
                "track": 978,
                "name": "周深-花开",
                "length": "4:46",
                "file": "精选/周深-花开.mp3"
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