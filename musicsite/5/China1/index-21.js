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
                "track": 812,
                "name": "张韶涵、王赫野-篇章",
                "length": "4:46",
                "file": "精选/张韶涵、王赫野-篇章.mp3"
				},
				{
                "track": 811,
                "name": "张娜拉-泪流满面",
                "length": "4:46",
                "file": "精选/张娜拉-泪流满面.mp3"
				},
				{
                "track": 810,
                "name": "张娜拉-SweetDream韩文",
                "length": "4:46",
                "file": "精选/张娜拉-SweetDream韩文.mp3"
				},
				{
                "track": 809,
                "name": "张明敏-我的中国心",
                "length": "4:46",
                "file": "精选/张明敏-我的中国心.mp3"
				},
				{
                "track": 808,
                "name": "张明敏-龙的传人",
                "length": "4:46",
                "file": "精选/张明敏-龙的传人.mp3"
				},
				{
                "track": 807,
                "name": "张靓颖-终于等到你",
                "length": "4:46",
                "file": "精选/张靓颖-终于等到你.mp3"
				},
				{
                "track": 806,
                "name": "张靓颖-如果这就是爱情",
                "length": "4:46",
                "file": "精选/张靓颖-如果这就是爱情.mp3"
				},
				{
                "track": 805,
                "name": "张靓颖-画心",
                "length": "4:46",
                "file": "精选/张靓颖-画心.mp3"
				},
				{
                "track": 804,
                "name": "张敬轩-断点",
                "length": "4:46",
                "file": "精选/张敬轩-断点.mp3"
				},
				{
                "track": 803,
                "name": "张杰-这,就是爱",
                "length": "4:46",
                "file": "精选/张杰-这,就是爱.mp3"
				},
				{
                "track": 802,
                "name": "张杰-雪龙吟",
                "length": "4:46",
                "file": "精选/张杰-雪龙吟.mp3"
				},
				{
                "track": 801,
                "name": "张杰-星星",
                "length": "4:46",
                "file": "精选/张杰-星星.mp3"
				},
				{
                "track": 800,
                "name": "张杰-逆战",
                "length": "4:46",
                "file": "精选/张杰-逆战.mp3"
				},
				{
                "track": 799,
                "name": "张惠妹-站在高岗上",
                "length": "4:46",
                "file": "精选/张惠妹-站在高岗上.mp3"
				},
				{
                "track": 798,
                "name": "张惠妹-原来你什么都不想要",
                "length": "4:46",
                "file": "精选/张惠妹-原来你什么都不想要.mp3"
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