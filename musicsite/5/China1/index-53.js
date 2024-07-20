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
                "track": 332,
                "name": "李圣杰-你那么爱她",
                "length": "4:46",
                "file": "精选/李圣杰-你那么爱她.mp3"
				},
				{
                "track": 331,
                "name": "李圣杰-痴心绝对",
                "length": "4:46",
                "file": "精选/李圣杰-痴心绝对.mp3"
				},
				{
                "track": 330,
                "name": "李荣浩-年少有为",
                "length": "4:46",
                "file": "精选/李荣浩-年少有为.mp3"
				},
				{
                "track": 329,
                "name": "李荣浩-模特",
                "length": "4:46",
                "file": "精选/李荣浩-模特.mp3"
				},
				{
                "track": 328,
                "name": "李荣浩-麻雀",
                "length": "4:46",
                "file": "精选/李荣浩-麻雀.mp3"
				},
				{
                "track": 327,
                "name": "李荣浩-李白",
                "length": "4:46",
                "file": "精选/李荣浩-李白.mp3"
				},
				{
                "track": 326,
                "name": "李荣浩-不将就",
                "length": "4:46",
                "file": "精选/李荣浩-不将就.mp3"
				},
				{
                "track": 325,
                "name": "李琼-山路十八弯",
                "length": "4:46",
                "file": "精选/李琼-山路十八弯.mp3"
				},
				{
                "track": 324,
                "name": "李沁-小偷",
                "length": "4:46",
                "file": "精选/李沁-小偷.mp3"
				},
				{
                "track": 323,
                "name": "李玟-月光爱人",
                "length": "4:46",
                "file": "精选/李玟-月光爱人.mp3"
				},
				{
                "track": 322,
                "name": "李玟-想你的365天",
                "length": "4:46",
                "file": "精选/李玟-想你的365天.mp3"
				},
				{
                "track": 321,
                "name": "李玟-魔镜",
                "length": "4:46",
                "file": "精选/李玟-魔镜.mp3"
				},
				{
                "track": 320,
                "name": "李玟-美丽笨女人",
                "length": "4:46",
                "file": "精选/李玟-美丽笨女人.mp3"
				},
				{
                "track": 319,
                "name": "李玟-好心情",
                "length": "4:46",
                "file": "精选/李玟-好心情.mp3"
				},
				{
                "track": 318,
                "name": "李玟-DiDaDi",
                "length": "4:46",
                "file": "精选/李玟-DiDaDi.mp3"
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