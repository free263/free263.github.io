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
                "track": 362,
                "name": "林俊杰、蔡卓妍-小酒窝",
                "length": "4:46",
                "file": "精选/林俊杰、蔡卓妍-小酒窝.mp3"
				},
				{
                "track": 361,
                "name": "林宸希-不再问",
                "length": "4:46",
                "file": "精选/林宸希-不再问.mp3"
				},
				{
                "track": 360,
                "name": "梁咏琪-胆小鬼",
                "length": "4:46",
                "file": "精选/梁咏琪-胆小鬼.mp3"
				},
				{
                "track": 359,
                "name": "梁静茹-勇气",
                "length": "4:46",
                "file": "精选/梁静茹-勇气.mp3"
				},
				{
                "track": 358,
                "name": "梁静茹-宁夏",
                "length": "4:46",
                "file": "精选/梁静茹-宁夏.mp3"
				},
				{
                "track": 357,
                "name": "梁静茹-可惜不是你",
                "length": "4:46",
                "file": "精选/梁静茹-可惜不是你.mp3"
				},
				{
                "track": 356,
                "name": "梁静茹-会呼吸的痛",
                "length": "4:46",
                "file": "精选/梁静茹-会呼吸的痛.mp3"
				},
				{
                "track": 355,
                "name": "梁静茹-分手快乐",
                "length": "4:46",
                "file": "精选/梁静茹-分手快乐.mp3"
				},
				{
                "track": 354,
                "name": "梁静茹-爱你不是两三天",
                "length": "4:46",
                "file": "精选/梁静茹-爱你不是两三天.mp3"
				},
				{
                "track": 353,
                "name": "李玉刚-新贵妃醉酒",
                "length": "4:46",
                "file": "精选/李玉刚-新贵妃醉酒.mp3"
				},
				{
                "track": 352,
                "name": "李玉刚-枉凝眉",
                "length": "4:46",
                "file": "精选/李玉刚-枉凝眉.mp3"
				},
				{
                "track": 351,
                "name": "李玉刚-万疆",
                "length": "4:46",
                "file": "精选/李玉刚-万疆.mp3"
				},
				{
                "track": 350,
                "name": "李玉刚-铁血丹心",
                "length": "4:46",
                "file": "精选/李玉刚-铁血丹心.mp3"
				},
				{
                "track": 349,
                "name": "李玉刚-菊花台",
                "length": "4:46",
                "file": "精选/李玉刚-菊花台.mp3"
				},
				{
                "track": 348,
                "name": "李玉刚-贵妃醉酒",
                "length": "4:46",
                "file": "精选/李玉刚-贵妃醉酒.mp3"
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