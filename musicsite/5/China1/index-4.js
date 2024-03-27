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
                "track": 1067,
                "name": "周深-小舍得",
                "length": "4:46",
                "file": "精选/周深-小舍得.mp3"
				},
				{
                "track": 1066,
                "name": "周深-像鸟儿一样",
                "length": "4:46",
                "file": "精选/周深-像鸟儿一样.mp3"
				},
				{
                "track": 1065,
                "name": "周深-向光而行",
                "length": "4:46",
                "file": "精选/周深-向光而行.mp3"
				},
				{
                "track": 1064,
                "name": "周深-相守",
                "length": "4:46",
                "file": "精选/周深-相守.mp3"
				},
				{
                "track": 1063,
                "name": "周深-夏日友晴天",
                "length": "4:46",
                "file": "精选/周深-夏日友晴天.mp3"
				},
				{
                "track": 1062,
                "name": "周深-无所畏惧",
                "length": "4:46",
                "file": "精选/周深-无所畏惧.mp3"
				},
				{
                "track": 1061,
                "name": "周深-无疾而终",
                "length": "4:46",
                "file": "精选/周深-无疾而终.mp3"
				},
				{
                "track": 1060,
                "name": "周深-无关",
                "length": "4:46",
                "file": "精选/周深-无关.mp3"
				},
				{
                "track": 1059,
                "name": "周深-我在这 挺好的",
                "length": "4:46",
                "file": "精选/周深-我在这 挺好的.mp3"
				},
				{
                "track": 1058,
                "name": "周深-我是你的谁",
                "length": "4:46",
                "file": "精选/周深-我是你的谁.mp3"
				},
				{
                "track": 1057,
                "name": "周深-我的答案",
                "length": "4:46",
                "file": "精选/周深-我的答案.mp3"
				},
				{
                "track": 1056,
                "name": "周深-问花",
                "length": "4:46",
                "file": "精选/周深-问花.mp3"
				},
				{
                "track": 1055,
                "name": "周深-为爱追寻",
                "length": "4:46",
                "file": "精选/周深-为爱追寻.mp3"
				},
				{
                "track": 1054,
                "name": "周深-微光海洋",
                "length": "4:46",
                "file": "精选/周深-微光海洋.mp3"
				},
				{
                "track": 1053,
                "name": "周深-威凤吟",
                "length": "4:46",
                "file": "精选/周深-威凤吟.mp3"
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