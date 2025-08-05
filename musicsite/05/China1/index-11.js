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
                "track": 962,
                "name": "周深-风景",
                "length": "4:46",
                "file": "精选/周深-风景.mp3"
				},
				{
                "track": 961,
                "name": "周深-放心去飞",
                "length": "4:46",
                "file": "精选/周深-放心去飞.mp3"
				},
				{
                "track": 960,
                "name": "周深-放鹤图",
                "length": "4:46",
                "file": "精选/周深-放鹤图.mp3"
				},
				{
                "track": 959,
                "name": "周深-繁星璀璨的天空",
                "length": "4:46",
                "file": "精选/周深-繁星璀璨的天空.mp3"
				},
				{
                "track": 958,
                "name": "周深-独白",
                "length": "4:46",
                "file": "精选/周深-独白.mp3"
				},
				{
                "track": 957,
                "name": "周深-东游",
                "length": "4:46",
                "file": "精选/周深-东游.mp3"
				},
				{
                "track": 956,
                "name": "周深-等着我",
                "length": "4:46",
                "file": "精选/周深-等着我.mp3"
				},
				{
                "track": 955,
                "name": "周深-胆小鬼",
                "length": "4:46",
                "file": "精选/周深-胆小鬼.mp3"
				},
				{
                "track": 954,
                "name": "周深-大鱼",
                "length": "4:46",
                "file": "精选/周深-大鱼.mp3"
				},
				{
                "track": 953,
                "name": "周深-达拉崩吧(Live)",
                "length": "4:46",
                "file": "精选/周深-达拉崩吧(Live).mp3"
				},
				{
                "track": 952,
                "name": "周深-璀璨冒险人",
                "length": "4:46",
                "file": "精选/周深-璀璨冒险人.mp3"
				},
				{
                "track": 951,
                "name": "周深-此生惟你",
                "length": "4:46",
                "file": "精选/周深-此生惟你.mp3"
				},
				{
                "track": 950,
                "name": "周深-传家",
                "length": "4:46",
                "file": "精选/周深-传家.mp3"
				},
				{
                "track": 949,
                "name": "周深-触不可及",
                "length": "4:46",
                "file": "精选/周深-触不可及.mp3"
				},
				{
                "track": 948,
                "name": "周深-出场",
                "length": "4:46",
                "file": "精选/周深-出场.mp3"
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