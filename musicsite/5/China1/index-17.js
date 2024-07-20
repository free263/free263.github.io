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
                "track": 872,
                "name": "赵方婧-青灯",
                "length": "4:46",
                "file": "精选/赵方婧-青灯.mp3"
				},
				{
                "track": 871,
                "name": "赵方婧-芒种",
                "length": "4:46",
                "file": "精选/赵方婧-芒种.mp3"
				},
				{
                "track": 870,
                "name": "赵方婧-尽头",
                "length": "4:46",
                "file": "精选/赵方婧-尽头.mp3"
				},
				{
                "track": 869,
                "name": "赵方婧-闭月",
                "length": "4:46",
                "file": "精选/赵方婧-闭月.mp3"
				},
				{
                "track": 868,
                "name": "赵传-我是一只小小鸟",
                "length": "4:46",
                "file": "精选/赵传-我是一只小小鸟.mp3"
				},
				{
                "track": 867,
                "name": "赵传-我很丑可是我很温柔",
                "length": "4:46",
                "file": "精选/赵传-我很丑可是我很温柔.mp3"
				},
				{
                "track": 866,
                "name": "张芸京-偏爱",
                "length": "4:46",
                "file": "精选/张芸京-偏爱.mp3"
				},
				{
                "track": 865,
                "name": "张芸京-春泥",
                "length": "4:46",
                "file": "精选/张芸京-春泥.mp3"
				},
				{
                "track": 864,
                "name": "张云雷-探清水河",
                "length": "4:46",
                "file": "精选/张云雷-探清水河.mp3"
				},
				{
                "track": 863,
                "name": "张雨生-一天到晚游泳的鱼",
                "length": "4:46",
                "file": "精选/张雨生-一天到晚游泳的鱼.mp3"
				},
				{
                "track": 862,
                "name": "张雨生-我的未来不是梦",
                "length": "4:46",
                "file": "精选/张雨生-我的未来不是梦.mp3"
				},
				{
                "track": 861,
                "name": "张雨生-大海",
                "length": "4:46",
                "file": "精选/张雨生-大海.mp3"
				},
				{
                "track": 860,
                "name": "张宇-月亮惹的祸",
                "length": "4:46",
                "file": "精选/张宇-月亮惹的祸.mp3"
				},
				{
                "track": 859,
                "name": "张宇-雨一直下",
                "length": "4:46",
                "file": "精选/张宇-雨一直下.mp3"
				},
				{
                "track": 858,
                "name": "张宇-一言难尽",
                "length": "4:46",
                "file": "精选/张宇-一言难尽.mp3"
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