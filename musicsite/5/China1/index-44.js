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
                "track": 467,
                "name": "平生不晚-难却",
                "length": "4:46",
                "file": "精选/平生不晚-难却.mp3"
				},
				{
                "track": 466,
                "name": "彭筝-太想念",
                "length": "4:46",
                "file": "精选/彭筝-太想念.mp3"
				},
				{
                "track": 465,
                "name": "彭羚-囚鸟",
                "length": "4:46",
                "file": "精选/彭羚-囚鸟.mp3"
				},
				{
                "track": 464,
                "name": "彭佳慧-相见恨晚",
                "length": "4:46",
                "file": "精选/彭佳慧-相见恨晚.mp3"
				},
				{
                "track": 463,
                "name": "彭佳慧-好久不见",
                "length": "4:46",
                "file": "精选/彭佳慧-好久不见.mp3"
				},
				{
                "track": 462,
                "name": "裴勇俊-MyMemory",
                "length": "4:46",
                "file": "精选/裴勇俊-MyMemory.mp3"
				},
				{
                "track": 461,
                "name": "庞龙-你是我的玫瑰花",
                "length": "4:46",
                "file": "精选/庞龙-你是我的玫瑰花.mp3"
				},
				{
                "track": 460,
                "name": "庞龙-两只蝴蝶",
                "length": "4:46",
                "file": "精选/庞龙-两只蝴蝶.mp3"
				},
				{
                "track": 459,
                "name": "潘越云-我是不是你最疼爱的人",
                "length": "4:46",
                "file": "精选/潘越云-我是不是你最疼爱的人.mp3"
				},
				{
                "track": 458,
                "name": "潘越云-天天天蓝",
                "length": "4:46",
                "file": "精选/潘越云-天天天蓝.mp3"
				},
				{
                "track": 457,
                "name": "潘玮柏-快乐崇拜",
                "length": "4:46",
                "file": "精选/潘玮柏-快乐崇拜.mp3"
				},
				{
                "track": 456,
                "name": "潘玮柏-不得不爱",
                "length": "4:46",
                "file": "精选/潘玮柏-不得不爱.mp3"
				},
				{
                "track": 455,
                "name": "潘玮柏、苏芮-我想更懂你",
                "length": "4:46",
                "file": "精选/潘玮柏、苏芮-我想更懂你.mp3"
				},
				{
                "track": 454,
                "name": "潘美辰-我想有个家",
                "length": "4:46",
                "file": "精选/潘美辰-我想有个家.mp3"
				},
				{
                "track": 453,
                "name": "潘安邦-外婆的澎湖湾",
                "length": "4:46",
                "file": "精选/潘安邦-外婆的澎湖湾.mp3"
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