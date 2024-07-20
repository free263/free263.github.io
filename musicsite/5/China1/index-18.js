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
                "track": 857,
                "name": "张学友-只愿一生爱一人",
                "length": "4:46",
                "file": "精选/张学友-只愿一生爱一人.mp3"
				},
				{
                "track": 856,
                "name": "张学友-只想一生跟你走",
                "length": "4:46",
                "file": "精选/张学友-只想一生跟你走.mp3"
				},
				{
                "track": 855,
                "name": "张学友-一千个伤心的理由",
                "length": "4:46",
                "file": "精选/张学友-一千个伤心的理由.mp3"
				},
				{
                "track": 854,
                "name": "张学友-一路上有你",
                "length": "4:46",
                "file": "精选/张学友-一路上有你.mp3"
				},
				{
                "track": 853,
                "name": "张学友-心如刀割",
                "length": "4:46",
                "file": "精选/张学友-心如刀割.mp3"
				},
				{
                "track": 852,
                "name": "张学友-我等到花儿也谢了",
                "length": "4:46",
                "file": "精选/张学友-我等到花儿也谢了.mp3"
				},
				{
                "track": 851,
                "name": "张学友-吻别",
                "length": "4:46",
                "file": "精选/张学友-吻别.mp3"
				},
				{
                "track": 850,
                "name": "张学友-秋意浓",
                "length": "4:46",
                "file": "精选/张学友-秋意浓.mp3"
				},
				{
                "track": 849,
                "name": "张学友-情书",
                "length": "4:46",
                "file": "精选/张学友-情书.mp3"
				},
				{
                "track": 848,
                "name": "张学友-你好毒",
                "length": "4:46",
                "file": "精选/张学友-你好毒.mp3"
				},
				{
                "track": 847,
                "name": "张学友-李香兰",
                "length": "4:46",
                "file": "精选/张学友-李香兰.mp3"
				},
				{
                "track": 846,
                "name": "张学友-分手总要在雨天",
                "length": "4:46",
                "file": "精选/张学友-分手总要在雨天.mp3"
				},
				{
                "track": 845,
                "name": "张学友-烦恼歌",
                "length": "4:46",
                "file": "精选/张学友-烦恼歌.mp3"
				},
				{
                "track": 844,
                "name": "张学友-饿狼传说",
                "length": "4:46",
                "file": "精选/张学友-饿狼传说.mp3"
				},
				{
                "track": 843,
                "name": "张学友-当我想起你",
                "length": "4:46",
                "file": "精选/张学友-当我想起你.mp3"
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