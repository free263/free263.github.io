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
                "track": 327,
                "name": "庄心妍-走着走着就散了",
                "length": "4:46",
                "file": "简选/国语/庄心妍-走着走着就散了.mp3"
				},
				{
                "track": 326,
                "name": "庄心妍-再见只是陌生人",
                "length": "4:46",
                "file": "简选/国语/庄心妍-再见只是陌生人.mp3"
				},
				{
                "track": 325,
                "name": "庄心妍-以后的以后",
                "length": "4:46",
                "file": "简选/国语/庄心妍-以后的以后.mp3"
				},
				{
                "track": 324,
                "name": "庄心妍-爱囚",
                "length": "4:46",
                "file": "简选/国语/庄心妍-爱囚.mp3"
				},
				{
                "track": 323,
                "name": "庄心妍、祁隆-一万个舍不得",
                "length": "4:46",
                "file": "简选/国语/庄心妍、祁隆-一万个舍不得.mp3"
				},
				{
                "track": 322,
                "name": "周迅-飘摇",
                "length": "4:46",
                "file": "简选/国语/周迅-飘摇.mp3"
				},
				{
                "track": 321,
                "name": "周深-愿得一心人",
                "length": "4:46",
                "file": "简选/国语/周深-愿得一心人.mp3"
				},
				{
                "track": 320,
                "name": "周深-与卿",
                "length": "4:46",
                "file": "简选/国语/周深-与卿.mp3"
				},
				{
                "track": 319,
                "name": "周深-雪落下的声音(Live)",
                "length": "4:46",
                "file": "简选/国语/周深-雪落下的声音(Live).mp3"
				},
				{
                "track": 318,
                "name": "周深-向光而行",
                "length": "4:46",
                "file": "简选/国语/周深-向光而行.mp3"
				},
				{
                "track": 317,
                "name": "周深-微光海洋",
                "length": "4:46",
                "file": "简选/国语/周深-微光海洋.mp3"
				},
				{
                "track": 316,
                "name": "周深-水形物语",
                "length": "4:46",
                "file": "简选/国语/周深-水形物语.mp3"
				},
				{
                "track": 315,
                "name": "周深-时间之海",
                "length": "4:46",
                "file": "简选/国语/周深-时间之海.mp3"
				},
				{
                "track": 314,
                "name": "周深-年轮(Live)",
                "length": "4:46",
                "file": "简选/国语/周深-年轮(Live).mp3"
				},
				{
                "track": 313,
                "name": "周深-欢颜",
                "length": "4:46",
                "file": "简选/国语/周深-欢颜.mp3"
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