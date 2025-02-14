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
                "track": 1052,
                "name": "周深-万里挑一",
                "length": "4:46",
                "file": "精选/周深-万里挑一.mp3"
				},
				{
                "track": 1051,
                "name": "周深-蜕",
                "length": "4:46",
                "file": "精选/周深-蜕.mp3"
				},
				{
                "track": 1050,
                "name": "周深-瞳(出类拔萃)",
                "length": "4:46",
                "file": "精选/周深-瞳(出类拔萃).mp3"
				},
				{
                "track": 1049,
                "name": "周深-同行同往",
                "length": "4:46",
                "file": "精选/周深-同行同往.mp3"
				},
				{
                "track": 1048,
                "name": "周深-跳舞的月光",
                "length": "4:46",
                "file": "精选/周深-跳舞的月光.mp3"
				},
				{
                "track": 1047,
                "name": "周深-田埂五月风",
                "length": "4:46",
                "file": "精选/周深-田埂五月风.mp3"
				},
				{
                "track": 1046,
                "name": "周深-天地为念",
                "length": "4:46",
                "file": "精选/周深-天地为念.mp3"
				},
				{
                "track": 1045,
                "name": "周深-她",
                "length": "4:46",
                "file": "精选/周深-她.mp3"
				},
				{
                "track": 1044,
                "name": "周深-随风",
                "length": "4:46",
                "file": "精选/周深-随风.mp3"
				},
				{
                "track": 1043,
                "name": "周深-斯卡布罗集市(2018声入人心现场)",
                "length": "4:46",
                "file": "精选/周深-斯卡布罗集市(2018声入人心现场).mp3"
				},
				{
                "track": 1042,
                "name": "周深-说声你好",
                "length": "4:46",
                "file": "精选/周深-说声你好.mp3"
				},
				{
                "track": 1041,
                "name": "周深-睡个好觉",
                "length": "4:46",
                "file": "精选/周深-睡个好觉.mp3"
				},
				{
                "track": 1040,
                "name": "周深-水形物语",
                "length": "4:46",
                "file": "精选/周深-水形物语.mp3"
				},
				{
                "track": 1039,
                "name": "周深-时间之海",
                "length": "4:46",
                "file": "精选/周深-时间之海.mp3"
				},
				{
                "track": 1038,
                "name": "周深-身骑白马",
                "length": "4:46",
                "file": "精选/周深-身骑白马.mp3"
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