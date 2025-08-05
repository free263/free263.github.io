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
                "track": 887,
                "name": "郑秀文-独家试唱",
                "length": "4:46",
                "file": "精选/郑秀文-独家试唱.mp3"
				},
				{
                "track": 886,
                "name": "郑钧-回到拉萨",
                "length": "4:46",
                "file": "精选/郑钧-回到拉萨.mp3"
				},
				{
                "track": 885,
                "name": "郑钧-灰姑娘",
                "length": "4:46",
                "file": "精选/郑钧-灰姑娘.mp3"
				},
				{
                "track": 884,
                "name": "甄妮-我曾用心爱着你",
                "length": "4:46",
                "file": "精选/甄妮-我曾用心爱着你.mp3"
				},
				{
                "track": 883,
                "name": "甄妮-鲁冰花",
                "length": "4:46",
                "file": "精选/甄妮-鲁冰花.mp3"
				},
				{
                "track": 882,
                "name": "赵咏华-最浪漫的事",
                "length": "4:46",
                "file": "精选/赵咏华-最浪漫的事.mp3"
				},
				{
                "track": 881,
                "name": "赵英俊-大王叫我来巡山",
                "length": "4:46",
                "file": "精选/赵英俊-大王叫我来巡山.mp3"
				},
				{
                "track": 880,
                "name": "赵薇-情深深雨濛濛",
                "length": "4:46",
                "file": "精选/赵薇-情深深雨濛濛.mp3"
				},
				{
                "track": 879,
                "name": "赵薇-好想好想",
                "length": "4:46",
                "file": "精选/赵薇-好想好想.mp3"
				},
				{
                "track": 878,
                "name": "赵薇-爱情大魔咒",
                "length": "4:46",
                "file": "精选/赵薇-爱情大魔咒.mp3"
				},
				{
                "track": 877,
                "name": "赵露思-时光话",
                "length": "4:46",
                "file": "精选/赵露思-时光话.mp3"
				},
				{
                "track": 876,
                "name": "赵雷-成都",
                "length": "4:46",
                "file": "精选/赵雷-成都.mp3"
				},
				{
                "track": 875,
                "name": "赵方婧-直觉",
                "length": "4:46",
                "file": "精选/赵方婧-直觉.mp3"
				},
				{
                "track": 874,
                "name": "赵方婧-小暑",
                "length": "4:46",
                "file": "精选/赵方婧-小暑.mp3"
				},
				{
                "track": 873,
                "name": "赵方婧-瑞鹤仙",
                "length": "4:46",
                "file": "精选/赵方婧-瑞鹤仙.mp3"
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