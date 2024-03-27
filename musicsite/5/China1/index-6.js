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
                "track": 1037,
                "name": "周深-若思念便思念",
                "length": "4:46",
                "file": "精选/周深-若思念便思念.mp3"
				},
				{
                "track": 1036,
                "name": "周深-若梦",
                "length": "4:46",
                "file": "精选/周深-若梦.mp3"
				},
				{
                "track": 1035,
                "name": "周深-如许",
                "length": "4:46",
                "file": "精选/周深-如许.mp3"
				},
				{
                "track": 1034,
                "name": "周深-人是_",
                "length": "4:46",
                "file": "精选/周深-人是_.mp3"
				},
				{
                "track": 1033,
                "name": "周深-人间星河",
                "length": "4:46",
                "file": "精选/周深-人间星河.mp3"
				},
				{
                "track": 1032,
                "name": "周深-请带着浪漫远航",
                "length": "4:46",
                "file": "精选/周深-请带着浪漫远航.mp3"
				},
				{
                "track": 1031,
                "name": "周深-情意结",
                "length": "4:46",
                "file": "精选/周深-情意结.mp3"
				},
				{
                "track": 1030,
                "name": "周深-情是何物",
                "length": "4:46",
                "file": "精选/周深-情是何物.mp3"
				},
				{
                "track": 1029,
                "name": "周深-情不由衷",
                "length": "4:46",
                "file": "精选/周深-情不由衷.mp3"
				},
				{
                "track": 1028,
                "name": "周深-亲爱的旅人啊",
                "length": "4:46",
                "file": "精选/周深-亲爱的旅人啊.mp3"
				},
				{
                "track": 1027,
                "name": "周深-浅浅",
                "length": "4:46",
                "file": "精选/周深-浅浅.mp3"
				},
				{
                "track": 1026,
                "name": "周深-起风了",
                "length": "4:46",
                "file": "精选/周深-起风了.mp3"
				},
				{
                "track": 1025,
                "name": "周深-启示",
                "length": "4:46",
                "file": "精选/周深-启示.mp3"
				},
				{
                "track": 1024,
                "name": "周深-浓情淡如你",
                "length": "4:46",
                "file": "精选/周深-浓情淡如你.mp3"
				},
				{
                "track": 1023,
                "name": "周深-念归去",
                "length": "4:46",
                "file": "精选/周深-念归去.mp3"
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