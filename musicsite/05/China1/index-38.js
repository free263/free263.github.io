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
                "track": 557,
                "name": "汤潮-美了美了",
                "length": "4:46",
                "file": "精选/汤潮-美了美了.mp3"
				},
				{
                "track": 556,
                "name": "汤潮-狼爱上羊",
                "length": "4:46",
                "file": "精选/汤潮-狼爱上羊.mp3"
				},
				{
                "track": 555,
                "name": "谭咏麟-再见亦是泪",
                "length": "4:46",
                "file": "精选/谭咏麟-再见亦是泪.mp3"
				},
				{
                "track": 554,
                "name": "谭咏麟-爱在深秋",
                "length": "4:46",
                "file": "精选/谭咏麟-爱在深秋.mp3"
				},
				{
                "track": 553,
                "name": "邰正宵-找一个字代替",
                "length": "4:46",
                "file": "精选/邰正宵-找一个字代替.mp3"
				},
				{
                "track": 552,
                "name": "邰正宵-一千零一夜",
                "length": "4:46",
                "file": "精选/邰正宵-一千零一夜.mp3"
				},
				{
                "track": 551,
                "name": "邰正宵-心要让你听见",
                "length": "4:46",
                "file": "精选/邰正宵-心要让你听见.mp3"
				},
				{
                "track": 550,
                "name": "邰正宵-千纸鹤",
                "length": "4:46",
                "file": "精选/邰正宵-千纸鹤.mp3"
				},
				{
                "track": 549,
                "name": "邰正宵-九百九十九朵玫瑰",
                "length": "4:46",
                "file": "精选/邰正宵-九百九十九朵玫瑰.mp3"
				},
				{
                "track": 548,
                "name": "邰正宵、孙悦-好人好梦",
                "length": "4:46",
                "file": "精选/邰正宵、孙悦-好人好梦.mp3"
				},
				{
                "track": 547,
                "name": "索朗扎西-姑娘我爱你",
                "length": "4:46",
                "file": "精选/索朗扎西-姑娘我爱你.mp3"
				},
				{
                "track": 546,
                "name": "孙悦-祝你平安",
                "length": "4:46",
                "file": "精选/孙悦-祝你平安.mp3"
				},
				{
                "track": 545,
                "name": "孙悦-幸福快车",
                "length": "4:46",
                "file": "精选/孙悦-幸福快车.mp3"
				},
				{
                "track": 544,
                "name": "孙悦-心情不错",
                "length": "4:46",
                "file": "精选/孙悦-心情不错.mp3"
				},
				{
                "track": 543,
                "name": "孙悦-快乐指南",
                "length": "4:46",
                "file": "精选/孙悦-快乐指南.mp3"
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