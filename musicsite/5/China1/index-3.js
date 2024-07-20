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
                "track": 1082,
                "name": "周深-迎刃",
                "length": "4:46",
                "file": "精选/周深-迎刃.mp3"
				},
				{
                "track": 1081,
                "name": "周深-意犹在",
                "length": "4:46",
                "file": "精选/周深-意犹在.mp3"
				},
				{
                "track": 1080,
                "name": "周深-以无旁骛之吻",
                "length": "4:46",
                "file": "精选/周深-以无旁骛之吻.mp3"
				},
				{
                "track": 1079,
                "name": "周深-一试有成",
                "length": "4:46",
                "file": "精选/周深-一试有成.mp3"
				},
				{
                "track": 1078,
                "name": "周深-一缕执念",
                "length": "4:46",
                "file": "精选/周深-一缕执念.mp3"
				},
				{
                "track": 1077,
                "name": "周深-叶子",
                "length": "4:46",
                "file": "精选/周深-叶子.mp3"
				},
				{
                "track": 1076,
                "name": "周深-也很值得",
                "length": "4:46",
                "file": "精选/周深-也很值得.mp3"
				},
				{
                "track": 1075,
                "name": "周深-要一起",
                "length": "4:46",
                "file": "精选/周深-要一起.mp3"
				},
				{
                "track": 1074,
                "name": "周深-焰火",
                "length": "4:46",
                "file": "精选/周深-焰火.mp3"
				},
				{
                "track": 1073,
                "name": "周深-芽",
                "length": "4:46",
                "file": "精选/周深-芽.mp3"
				},
				{
                "track": 1072,
                "name": "周深-雪落下的声音(Live)",
                "length": "4:46",
                "file": "精选/周深-雪落下的声音(Live).mp3"
				},
				{
                "track": 1071,
                "name": "周深-悬崖之上",
                "length": "4:46",
                "file": "精选/周深-悬崖之上.mp3"
				},
				{
                "track": 1070,
                "name": "周深-星鱼",
                "length": "4:46",
                "file": "精选/周深-星鱼.mp3"
				},
				{
                "track": 1069,
                "name": "周深-心归处是吾乡",
                "length": "4:46",
                "file": "精选/周深-心归处是吾乡.mp3"
				},
				{
                "track": 1068,
                "name": "周深-小幸运",
                "length": "4:46",
                "file": "精选/周深-小幸运.mp3"
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