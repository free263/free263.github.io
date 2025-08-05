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
                "track": 257,
                "name": "黄绮珊-剪爱(Live)",
                "length": "4:46",
                "file": "精选/黄绮珊-剪爱(Live).mp3"
				},
				{
                "track": 256,
                "name": "黄品源-你怎么舍得我难过",
                "length": "4:46",
                "file": "精选/黄品源-你怎么舍得我难过.mp3"
				},
				{
                "track": 255,
                "name": "黄品源-海浪",
                "length": "4:46",
                "file": "精选/黄品源-海浪.mp3"
				},
				{
                "track": 254,
                "name": "黄龄、Tang Duy Tan-叹",
                "length": "4:46",
                "file": "精选/黄龄、Tang Duy Tan-叹.mp3"
				},
				{
                "track": 253,
                "name": "黄磊-我想我是海",
                "length": "4:46",
                "file": "精选/黄磊-我想我是海.mp3"
				},
				{
                "track": 252,
                "name": "黄安-样样红",
                "length": "4:46",
                "file": "精选/黄安-样样红.mp3"
				},
				{
                "track": 251,
                "name": "黄安-新鸳鸯蝴蝶梦",
                "length": "4:46",
                "file": "精选/黄安-新鸳鸯蝴蝶梦.mp3"
				},
				{
                "track": 250,
                "name": "黄安-东南西北风",
                "length": "4:46",
                "file": "精选/黄安-东南西北风.mp3"
				},
				{
                "track": 249,
                "name": "华晨宇-齐天",
                "length": "4:46",
                "file": "精选/华晨宇-齐天.mp3"
				},
				{
                "track": 248,
                "name": "花僮-浪子闲话",
                "length": "4:46",
                "file": "精选/花僮-浪子闲话.mp3"
				},
				{
                "track": 247,
                "name": "花儿乐队-嘻唰唰",
                "length": "4:46",
                "file": "精选/花儿乐队-嘻唰唰.mp3"
				},
				{
                "track": 246,
                "name": "花儿乐队-穷开心",
                "length": "4:46",
                "file": "精选/花儿乐队-穷开心.mp3"
				},
				{
                "track": 245,
                "name": "胡杨林-香水有毒",
                "length": "4:46",
                "file": "精选/胡杨林-香水有毒.mp3"
				},
				{
                "track": 244,
                "name": "胡彦斌-红颜",
                "length": "4:46",
                "file": "精选/胡彦斌-红颜.mp3"
				},
				{
                "track": 243,
                "name": "胡夏-那些年",
                "length": "4:46",
                "file": "精选/胡夏-那些年.mp3"
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